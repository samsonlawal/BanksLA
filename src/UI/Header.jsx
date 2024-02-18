import hallway from "../Images/hallway.png";
import { Zap } from "react-feather";

export default function Header() {
  return (
    <div
      className="w-full h-fit bg-white px-2 flex justify-center items-center md:px-4 xl:px-16 lg:pb-20"
      id="header"
    >
      <div
        style={{ backgroundImage: `url(${hallway})` }}
        className="w-full h-full mb-10 fit flex flex-col bg-fit bg-no-repeat bg-right-top lg:bg-left-bottom justify-center items-center lg:w-full lg:px-10 lg:h-130 xl:h-128 md:h-150 relative lg:justify-cenetr lg:items-center"
      >
        <div className="px-4 py-10 lg:py-6 flex flex-col justify-center items-center text-center w-full md:w-11/12 lg:w-150 xl:mb-30">
          <h1 className="text-3xl md:text-4xl font-bold text-white pb-4 font-mont">
            Banks LA Serviced Luxury Apartments
          </h1>
          <p className="text-gray-300 text-lg font-open">
            Banks.LA offers a selection of spacious and convenient properties
            which are perfect for occupants seeking the best living conditions
            in the city.{" "}
          </p>
        </div>

        <div className="w-full lg:w-fit flex justify-center items-center bg-secondary py-8 lg:absolute lg:-bottom-36 xl:-bottom-20 px-4 md:px-14">
          {/* Form */}
          <div className="w-full text-center flex flex-col justify-center items-center md:items-start md:w-fit">
            <div className="flex flex-row gap-x-2 text-primary">
              <h1 className="text-2xl font-bold text-primary mb-10 md:mb-6 font-mont text-start">
                Quick Booking
              </h1>

              <Zap />
            </div>

            <div className="w-full lg:w-fit flex flex-col justify-center items-center md:justify-start md:items-end md:flex-row gap-x-10 font-mont flex-wrap xl:flex-nowrap gap-y-10">
              <div className="w-full flex flex-col md:w-fit justify-center md:justify-start items-center md:items-start">
                <p className="pb-1 font-medium">Selcet location</p>
                <input
                  type="text"
                  placeholder="Lekki"
                  className="w-10/12 md:w-40 px-4 py-3 outline-none placeholder-slate-600 text-slate-600 bg-white lg:w-56 text-sm"
                />
              </div>
              <div className="w-full flex flex-col md:w-fit justify-center md:justify-start items-center md:items-start">
                <p className="pb-1 font-medium">Check In Date</p>
                <input
                  type="date"
                  className="w-10/12 md:w-40 px-4 py-3 outline-none bg-white text-slate-600 placeholder-slate-600 lg:w-40 text-sm"
                />
              </div>

              <div className="w-full flex flex-col md:w-fit justify-center md:justify-start items-center md:items-start">
                <p className="pb-1 font-medium">Check Out Date</p>
                <input
                  className="w-10/12 md:w-40 px-4 py-3 outline-none bg-white text-slate-600 placeholder-slate-600 lg:w-40 text-sm"
                  type="date"
                />
              </div>

              <div className="w-full flex flex-col md:w-fit justify-center md:justify-start items-center md:items-start">
                <p className="pb-1 font-medium">No. of Guests</p>
                <input
                  type="number"
                  placeholder="1"
                  className="w-10/12 md:w-40 px-4 py-3 outline-none text-slate-600 bg-white placeholder-slate-600 lg:w-28 text-sm"
                />
              </div>

              <div>
                <button className="bg-primary text-base py-3 text-white w-40 hover:bg-orange-800 font-mont">
                  Find Apartment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
