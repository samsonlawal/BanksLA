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
    <div className="bg-white h-fit px-4 py-28 flex flex-col gap-y-24">
      <h1>Review</h1>
      <p>
        Know what our users are saying about their experience in our luxury
        apartments.
      </p>
      <div className="overflow-hidden relative bg-white">
        <div
          className="flex transition-transform ease-out duration-500 "
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
    </div>
  );
}
