const StayInTouch = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="flex items-center gap-4 max-w-5xl mx-auto">
        <div className="w-[10px] h-[35px] bg-[#dee5eb]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-text-dark-primary">
          stay in touch.
        </h2>
      </div>
      <div className="mt-11 relative border">
        <img src="/assets/map.png" alt="map" className="w-full h-[270px]" />
        <div className="absolute top-[170px] right-[200px] 2xl:right-[270px] w-[470px] bg-white p-6 flex flex-col gap-6">
          <div className="w-full flex gap-3 items-center">
            <div className="w-1/2 flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm text-text-dark-secondary tracking-tight ml-1">
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#eaeef1] px-3 py-2 focus:outline-none rounded-[4px]"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-text-dark-secondary tracking-tight ml-1">
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#eaeef1] px-3 py-2 focus:outline-none rounded-[4px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm text-text-dark-secondary tracking-tight ml-1">
              YOUR MESSAGE
            </label>
            <textarea
              id="message"
              rows={6}
              className="bg-[#eaeef1] px-3 py-2 focus:outline-none rounded-[4px]"
            />
          </div>
          <button className="w-36 bg-primary-color rounded-[4px] text-white py-2 text-sm font-[500]">
            SEND MESSAGE
          </button>
        </div>
      </div>
      <div className="mt-11 max-w-5xl mx-auto">
        <div className="max-w-[495px] flex flex-col gap-6">
          <h2 className="uppercase text-[20px] text-text-dark-primary font-[500] tracking-tight ml-1">
            contact information
          </h2>
          <p className="text-[1rem]">
            Manoj M 
            <br>
            </br>
            7795675263
            <br></br>
            HMT Industrial estate kammagondanahalli
            <br></br>
            Bengaluru-560013
         
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
