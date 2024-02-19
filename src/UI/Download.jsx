import iPhone from "../Images/iPhone.png";
import google from "../Images/google.png";
import apple from "../Images/apple.png";
import frame from "../Images/frame.png";

export default function Download() {
  return (
    <div className="w-full flex flex-col justify-center md:justify-start items-center bg-secondary md:bg-white px-4 py-36 lg:flex-row lg:justify-center lg:items-center">
      <div
        className="h-128 w-96 hidden lg:flex z-10 bg-contain bg-red-400 justify-end items-center"
        style={{ backgroundImage: `url(${frame})` }}
      >
        <div className="absolute">
          <img src={iPhone} alt="" className="w-80 relative top-24" />
        </div>
        {/* <p>samson</p> */}
      </div>
      <div className="w-full px-2 md:px-20 md:py-20 py-4 md:w-140 lg:w-130 xl:w-140 lg:px-8 xl:px-14 lg:py-24 bg-secondary text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-mont">
          Download our <span className="text-primary">App</span>
        </h1>
        <p className="pt-4 pb-2 lg:text-lg font-open">
          Make and track your bookings all in one application. Enjoy a fully
          automated booking experience.
        </p>
        <p className="lg:text-lg font-open">
          Coming soon on the following platforms
        </p>
        <div className="flex flex-row justify-center md:justify-start items-center gap-x-4 pt-8">
          <img src={google} alt="" className="w-36 md:w-40 cursor-pointer" />
          <img src={apple} alt="" className="w-36 md:w-40 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
