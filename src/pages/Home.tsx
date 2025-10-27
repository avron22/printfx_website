import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="sm:max-md:px-[20px] sm:max-md:max-w-[100%] sm:max-md:mx-[0px] max-w-[1600px] mx-auto overflow-x-hidden">
        {/*Mobile Images*/}
        <section className="grid grid-cols-[1fr_1.8fr] md:hidden">
          <img
            src="/src/assets/HomeImg3.png"
            alt="Home Image 3"
            className="translate-x-[8%]"
          />
          <img
            src="/src/assets/HomeImg1.png"
            alt="Home Image 1"
            className="translate-x-[-8%]"
          />        
        </section>
        {/*Texts */}
        <section className="sm:max-md:mt-[-10%] sm:max-md:pt-0 sm:max-md:w-[100%] sm:max-md:mx-0 md:max-lg:w-full md:max-lg:ml-0 md:max-lg:px-[20px] lg:max-xl:mx-[0px] lg:max-xl:ml-[20px] xl:max-xl:ml-[144px] lg:max-xl:text-lg w-1/2 mx-[210px] pt-20">
          <img className="sm:max-md:w-[50%] sm:max-md:ml-auto" src="/src/assets/MANILA.png" alt="Manila" />
          <p className="sm:max-md:px-0 md:max-lg:px-0 md:max-lg:w-[600px] sm:max-lg:text-[20px] md:max-lg:m-auto lg:max-xl:px-0 xl:max-xl:px-25 lg:max-xl:ml-20 px-30 py-10 text-center">
            Welcome to Manila Runway Republic, the ultimate destination for
            young fashion enthusiasts! We are dedicated to nurturing the talents
            of aspiring models and creating high-quality events for kids and
            teens. Our platform offers a comprehensive range of opportunities,
            from professional photoshoots to dazzling fashion shows.
          </p>
          <img
            className="sm:max-md:mr-auto sm:max-md:w-[70%] sm:max-lg:pr-0 lg:max-xl:pr-0 justify-self-end pr-16"
            src="/src/assets/RUNWAY.png"
            alt="Runway"
          />
        </section>
        {/*Mobile Images*/}
        <section className="sm:max-md:mt-[-10%] grid grid-cols-[1.8fr_1fr] items-end md:hidden">
          <img
            src="/src/assets/HomeImg2.png"
            alt="Home Image 2"
            className="translate-x-[8%]"
          />
          <img
            src="/src/assets/HomeImg4.png"
            alt="Home Image 4"
            className="translate-x-[-8%]"
          />        
        </section>

        {/*Tablet Images */}
        <section className="hidden md:max-lg:grid md:max-lg:[grid-template-columns:repeat(4,_20%)] md:max-lg:px-0 w-100% px-30 items-end justify-center translate-y-[-30%]">
          <img
            src="/src/assets/HomeImg3.png"
            alt="Home Image 1"
            className="ml-[-20px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
          <img
            src="/src/assets/HomeImg4.png"
            alt="Home Image 2"
            className="ml-[-75px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
          <img
            src="/src/assets/HomeImg1.png"
            alt="Home Image 3"
            className="ml-[-130px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
          <img
            src="/src/assets/HomeImg2.png"
            alt="Home Image 4"
            className="ml-[-150px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
        </section>

        {/*Desktop Images */}
        <section className="sm:max-lg:hidden lg:max-xl:translate-y-[-55%] lg:max-xl:grid lg:max-xl:grid-cols-4 lg:max-xl:px-0 w-100% px-30 flex items-end justify-center translate-y-[-45%]">
          <img
            src="/src/assets/HomeImg1.png"
            alt="Home Image 1"
            className="lg:max-xl:ml-[20px] xl:max-xl:ml-[90px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
          <img
            src="/src/assets/HomeImg2.png"
            alt="Home Image 2"
            className="lg:max-xl:ml-[20px] xl:max-xl:ml-[90px] ml-[-70px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
          <img
            src="/src/assets/HomeImg3.png"
            alt="Home Image 3"
            className="lg:max-xl:ml-[20px] xl:max-xl:ml-[90px] ml-[-70px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
          <img
            src="/src/assets/HomeImg4.png"
            alt="Home Image 4"
            className="lg:max-xl:ml-[-60px] xl:max-xl:ml-[0px] ml-[-145px] transition-transform duration-400 ease-in-out hover:translate-x-[5px]"
          />
        </section>
        {/*Brand Partners Logos*/}
        <section className="sm:max-lg:translate-y-[0%] lg:max-xl:translate-y-[-60%] sm:max-md:pt-10 sm:max-md:px-0 md:max-lg:px-5 lg:max-xl:px-5 px-20 translate-y-[-80%]">
          <h2 className="sm:max-md:text-center sm:max-md:mb-0 text-2xl font-bold mb-4">Brand Partners</h2>
          <div className="sm:max-md:flex-col flex w-[100%] gap-8 justify-around">
            <div className="flex justify-center items-center">
              <img
                src="/src/assets/logos/AlicioThailand.jpg"
                alt="Alicio Thailand logo"
                className="sm:max-md:w-[140px] w-50"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/src/assets/logos/Diesel.jpg"
                alt="Diesel logo"
                className="sm:max-md:w-[140px] w-50"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/src/assets/logos/DKNY.jpg"
                alt="DKNY logo"
                className="sm:max-md:w-[140px] w-50"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
