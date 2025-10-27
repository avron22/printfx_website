import "./Infocus.css";
import { useState } from "react";
import Lightbox from "../components/Lightbox";

const Infocus = () => {

    {/*Lightbox */}

      const [isOpen, setIsOpen] = useState(false);
        const [activeImage, setActiveImage] = useState("");

        const openLightbox = (src: string) => {
            setActiveImage(src);
            setIsOpen(true);
        };

    {/*Infocus Main */}
    return(
        <>
        <div className="w-full sm:py-5 lg:py-25">
            <img className="sm:ml-5 lg:ml-25 w-[250px] 2xl:w-[400px]" src="/src/assets/infocus.png" alt="" />
            {/*RUNWAY MODELS SECTION */}
            <section className="overflow-hidden flex flex-col items-center justify-center">
                <h1 className="text-[40px] 2xl:text-5xl 2xl:pb-5 font-medium">Runway Models</h1>
                <div className="sm:px-0 flex flex-col sm:gap-2 sm:w-[80%] md:max-xl:px-5 xl:gap-5 py-5 lg:px-20 md:w-full">
                    {/*Row 1 */}
                    <div className=" sm:grid sm:grid-cols-2 sm:pl-0 sm:gap-2 md:max-lg:pl-[10vw] md:max-lg:pr-[5vw] lg:max-xl:pl-[95px] md:max-lg:min-h-[150px] lg:max-xl:min-h-[250px] xl:max-2xl:min-h-[400px] xl:max-2xl:pl-[155px] 2xl:min-h-[500px] 2xl:pl-[260px] 2xl:pr-[50px] md:grid md:grid-cols-4 xl:gap-5 justify-items-start">
                        <div className="sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-1.png")}>
                                <img className="block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] xl:translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]" 
                                     src="./src/assets/Artboard-1.png" 
                                     alt="Model 1" 
                                />
                            </div> 
                        </div>
                        <div className="sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-2.png")}>
                                    <img className="block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] xl:translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]" 
                                         src="./src/assets/Artboard-2.png" 
                                         alt="Model 2" 
                                    />
                            </div> 
                        </div>
                        <div className="sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-3.png")}>
                                    <img className="block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] xl:translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]" 
                                         src="./src/assets/Artboard-3.png" 
                                         alt="Model 3" 
                                    />
                            </div> 
                            
                        </div>
                        <div className="sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-4.png")}>
                                    <img className="block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] xl:translate-y-[80px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-4.png"
                                        alt="Model 4" 
                                    />
                            </div> 
                        </div>
                    </div>
                    {/*Row 2 */}
                    <div className="sm:grid sm:grid-cols-2 sm:pr-0 sm:gap-2 md:max-lg:pl-[2.5vw] md:max-lg:pr-[12.5vw] lg:max-xl:pr-[95px] lg:max-xl:min-h-[250px] xl:max-2xl:min-h-[400px] xl:max-2xl:pr-[150px] 2xl:min-h-[500px] 2xl:pl-[50px] 2xl:pr-[260px] md:grid md:grid-cols-4 xl:gap-5 justify-items-start">
                        <div className="sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-5.png")}>
                                    <img className=" block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] :translate-y-[50px] xl:translate-y-[70px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-5.png" 
                                         alt="Model 5" 
                                    />
                            </div>                    
                        </div>
                        <div className="sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-6.png")}>
                                    <img className=" block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] xl:translate-y-[70px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-6.png" 
                                         alt="Model 6" 
                                    />
                            </div>          
                        </div>
                        <div className="sm:max-md:translate-x-[50%] sm:max-lg:h-auto lg:max-xl:h-[250px] xl:max-2xl:h-[400px] 2xl:h-[550px] relative overflow-hidden  z-1 skew-x-[-20deg]">
                            <div className="performersImageWrapper cursor-pointer"
                                 onClick={() => openLightbox("./src/assets/Artboard-7.png")}>
                                    <img className=" block w-full h-auto object-cover skew-x-[20deg] sm:scale-[1.7] md:scale-[1.6] sm:translate-y-[50px] md:translate-y-[40px] xl:translate-y-[70px] transition-all duration-400 ease-in-out hover:translate-x-[-10px]"
                                         src="./src/assets/Artboard-7.png" 
                                         alt="Model 7" 
                                    />  
                            </div> 
                        </div>
                        {/*Contact Us tile*/}
                        <div className=" sm:max-md:col-span-2 sm:max-md:p-[14px] sm:max-md:mx-[-40px] md:max-lg:ml-[20px] md:max-lg:mr-[-60px] md:max-xl:p-0 lg:max-xl:ml-[40px] md:max-lg:min-h-[150px] lg:max-xl:h-[250px] xl:max-2xl:h-[400px]  2xl:h-[550px] lg:max-xl:max-w-[280px] relative bg-[var(--bg)] text-[var(--text)] flex flex-col justify-center items-center xl:p-5 gap-[30px] lg:ml-10 lg:mr-[-140px]">
                            <p className="sm:max-md:text-center sm:text-[22px] md:max-lg:text-[1rem] md:max-lg:mb-0 lg:max-xl:text-xl xl:text-3xl 2xl:text-5xl 2xl:leading-normal xl:mb-5">Become part of a vibrant community celebrating youth, talent, and fashion.</p>
                            <div className="max-w-[350px]">
                                <div className="sm:max-md:pl-[50px] flex justify-end group">
                                    <a className="flex justify-end group" href="https://manilarunwayrepublic.com/contact">
                                        <button className="sm:max-lg:text-[0.8rem] lg:max-xl:text-[1rem] relative bg-[var(--bg)] text-[var(--text)] border-solid border-3 rounded-[26px] sm:max-lg:py-0 md:max-lg:px-2 px-6 py-3 text-[1.8rem] 
                                                        cursor-pointer overflow-hidden transition-colors duration-400 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--text)] before:z-0 before:transition-all before:duration-400 before:ease-in-out hover:before:w-full">
                                            <span className="sm:max-lg:text-[18px] lg:max-xl:text-xl relative text-3xl tracking-wider z-[1] group-hover:text-[var(--bg)] transition-colors duration-400 ease-in-out">Contact Us</span>
                                        </button>
                                        <img className="translate-x-[-30px] h-[50px] w-[50px] opacity-0 transition-all duration-400 ease-in-out group-hover: group-hover:translate-y-[-40px] group-hover:translate-x-0 group-hover:opacity-100" 
                                            src="./src/assets/Icon-weather-stars.svg" 
                                            alt="" 
                                        />
                                    </a>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </section>
            {/*PERFORMERS SECTION */}
            <section className="sm:max-lg:px-[20px] md:max-lg:px-[60px] flex flex-col items-center justify-center pb-25">
                <h1 className="sm:max-lg:py-[40px] text-[40px] 2xl:text-5xl font-medium py-[80px]">Performers</h1>
                <p className="sm:max-md:text-[18px] md:text-xl 2xl:text-3xl pb-[60px] text-center">Showcase your talents and be known. Here are our Model / Performers from The Voice Kids.</p>
                <div className="sm:max-lg:px-0 sm:max-md:gap-[10px] sm:max-md:grid sm:max-md:grid-cols-2 md:max-lg:gap-[60px] lg:max-xl:px-[150px] xl:max-2xl:px-[288px] flex gap-[90px] px-[288px] w-full justify-between">
                    <div
                        className="sm:max-md:hidden performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-1.jpg")}>
                        <img
                            className="w-full h-auto object-cover shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-1.jpg"
                            alt="Performer 1"
                        />
                    </div>
                    <div
                        className="performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-2.jpg")}>
                        <img
                            className="w-full h-auto object-cover shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-2.jpg"
                            alt="Performer 2"
                        />
                    </div>
                    <div
                        className="performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-3.jpg")}>
                        <img
                            className="w-full h-auto object-cover shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-3.jpg"
                            alt="Performer 3"
                        />
                    </div>
                    {/*Mobile Performer Image 1 */}
                    <div
                        className="sm:max-md:col-span-2 md:hidden performersImageWrapper cursor-pointer"
                        onClick={() => openLightbox("./src/assets/Performer-1.jpg")}>
                        <img
                            className="w-full h-auto sm:max-md:max-h-[500px] object-cover object-top shadow-[3px_3px_20px_0px_rgba(0,0,0,0.4)]"
                            src="./src/assets/Performer-1.jpg"
                            alt="Performer 1"
                        />
                    </div>
                </div>
            </section>
            {/*EVENTS SECTION */}
            <section className="sm:max-md:px-[5px] sm:max-md:pb-[5px] md:max-lg:px-[80px] md:max-lg:pb-[60px] lg:max-xl:px-[100px] flex flex-col items-center justify-center pb-25 2xl:pb-40 px-40 bg-[#cfcfcf]">
                <h1 className="text-[40px] 2xl:text-5xl font-medium pt-[20px] pb-[40px]">Events</h1>
                <p className="sm:max-md:pb-[20px] text-xl pb-[60px] 2xl:pb-[120px] 2xl:text-3xl text-center">Here’s a sneak peek at our international stage.</p>
                {/*Desktop Events */}
                <div className="sm:max-md:hidden md:max-xl:gap-x-[60px] md:max-xl:gap-y-[80px] 2xl:gap-[300px] grid grid-cols-3 gap-30">
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-1.png" className="2xl:scale-[1.4]" alt="Event 1" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-2.png" className="2xl:scale-[1.4]" alt="Event 2" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-3.png" className="2xl:scale-[1.4]" alt="Event 3" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-4.png" className="2xl:scale-[1.4]" alt="Event 4" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-5.png" className="2xl:scale-[1.4]" alt="Event 5" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-6.png" className="2xl:scale-[1.4]" alt="Event 6" />
                    </div>
                </div>
                {/*Mobile Events */}
                <div className="md:hidden sm:max-md:gap-1 sm:max-md:grid sm:max-md:grid-cols-2">
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-3.png" alt="Event 1" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-2.png" alt="Event 2" />
                    </div>
                    <div className="eventImageWrapper col-span-2 m-auto">
                        <img src="./src/assets/Event-1.png" alt="Event 3" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-5.png" alt="Event 5" />
                    </div>
                    <div className="eventImageWrapper">
                        <img src="./src/assets/Event-6.png" alt="Event 6" />
                    </div>
                </div>
            </section>

            {/* Lightbox instance */}
            <Lightbox
                src={activeImage}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
        </>
    );
};

export default Infocus;