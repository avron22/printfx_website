import React from "react";

const Models: React.FC = () => {
  // Explicitly type parameters
  const createRows = <T,>(items: T[], itemsPerRow: number): T[][] => {
    return items.reduce<T[][]>((rows, item, i) => {
      if (i % itemsPerRow === 0) rows.push([]);
      rows[rows.length - 1].push(item);
      return rows;
    }, []);
  };

  const modelNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="w-full py-24">
      {/* Header image */}
      <img
        className="ml-24 w-[250px] max-md:ml-5 max-md:w-[200px] max-sm:ml-2 max-sm:w-[160px]"
        src="/src/assets/models.png"
        alt="Manila Runway Republic"
      />

      {/* Text section */}
      <section className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl font-medium mb-4 max-md:text-3xl max-sm:text-2xl">
          Join Us Today!
        </h1>
        <h2 className="text-lg font-normal leading-relaxed px-32 mt-5 max-lg:px-16 max-md:px-10 max-sm:px-4 max-sm:text-sm max-sm:leading-snug">
          Whether you are an aspiring model looking to break into the industry or a parent seeking
          the best opportunities for your child, Manila Runway Republic is the perfect place to
          start. Join us and be a part of a vibrant community that celebrates youth, talent, and
          fashion.
        </h2>

        {/* Desktop/Tablet Grid - 4 per row (hidden on screens < 640px) */}
        <div className="sm:flex flex-col gap-12 px-24 lg:max-2xl:px-0 mt-12 max-lg:px-10 max-md:px-6 hidden">
          {createRows(modelNumbers, 4).map((row, i) => (
            <div key={i} className="flex flex-wrap justify-center gap-7">
              {row.map((n) => (
                <div
                  key={n}
                  className="relative w-[340px] h-[360px] overflow-hidden cursor-pointer transform skew-x-[-20deg]
                  max-lg:w-[300px] max-lg:h-[320px]
                  max-md:w-[240px] max-md:h-[280px]"
                >
                  <img
                    src={`/src/assets/Artboard ${n}.png`}
                    alt={`Model ${n}`}
                    className="absolute top-0 left-0 w-full h-full object-cover transform skew-x-[20deg] scale-[1.5] translate-y-[12%]
                    transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:scale-[1.4] hover:translate-y-[2%]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Grid - 2 per row (visible only on screens < 640px) */}
        <div className="flex sm:hidden flex-col gap-6 px-3 mt-12 w-full">
          {createRows(modelNumbers, 2).map((row, i) => (
            <div key={i} className="flex justify-center gap-3 w-full">
              {row.map((n) => (
                <div
                  key={n}
                  className="relative w-[46%] h-[180px] overflow-hidden cursor-pointer transform skew-x-[-12deg] flex-shrink-0"
                >
                  <img
                    src={`/src/assets/Artboard ${n}.png`}
                    alt={`Model ${n}`}
                    className="absolute top-0 left-0 w-full h-full object-cover transform skew-x-[12deg] scale-[1.2] translate-y-[0%]
                    transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:scale-[1.15] hover:translate-y-[-5%]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;
