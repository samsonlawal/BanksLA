import hallway from "../images/hallway.png";

export default function Header() {
  return (
    <div className="w-full h-fit bg-white px-4 flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(${hallway})` }}
        className="w-full my-10 fit flex flex-col bg-fit bg-right-center bg-no-repeat justify-center items-center"
      >
        <div className="w-96 px-10 py-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl font-bold text-white pb-4">
            Banks LA Serviced Luxury Apartments
          </h1>
          <p className="text-md text-gray-300">
            Banks.LA offers a selection of spacious and convenient properties
            which are perfect for occupants seeking the best living conditions
            in the city.{" "}
          </p>
        </div>
        {/* Form */}
        <div className="w-full text-center bg-secondary px-6 pt-10 pb-20 flex flex-col justify-center items-center space-y-6">
          <h1 className="text-xl font-bold text-red-600 mb-10">
            Quick Booking
          </h1>

          <div className="w-full">
            <p className="pb-1 font-medium">Selcet location</p>
            <input
              type="text"
              placeholder="Lekki"
              className="w-10/12 px-4 py-3 outline-none placeholder-slate-600 text-slate-600 bg-slate-400"
            />
          </div>

          <div className="w-full">
            <p className="pb-1 font-medium">Check In Date</p>
            <input
              type="date"
              className="w-10/12 px-4 py-3 outline-none bg-slate-400 text-slate-600 placeholder-slate-600"
            />
          </div>

          <div className="w-full">
            <p className="pb-1 font-medium">Check Out Date</p>
            <input
              type="date"
              className="w-10/12 px-4 py-3 outline-none bg-slate-400 text-slate-600 placeholder-slate-600"
            />
          </div>

          <div className="w-full">
            <p className="pb-1 font-medium">No. of Guests</p>
            <input
              type="number"
              placeholder="1"
              className="w-10/12 px-4 py-3 outline-none text-slate-600 bg-slate-400 placeholder-slate-600"
            />
          </div>

          <button className="bg-red-500 px-6 py-2 text-white">
            Find Apartment
          </button>
        </div>
      </div>
    </div>
  );
}
