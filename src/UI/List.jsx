import { ArrowRight } from "react-feather";
import list1 from "../Images/list1.png";
import list2 from "../Images/list2.png";
import list3 from "../Images/list3.png";
// import { ArrowRight } from "react-feather";

export default function List() {
  return (
    <div
      id="list"
      className="bg-white py-28 px-4 gap-y-14 flex flex-col lg:flex-row justify-center lg:justify-evenly xl:justify-center items-center"
    >
      {/* <button className="boton">Apply Now</button>
      <div>
        <button></button>
      </div> */}

      <div className="flex flex-col lg:w-96 xl:w-128 gap-y-4 lg:gap-y-8 justify-start text-left md:w-11/12">
        <h2 className="text-3xl font-bold md:text-3xl xl:text-4xl font-mont">
          List your <span className="text-primary">property</span>
        </h2>
        <p className="font-open">
          If you love to travel (or live overseas or interstate) and would
          prefer to have your home taken care of whilst you are away, there is
          no better way than listing your home through Banks LA. Your very own
          property concierge will take care of your property, greet your guests,
          and remain on-call during their stay.
        </p>
        <button className="bg-primary w-fit px-6 py-3 text-white text-lg font-mont hover:bg-orange-800">
          Apply Now
        </button>
        {/* 
        <div className="mum w-fit flex flex-row justify-center items-center">
          <p className="bg-primary px-4 py-2 text-white">Apply Now</p>

          <span>
            <ArrowRight className="arrow text-primary h-10 w-14 px-4" />
          </span>
        </div> */}
      </div>
      <div className="w-full flex justify-center items-center md:pb-10 lg:w-1/2">
        <div className="relative w-full smd:w-128 image-div">
          <img src={list1} alt="" className="absolute h-80 z-20 top-0 left-0" />
          <img src={list2} alt="" className="absolute w-64 z-30 bottom-0" />
          <img
            src={list3}
            alt=""
            className="absolute w-60 z-10 top-15 right-0"
          />
        </div>
      </div>
    </div>
  );
}
