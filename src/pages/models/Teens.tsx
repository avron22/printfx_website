const Teens = () => {
  return (
    <div className="w-full py-24">
      {/* Main header image */}
      <img
        className="ml-24 w-[250px] max-md:ml-5 max-md:w-[200px]"
        src="/src/assets/teen.png"
        alt="Teens Models Title"
      />
      {/* Models Section */}
      <div className="flex flex-col gap-12 px-24 mt-12 max-lg:px-10 max-md:px-6">
        {/* Row 1 */}
        <div
          className="flex flex-wrap justify-center gap-7
                     max-[425px]:flex-col max-[425px]:items-center max-[425px]:gap-10 max-[425px]:flex-nowrap"
        >
          {["9", "6", "7", "8"].map((n) => (
            <div
              key={n}
              className="relative w-[340px] h-[360px] overflow-hidden cursor-pointer transform skew-x-[-20deg]
                         max-lg:w-[300px] max-lg:h-[320px]
                         max-md:w-[240px] max-md:h-[280px]
                         max-[425px]:w-[90%] max-[425px]:max-w-[340px] max-[425px]:h-[260px]"
            >
              <img
                src={`/src/assets/Artboard ${n}.png`}
                alt={`Teens Model ${n}`}
                className="absolute top-0 left-0 w-full h-full object-cover transform skew-x-[20deg] scale-[1.5] translate-y-[10%]
                           transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                           hover:scale-[1.4] hover:translate-y-[2%]"
              />
            </div>
          ))}
        </div>
        {/* Row 2 */}
        <div
          className="flex flex-wrap justify-center gap-7
                     max-[425px]:flex-col max-[425px]:items-center max-[425px]:gap-10 max-[425px]:flex-nowrap"
        >
          {["18", "19"].map((n) => (
            <div
              key={n}
              className="relative w-[340px] h-[360px] overflow-hidden cursor-pointer transform skew-x-[-20deg]
                         max-lg:w-[300px] max-lg:h-[320px]
                         max-md:w-[240px] max-md:h-[280px]
                         max-[425px]:w-[90%] max-[425px]:max-w-[340px] max-[425px]:h-[260px]"
            >
              <img
                src={`/src/assets/Artboard ${n}.png`}
                alt={`Teens Model ${n}`}
                className="absolute top-0 left-0 w-full h-full object-cover transform skew-x-[20deg] scale-[1.5] translate-y-[10%]
                           transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                           hover:scale-[1.4] hover:translate-y-[2%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Teens;