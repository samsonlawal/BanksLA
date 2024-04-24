import pool from "../Images/pool.png";
import { Wifi } from "react-feather";
import { Droplet } from "react-feather";
import { Zap } from "react-feather";

import { MdOutlinePool } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiBroom } from "react-icons/pi";
import { RiCarLine } from "react-icons/ri";

export default function Pool() {
  return (
    <div
      className="w-full h-fit md:h-128 bg-white px-2 py-10 flex justify-center items-center md:relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${pool})` }}
    >
      <div className="flex flex-col bg-black bg-opacity-80 w-96 md:w-120 text-white gap-y-2 gap-x-2 justify-start items-start py-12 md:absolute left-40">
        <h3 className="text-2xl text-left font-mont px-8  ">
          Services and Amenities
        </h3>
        <div className="w-full px-4 pt-8 flex flex-row justify-between items-start flex-wrap gap-y-6 font-mont">
          <div className="w-1/3 flex flex-col justify-center items-center text-center px-2">
            <div className="p-4 border-2 rounded-full mb-2">
              {/* <Droplet size={16} /> */}
              <MdOutlinePool size={20} className="scale-x-[-1]" />
            </div>
            <p className="text-md">Swimming Pool</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center px-2">
            <div className="p-4 border-2 rounded-full mb-2">
              <LuDumbbell size={20} className="rotate-90" />
            </div>
            <p className="">Gym</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center px-2">
            <div className="p-4 border-2 rounded-full mb-2">
              <FaWifi size={20} />
            </div>{" "}
            <p className="">Free Wifi</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center px-2">
            <div className="p-4 border-2 rounded-full mb-2">
              <BsLightningChargeFill size={20} />
            </div>{" "}
            <p className="">24/7 Power Supply</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center px-2">
            <div className="p-4 border-2 rounded-full mb-2">
              <PiBroom size={20} />
            </div>{" "}
            <p className="">House Keeping</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center px-2">
            <div className="p-4 border-2 rounded-full mb-2">
              <RiCarLine size={20} />
            </div>{" "}
            <p className="">Parking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
