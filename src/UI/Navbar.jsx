import logo from "../Images/banks.png";

export default function Navbar() {
  return (
    <div className=" w-full px-6 py-6 bg-white flex flex-row ">
      <div className="w-30 h-full flex justify-center items-center">
        <img src={logo} alt="" />
      </div>

      {/* links ad buttons */}
      <div className="w-full flex flex-row justify-between px-16">
        {/* Logo */}

        {/* Links */}
        <div>
          <ul className="h-full flex space-x-10 justify-center items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>List your Property</li>
          </ul>
        </div>

        <button className="mx-20 text-primary bg-secondary py-2 px-6 hover:text-white hover:bg-primary">
          Locations
        </button>

        {/* Functionalities */}
        <div>
          <ul className="h-full flex space-x-12 justify-center items-center px-10">
            <li className="">Currency:</li>
            <li>Log In</li>
            <li className="border-2 border-black py-2 px-6">Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
