// const Hero = () => {
//   return (
  
//     <section className="h-screen hero flex items-center pl-[9.75rem]">
//       <div className="flex flex-col gap-6 text-white mt-[3rem] max-w-2xl">
//         <h1 className="text-[#000000] text-[1.5rem] font-[900] uppercase">
//           Ship your dreams
//         </h1>
//         <p className="text-[#000000] font-[500] text-[1.5rem]">
//         Create a delightful online journey by optimising your
//         shipping process and everything surrounding it
//         </p>
       
//       </div>
//     </section>
//   );
// };

// export default Hero;
// const Hero = () => {
//   return (
//     <section className="h-screen hero flex items-center pl-[9.75rem]">
//       <div className="flex flex-col gap-6 text-white mt-[3rem] max-w-2xl">
//         <h1 className="text-[#000000] text-[1.5rem] font-[900] uppercase">
//           Ship your dreams
//         </h1>
//         <p className="text-[#000000] font-[500] text-[1.5rem]">
//           Create a delightful online journey by optimizing your shipping process and everything surrounding it
//         </p>
//       </div>
//       <div className="video-container">
//         <iframe
//           className="video-background"
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/5Gsam6jyRI0?autoplay=1&controls=0&mute=1&loop=1&playlist=5Gsam6jyRI0"
//           title="YouTube video"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="h-screen hero flex items-center pl-[9.75rem]">
//       <video autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 ">
//         <source src="/assets/Transportation.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="flex flex-col gap-6 text-white mt-[3rem] max-w-2xl">
//         <h1 className="text-[#000000] text-[1.5rem] font-[900] uppercase">
//           Ship your dreams
//         </h1>
//         <p className="text-[#000000] font-[500] text-[1.5rem]">
//           Create a delightful online journey by optimising your
//           shipping process and everything surrounding it
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section className="h-[70vh] relative overflow-hidden">
    <video autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0">
      <source src="/assets/Transportation.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="h-full flex items-center justify-center">
      <div className="text-white max-w-2xl">
        <h1 className="text-[#000000] text-[1.5rem] font-[900] uppercase">
          Ship your dreams
        </h1>
        <p className="text-[#000000] font-[500] text-[1.5rem]">
          Create a delightful online journey by optimising your
          shipping process and everything surrounding it
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;

