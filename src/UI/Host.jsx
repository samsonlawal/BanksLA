import Noah from "../Images/noah.png";
import Adunala from "../Images/Adunala.png";
import host from "../Images/host.png";
import second from "../Images/second.png";
import temple from "../Images/temple.png";

export default function Host() {
  return (
    <div
      id="location"
      className="bg-secondary px-4 py-20 gap-y-32 flex flex-col justify-center items-center md:items-start md:flex-row flex-wrap md:justify-evenly lg:px-10 font-mont"
    >
      <div className="flex flex-col text-center gap-y-3 w-80 h-auto">
        <img src={Noah} alt="" className="w-fit" />
        <p className="text-lg font-semibold">Noah's Court</p>
      </div>

      <div className="flex flex-col text-center gap-y-3 w-80 h-auto">
        <img src={second} alt="" className="w-fit" />
        <p className="text-lg font-semibold">2nd Avenue</p>
      </div>

      <div className="flex flex-col text-center gap-y-3 w-80 h-auto">
        <img src={temple} alt="" className="w-fit" />
        <p className="text-lg font-semibold">Temple Road</p>
      </div>

      <div className="flex flex-col text-center gap-y-3 w-80 h-auto">
        <img src={Adunala} alt="" className="w-fit" />
        <p className="text-lg font-semibold">Adunala</p>
      </div>

      <div
        style={{ backgroundImage: `url(${host})` }}
        className="flex flex-col justify-center items-center text-center gap-y-5 w-80 h-80 bg-center bg-fit"
      >
        <h3 className="text-white font-medium text-xl font-mont">
          Become a host
        </h3>
        <button className="bg-primary w-56 py-3 text-white text-lg hover:bg-orange-800">
          Apply Now
        </button>
      </div>

      <div className="md:w-80 h-80 justify-center items-center flex flex-col">
        <h1 className="text-4xl md:text-4xl font-bold pb-6 font-mont">
          The brand you can <span className="text-primary">trust.</span>
        </h1>
        <p className="font-open">
          With over 8 years of experience in the property market and industry we
          are dedicated to exceptionalism in our designs, constructions, and
          finishing in all our properties.
        </p>
      </div>
    </div>
  );
}
