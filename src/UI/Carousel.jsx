import { useState } from "react";
import { ArrowLeft } from "react-feather";
import { ArrowRight } from "react-feather";

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="bg-white h-fit px-4 py-28 flex flex-col justify-center items-center gap-y-24 md:px-12 w-full">
      <div className="overflow-hidden relative bg-white flex md:justify-center items-center">
        <div
          className="flex transition-transform ease-out duration-500 lg:w-150"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex justify-between items-center p-4 ">
          <button
            onClick={prev}
            className="p-1 mx-4 rounded-full shadow bg-primary text-white hover:bg-orange-300"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-1 mx-4 rounded-full shadow bg-primary text-white hover:bg-orange-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-1">
            {slides.map((_, i) => (
              <div
                className={`transition-all w-3 h-3 bg-red-900 rounded-full ${
                  curr === i ? "p-2.5" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Listing */}
      <div className="flex flex-col gap-y-14 justify-start items-start lg:flex-row flex-wrap lg:justify-between xl:justify-start lg:gap-x-10">
        <div className="flex flex-col gap-y-3 justify-start text-left w-11/12 lg:w-96">
          <h2 className="text-xl font-bold font-mont">Comfort</h2>
          <p className="font-open">
            Comfort is a necessary ingredient of luxury. We try to represent
            this as much as possible in our approach. To our select clientele,
            we have an utmost focus on comfortability as a core element in the
            delivery of our services as we believe luxury speaks "comfort".
          </p>
        </div>

        <div className="flex flex-col gap-y-3 text-left lg:w-96">
          <h2 className="text-xl font-bold font-mont">Aesthetics</h2>
          <p className="font-open">
            What is comfort and luxury without the look and feel of it? All our
            apartments don't just offer that top-notch feeling of comfortability
            but also the look and feel of style and elegance merged into a
            homely setting.
          </p>
        </div>

        <div className="flex flex-col gap-y-3 text-left lg:w-96">
          <h2 className="text-xl font-bold font-mont">Grandeur</h2>
          <p className="font-open">
            Banks LA seeks to serve and satisfy the need of our high-value
            customers and it is only right we match their elite taste while
            exceeding it at the same time. Our structures satisfy our client's
            needs for luxury with a blend of 21st-century architectural home
            designs.
          </p>
        </div>
      </div>
    </div>
  );
}
