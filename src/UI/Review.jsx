import { useState } from "react";
import { ArrowLeft } from "react-feather";
import { ArrowRight } from "react-feather";
import { Home } from "react-feather";
import "./Review.css";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white w-full h-fit px-4 py-28 flex flex-col justify-center items-center">
      <div className="w-full lg:w-150 h-fit flex flex-col justify-center items-center text-center gap-y-2 mb-20 md:mb-10">
        <h1 className="font-open text-4xl xl:text-5xl font-bold">Review</h1>
        <p className="text-lg text-gray-400 font-mont">
          Know what our users are saying about their experience in our luxury
          apartments.
        </p>
      </div>

      <div className="overflow-hidden relative bg-white h-fit w-full">
        <div className="flex flex-col space-y-4 justify-center items-center h-fit md:h-fit">
          <div
            className="flex transition-transform ease-out duration-500 w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((review, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentSlide ? "active" : ""
                } flex flex-col space-y-4 justify-center items-center pb-40`}
              >
                <div className="w-full md:w-120 text-center">
                  <h1 className="font-mont pb-4">{review.review}</h1>
                </div>

                <div className="flex flex-col space-y-1 justify-center items-center font-mont bg-black text-white w-64 px-5 py-4">
                  <p className="font-medium text-lg">{review.name}</p>
                  <div className="flex flex-row space-x-1 justify-center items-center text-sm text-gray-400">
                    <Home className="text-primary" size={16} />
                    <p>{review.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="btn left-0 bottom-1 lg:left-10 md:bottom-1/2"
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <button
          className="btn right-0 bottom-1 lg:right-10 md:bottom-1/2"
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}
