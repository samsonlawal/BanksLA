import booking from "../Images/booking.png";
import pfp from "../Images/pfp.png";
import { MousePointer } from "react-feather";
import { Home } from "react-feather";
import { CreditCard } from "react-feather";
import { Clock } from "react-feather";

import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { MdAccessAlarm } from "react-icons/md";

export default function Booking() {
  return (
    <div className="bg-white w-full pt-20 gap-y-20 flex flex-col lg:flex-row lg:justify-between lg:px-8 xl:px-18 lg:items-center justify-start items-start font-open lg:h-screen">
      {/* Texts */}
      <div className="flex flex-col gap-y-10 lg:gap-y-6 justify-center items-start px-8 text-left lg:w-1/2 lg:h-full">
        <h1 className="text-3xl lg:text-4xl font-mont font-semibold mb-4">
          Book your short let apartment in
          <span className="text-primary px-2">simple</span> steps
        </h1>
        <div className="flex flex-row justify-start items-center gap-x-3 h-20 bg-white shadow w-full pl-4 shadow-red-100">
          <div>
            {/* <MousePointer className="text-primary" size={18} /> */}
            <HiMiniCursorArrowRipple className="text-primary" size={25} />
          </div>
          <p>Select one of our locations, you would like to stay in</p>
        </div>

        <div className="flex flex-row justify-start items-center gap-x-3 h-20 bg-white shadow w-full pl-4 md:pr-8 shadow-red-100">
          <div>
            {/* <Home className="text-primary" size={18} /> */}
            <MdApartment className="text-primary scale-x-[-1]" size={25} />
          </div>
          <p>
            Select an apartment within the building and let us know how long you
            would stay.
          </p>
        </div>

        <div className="flex flex-row justify-start items-center gap-x-3 h-20 bg-white shadow w-full pl-4 shadow-red-100">
          <div>
            {/* <CreditCard className="text-primary" size={18} /> */}
            <FaRegCreditCard className="text-primary" size={25} />
          </div>
          <p>Make payment for the apartment you’ve chosen</p>
        </div>

        <div className="flex flex-row justify-start items-center gap-x-3 h-20 bg-white shadow w-full pl-4 shadow-red-100">
          {/* <Clock  /> */}
          <MdAccessAlarm className="text-primary" size={25} />

          <p>You’ve successfully booked an apartment.</p>
        </div>
      </div>

      {/* Image */}
      <div
        style={{ backgroundImage: `url(${booking})` }}
        className="w-full h-96 bg-cover bg-center bg-no-repeat px-4 py-10 lg:w-1/2 lg:h-full"
      >
        <div className="w-full h-full relative">
          <div className="flex flex-row bg-white w-80 px-3 justify-between items-start lg:absolute lg:top-40 lg:left-12">
            <img src={pfp} alt="" className="h-16 py-3" />
            <div className="px-3 py-3 flex flex-col justify-center items-end w-96">
              <p>You have selected Apartment M2 in Noah’s Court</p>
              <p className="text-gray-400">16:09</p>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-4 right-6 w-fit h-fit">
            <div className="flex flex-row w-fit">
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                M1
              </p>
              <p className="text-center flex justify-center items-center w-16 h-14 bg-primary">
                M2
              </p>
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                M3
              </p>
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                M4
              </p>
            </div>

            <div className="flex flex-row w-fit">
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                F1
              </p>
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                F2
              </p>
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                F3
              </p>
              <p className="text-center flex justify-center items-center w-16 h-14 bg-white">
                F4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
