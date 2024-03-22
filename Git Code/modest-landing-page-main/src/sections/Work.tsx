import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    serviceType: '',
    from: '',
    to: '',
    kg: '',
    dimension: '',
    duration: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, serviceType: value });
  };

  const renderAdditionalFields = () => {
    if (formData.serviceType === '1' || formData.serviceType === '2' || formData.serviceType === '4' || formData.serviceType === '5') {
      return (
        <>
          <div className="mt-3">
            <label className="text-sm text-white">From:</label>
            <input type="text" name="from" value={formData.from} onChange={handleChange} className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mt-3">
            <label className="text-sm text-white">To:</label>
            <input type="text" name="to" value={formData.to} onChange={handleChange} className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mt-3">
            <label className="text-sm text-white">Kg:</label>
            <input type="text" name="kg" value={formData.kg} onChange={handleChange} className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
        </>
      );
    } else if (formData.serviceType === '3') 
      return 
        <>
          <div className="mt-3">
            <label className="text-sm text-white">Kg:</label>
            <input type="text" name="kg" value={formData.kg} onChange={handleChange} className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mt-3">
            <label className="text-sm text-white">Dimension:</label>
            <input type="text" name="dimension" value={formData.dimension} onChange={handleChange} className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
          <div className="mt-3">
            <label className="text-sm text-white">Duration:</label>
            <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="block w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-blue-500" />
          </div>
        </>
      ;
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          contact: '',
          serviceType: '',
          from: '',
          to: '',
          kg: '',
          dimension: '',
          duration: ''
        });
      } else {
        toast.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div className="wrapper  bg-section-dark-color py-24 -mt-5 ml-200">
  {/* Header */}
  <div className="flex items-center gap-4 pl-[200px]">
  <div className="w-[10px] h-[35px] bg-[#4e5a62]" />
  <h2 className="uppercase text-4xl tracking-tight font-[400] text-white">
      BOOKINGS.
    </h2>
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit} className="max-w-md mx-[200px] shadow-md rounded px-8 pt-6 pb-8 ">
    <div className="mb-4">
      <label htmlFor="name" className=" text-white text-sm font mb-2">Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="text-white text-sm font mb-2">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
    </div>
    <div className="mb-4">
      <label htmlFor="contact" className="text-white text-sm font mb-2">Contact:</label>
      <input type="text" name="contact" value={formData.contact} onChange={handleChange} id="contact" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your contact number" />
    </div>
    <div className="mb-4">
      <label htmlFor="serviceType" className="text-white text-sm font mb-2">Service Type:</label>
      <select name="serviceType" value={formData.serviceType} onChange={handleServiceTypeChange} id="serviceType" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="">Select service type</option>
        <option value="1">Two Wheeler Parcel</option>
        <option value="2">Parcel Booking</option>
        <option value="3">Warehouse</option>
        <option value="4">Full Truck</option>
        <option value="5">Half Truck</option>
      </select>
    </div>
    {/* Additional fields based on service type */}
    {renderAdditionalFields()}
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
  </form>
  <ToastContainer />
</div>

  );
};

export default EmailForm;
