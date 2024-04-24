import { Zap, Shield, Watch } from "react-feather";
// import { Shield } from "react-feather";
// import { Watch } from "react-feather";

import { GiCheckedShield } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Contacts() {
  return (
    <div
      id="contact"
      className="w-full lg:h-fit bg-white px-4 py-20 lg:py-20 flex flex-col justify-center items-center lg:justify-evenly lg:flex-row"
    >
      {/* phone */}
      <div className="flex-col justify-center items-center gap-8 lg:w-128 hidden lg:flex pb-8 md:pb-0 font-mont">
        <div className="flex flex-row justify-center items-center gap-14">
          <p className="bg-secondary rounded-full w-14 h-14 flex justify-center items-center border-2 border-primary">
            1
          </p>
          <p className="bg-secondary rounded-full w-14 h-14 flex justify-center items-center border-2 border-primary">
            2
          </p>
          <p className="bg-secondary rounded-full w-14 h-14 flex justify-center items-center border-2 border-primary">
            3
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-14">
          <p className="bg-secondary rounded-full w-14 h-14 flex justify-center items-center border-2 border-primary">
            4
          </p>
          <p className="bg-secodary p-2 rounded-full flex justify-center items-center border-2 border-primary text-white">
            <span className="bg-primary w-12 h-12 rounded-full flex justify-center items-center ">
              5
            </span>
          </p>
          <p className="bg-secondary rounded-full w-14 h-14 flex justify-center items-center border-2 border-primary">
            6
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-14">
          <p className="bg-secodary p-2 rounded-full flex justify-center items-center border-2 border-primary text-white">
            <span className="bg-primary w-12 h-12 rounded-full flex justify-center items-center ">
              7
            </span>
          </p>
          <p className="bg-secondary rounded-full w-14 h-14 flex justify-center items-center border-2 border-primary">
            8
          </p>
          <p className="bg-secodary p-2 rounded-full flex justify-center items-center border-2 border-primary text-white">
            <span className="bg-primary w-12 h-12 rounded-full flex justify-center items-center ">
              9
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-14">
          <p className="bg-secodary p-2 rounded-full flex justify-center items-center border-2 border-primary text-white">
            <span className="bg-primary w-12 h-12 rounded-full flex justify-center items-center ">
              0
            </span>
          </p>
        </div>

        <button className="w-fit bg-secondary py-4 px-14 rounded-full border-2 border-primary mt-4">
          Enter
        </button>
      </div>

      {/* Text */}
      <div className="w-full md:px-2 py-10 flex flex-col gap-y-4 lg:gap-y-2 justify-start items-start md:w-145 lg:w-1/2 lg:px-6 font-mont">
        <h1 className="text-left font-semibold text-3xl md:text-4xl lg:text-5xl font-mont">
          <span className="text-primary">Contactless</span> Check in
        </h1>
        <p className="text-left lg:text-lg font-open text-gray-500">
          No more check in hassles! Check in by yourself with your access code.
        </p>
        <div className="w-fit flex flex-col md:flex-row justify-start items-start gap-y-4 gap-x-8 md:text-lg py-6 lg:py-8 font-open">
          <div className="flex flex-row items-center gap-x-4 h-14 px-4 shadow shadow-red-100">
            <BsLightningChargeFill className="text-primary" size={20} />
            <p className="font-semibold">Fast Check in</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-4 h-14 px-4 shadow shadow-red-100">
            {/* <Shield /> */}
            <GiCheckedShield className="text-primary scale-x-[-1]" size={20} />

            <p className="font-semibold"> Privacy</p>
          </div>
          <div className="flex flex-row items-center gap-x-4 h-14 px-4 shadow shadow-red-100">
            <MdOutlineTimer className="text-primary" size={20} />

            <p className="font-semibold">Zero wait time</p>
          </div>
        </div>
        <p className="text-left font-mont">
          Cool, contemporary and stylish — our new apartments with smart doors
          feature a sleek design that adds warmth to the surroundings. Our
          apartment check in provides you easy access to your living space.
          Simply press a button on the outside of your door, and enter your
          living room or bedroom. This is a great way to get in and out of your
          apartment without the need for keys or smart cards. Use the access
          code provided on your booking details page to gain access to your room
          at any time during your stay. We prioritze convenience at Banks.LA
          ensuring that you have all you need already at your fingertips,
          literally!
        </p>
      </div>
    </div>
  );
}
