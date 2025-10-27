import "./Mainboard.css";

const Mainboard = () => {
    return (
        <>
        <div className="min-h-[80vh] flex flex-col overflow-hidden! justify-center w-full m-0 py-25">
            {/* TOP SECTION - KIDS */}
            <section className="sm:overflow-x-auto sm:ml-0 md:overflow-x-visible  gap-0! justify-center!">
                <div className="relative sm:flex-nowrap sm:max-md:overflow-x-auto flex flex-row md:min-w-[100%] md:px-10 md:justify-center gap-0
                sm:[&::-webkit-scrollbar]:hidden sm:[-ms-overflow-style:none] sm:[scrollbar-width:none]">
                    <button className="sm:max-md:flex sm:max-md:relative sm:ml-5 left-0 md:ml-[3vw] absolute text-5xl border-none bg-transparent font-extrabold mt-[20px] cursor-pointer z-[1000]"><a href="https://manilarunwayrepublic.com/models/kids">KIDS</a></button>
                    {/* Kids Text Left */}
                    <div className="md:justify-end sm:w-[100px] sm:max-md:ml-[-200px] sm:flex-shrink-0 sm:h-[300px] md:w-[10%] md:max-lg:pb-[5%] md:max-lg:h-[250px] lg:max-xl:h-[400px] xl:h-[600px] 2xl:h-[700px] grid grid-rows-6 h-[400px]  z-[-1]">
                        <img className="sm:w-20 sm:max-md:translate-x-[60px] md:max-lg:translate-x-[0px] lg:max-xl:w-25 lg:max-xl:translate-x-[10px] xl:w-40 xl:translate-x-[40px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[40px] md:max-lg:translate-x-[-10px] lg:max-xl:w-25 lg:max-xl:translate-x-[-10px] xl:w-40 xl:translate-x-[-10px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[20px] md:max-lg:translate-x-[-30px] lg:max-xl:w-25 lg:max-xl:translate-x-[-30px] xl:w-40 xl:translate-x-[-60px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[0px] md:max-lg:translate-x-[-50px] lg:max-xl:w-25 lg:max-xl:translate-x-[-50px] xl:w-40 xl:translate-x-[-110px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[-20px] md:max-lg:translate-x-[-70px] lg:max-xl:w-25 lg:max-xl:translate-x-[-70px] xl:w-40 xl:translate-x-[-160px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[-40px] md:max-lg:translate-x-[-90px] lg:max-xl:w-25 lg:max-xl:translate-x-[-90px] xl:w-40 xl:translate-x-[-210px]" src="./src/assets/kidsText.png" alt="" />
                    </div>
                    
                     {/* Kids Photos */}
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
                        <img className="md:max-lg:max-h[80%] h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5" 
                            src="./src/assets/K1.1.png" 
                            alt="Kid 1" 
                        />
                    </div>
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInDown_0.8s_ease-out_0.3s_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5"
                             src="./src/assets/K2.1.png" 
                             alt="Kid 2" 
                        />
                    </div>
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%]  opacity-0 animate-[fadeInDown_0.8s_ease-out_0.6s_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5"
                             src="./src/assets/K3.1.png" 
                             alt="Kid 3" 
                        />
                    </div>
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInDown_0.8s_ease-out_0.9s_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:-translate-y-2.5"
                             src="./src/assets/K4.1.png" 
                             alt="Kid 4" 
                        />
                    </div>

                    {/* Kids Text Right */}
                    <div className="sm:w-[100px] sm:flex-shrink-0 md:w-[10%] sm:h-[300px]  md:max-lg:pb-[5%] md:max-lg:h-[250px] xl:max-2xl:right-5 lg:max-xl:ml-[60px] lg:max-xl:h-[400px] xl:h-[600px] 2xl:h-[700px] grid grid-rows-6 h-[400px] z-[-1] right-0">
                        <img className="sm:w-20 sm:max-md:translate-x-[70px] md:max-lg:translate-x-[90px] lg:max-xl:w-25 lg:max-xl:translate-x-[40px] xl:w-40 xl:translate-x-[230px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[50px] md:max-lg:translate-x-[70px] lg:max-xl:w-25 lg:max-xl:translate-x-[20px] xl:w-40 xl:translate-x-[180px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[30px] md:max-lg:translate-x-[50px] lg:max-xl:w-25 lg:max-xl:translate-x-[0px] xl:w-40 xl:translate-x-[130px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[10px] md:max-lg:translate-x-[30px] lg:max-xl:w-25 lg:max-xl:translate-x-[-20px] xl:w-40 xl:translate-x-[80px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[-10px] md:max-lg:translate-x-[10px] lg:max-xl:w-25 lg:max-xl:translate-x-[-40px] xl:w-40 xl:translate-x-[30px]" src="./src/assets/kidsText.png" alt="" />
                        <img className="sm:w-20 sm:max-md:translate-x-[-30px] md:max-lg:translate-x-[-10px] lg:max-xl:w-25 lg:max-xl:translate-x-[-60px] xl:w-40 xl:translate-x-[-20px]" src="./src/assets/kidsText.png" alt="" />
                    </div>
                </div>
            </section>
            {/* CENTER SECTION */}
            <section className="w-full bg-[var(--accent)] text-[var(--bg)] text-center m-0 mt-[-50px] top-1/2 z-[1000]">
                <h1 className="sm:text-4xl sm:py-5  md:text-[40px] lg:max-2xl:text-[76px] 2xl:text-[100px] font-medium">MANILA RUNWAY REPUBLIC MODELS</h1>
            </section>

            {/* BOTTOM SECTION - TEENS */}
            <section className="sm:overflow-x-auto sm:ml-0 md:overflow-x-visible mt-[-50px]  gap-0! justify-center!">
                <div className="relative sm:flex-nowrap sm:max-md:overflow-x-auto flex flex-row md:min-w-[100%] md:px-10 md:justify-center gap-0
                sm:[&::-webkit-scrollbar]:hidden sm:[-ms-overflow-style:none] sm:[scrollbar-width:none]">
                    <button className="sm:max-md:flex sm:max-md:relative sm:ml-5 left-0 md:ml-[3vw] absolute text-5xl border-none bg-transparent font-extrabold mt-[70px] cursor-pointer z-[1000]"><a href="https://manilarunwayrepublic.com/models/teens">TEENS</a></button>
                    {/* Teens Text Left */}
                    <div className="md:justify-end sm:w-[100px] sm:flex-shrink-0 md:w-[10%] sm:max-md:ml-[-200px] sm:h-[300px] md:max-lg:h-[250px] lg:max-xl:h-[400px] xl:h-[600px] 2xl:h-[700px] pt-[50px] grid grid-rows-6 h-[400px]  z-[-1]">
                        <img className="sm:w-25 sm:max-md:translate-x-[20px] md:max-lg:translate-x-[0px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[0px] w-45 xl:translate-x-[-10px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[0px] md:max-lg:translate-x-[-20px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[-20px] w-45 xl:translate-x-[-40px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-20px] md:max-lg:translate-x-[-40px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[-40px] w-45 xl:translate-x-[-70px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-40px] md:max-lg:translate-x-[-60px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[-60px] w-45 xl:translate-x-[-100px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-60px] md:max-lg:translate-x-[-80px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[-80px] w-45 xl:translate-x-[-130px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-80px] md:max-lg:translate-x-[-100px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[-100px] w-45 xl:translate-x-[-160px]" src="./src/assets/teensText.png" alt="" />
                    </div>

                    {/* Teens Photos */}
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T1.1.png" 
                             alt="Teen 1" 
                        />
                    </div>
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T2.1.png" 
                             alt="Teen 2" 
                        />
                    </div>
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T3.1.png" 
                             alt="Teen 3" 
                        />
                    </div>
                    <div className="sm:w-[250px] sm:flex-shrink-0 md:w-[20%] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]">
                        <img className="h-[100%] object-cover overflow-visible grayscale transition-all duration-400 ease-in-out hover:grayscale-0 hover:translate-y-2.5"
                             src="./src/assets/T4.1.png" 
                             alt="Teen 4" 
                        />
                    </div>
                    
                    {/* Teens Text Right */}
                    <div className="sm:w-[100px] sm:flex-shrink-0 md:w-[10%] sm:h-[300px] md:max-lg:h-[250px] lg:max-xl:right-5 xl:max-2xl:right-10 lg:max-xl:h-[400px] xl:h-[600px] 2xl:h-[700px] pt-[50px] grid grid-rows-6 h-[400px] z-[-1] right-0">
                        <img className="sm:w-25 sm:max-md:translate-x-[50px] md:max-lg:translate-x-[80px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[90px] w-45 xl:translate-x-[190px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[30px] md:max-lg:translate-x-[60px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[70px] w-45 xl:translate-x-[140px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[10px] md:max-lg:translate-x-[40px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[50px] w-45 xl:translate-x-[90px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-10px] md:max-lg:translate-x-[20px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[30px] w-45 xl:translate-x-[40px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-30px] md:max-lg:translate-x-[0px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[10px] w-45 xl:translate-x-[-10px]" src="./src/assets/teensText.png" alt="" />
                        <img className="sm:w-25 sm:max-md:translate-x-[-50px] md:max-lg:translate-x-[-20px] lg:max-xl:w-25 xl:w-35 lg:max-xl:translate-x-[-10px] w-45 xl:translate-x-[-60px]" src="./src/assets/teensText.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Mainboard;