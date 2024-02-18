import pool from "../Images/pool.png";
import { Wifi } from "react-feather";
import { Droplet } from "react-feather";
import { Zap } from "react-feather";

export default function Pool() {
  return (
    <div
      className="w-full h-fit md:h-128 bg-white px-2 py-10 flex justify-center items-center md:relative"
      style={{ backgroundImage: `url(${pool})` }}
    >
      <div className="flex flex-col bg-black opacity-95 w-96 text-white gap-y-6 gap-x-2 justify-start items-start py-12 md:absolute left-40">
        <h3 className="text-2xl text-left font-mont px-8  ">
          Services and Amenities
        </h3>
        <div className="w-full px-4 pt-8 flex flex-row justify-between items-start flex-wrap gap-y-10">
          <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="p-4 border-2 rounded-full mb-2">
              <Droplet size={16} />
            </div>
            <p className="">Swimming Pool</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="p-4 border-2 rounded-full mb-2">
              <Droplet size={16} />
            </div>
            <p className="">Gym</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="p-4 border-2 rounded-full mb-2">
              <Wifi size={16} />
            </div>{" "}
            <p className="">Free Wifi</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="p-4 border-2 rounded-full mb-2">
              <Zap size={16} />
            </div>{" "}
            <p className="">24/7 Power Supply</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="p-4 border-2 rounded-full mb-2">
              <Droplet size={16} />
            </div>{" "}
            <p className="">House Keeping</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="p-4 border-2 rounded-full mb-2">
              <Droplet size={16} />
            </div>{" "}
            <p className="">Parking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
