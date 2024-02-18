import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { ChevronDown } from "react-feather";

import patternfooter from "../Images/patternFooter.png";

export default function Footer() {
  return (
    <div
      className="flex flex-col bg-black bg-contain py-20 px-4 md:px-8 lg:px-4"
      style={{ backgroundImage: `url(${patternfooter})` }}
    >
      <div className="flex flex-col pb-16 gap-y-16 text-white md:flex-row flex-wrap md:justify-start md:items-center md:gap-x-16">
        <div className="flex flex-col justify-between h-fit py-10 gap-y-10 w-40">
          <div className="flex flex-row justify-star items-center border-2 w-fit px-4 py-3 font-mont">
            <p className="pr-4">Curerncy</p>
            <p className="text-sm">NGN</p>
            <ChevronDown size={15} />
          </div>
          <div className="flex flex-row justify-between items-center w-24 text-primary">
            <Facebook className="text-primary" size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
          </div>
        </div>

        <div className="flex flex-col gap-y-2 items-start w-40 font-open">
          <h3 className="text-gray-400 text-xl pb-1 font-mont">Contact</h3>
          <p>+234 801 123 123</p>
          <p>info@banksla.com</p>
          <button className="border-2 px-6 py-2 hover:bg-white hover:text-primary font-mont font-medium">
            Chat with us
          </button>
        </div>

        <div className="flex flex-col gap-y-2 items-start w-40 font-open">
          <h3 className="text-gray-400 text-xl pb-1 font-mont">Location</h3>
          <p>Noah's Court, Lekki</p>
          <p>Adunola, Surulere</p>
          <p>2nd Avenue, Ikoyi</p>
          <p>Adaba Mews, Yaba</p>
        </div>

        <div className="flex flex-col gap-y-2 items-start w-40 font-open">
          <h3 className="text-gray-400 text-xl pb-1 font-mont">Policies</h3>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
          <p>Refund Policy</p>
          <p>Cancellation Policy</p>
        </div>

        <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 items-start font-mont">
          <button className="font-medium border-2 border-primary py-2 w-36 hover:bg-primary">
            Login
          </button>

          <button className="font-medium border-2 w-36 py-2 border-primary bg-primary hover:border-orange-800 hover:bg-orange-800">
            Sign Up
          </button>
        </div>
      </div>
      <div className="w-full">
        <p className="text-gray-500 text-center font-mont">
          © Copyright 2000-2024 Banks.LA
        </p>
      </div>
    </div>
  );
}
