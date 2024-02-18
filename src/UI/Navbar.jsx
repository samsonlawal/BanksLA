import useState from "react";
import logo from "../Images/banks.png";
import { Menu, X } from "react-feather";

export default function Navbar() {
  const hamburgeBtn = document.getElementById("ham");
  const hamburgerX = document.getElementById("ex");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {

  // ${
  //         isOpen ? "flex" : "hidden"
  //       }
  //   setIsOpen(!isOpen);
  // };

  // hamburgeBtn.addEventListener("click", toggleMenu);
  // mobileMenu.addEventListener("click", toggleMenu);

  return (
    <nav className="h-20 md:h-24 font-mont text-base">
      <div className="w-full h-full flex flex-row justify-between lg:justify-evenly items-center font-medium pr-4 md:pr-6 lg:pr-2">
        {/* Logo */}
        <div className="w-28 lg:w-20 xl:w-28 flex justify-center items-center">
          <img src={logo} alt="" className="" />
        </div>

        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            id="ham"
            className="cursor-pointer"
            size={28}
          />
          <X
            onClick={toggleMenu}
            id="ex"
            className="cursor-pointer hidden"
            size={28}
          />
        </div>

        {/* links ad buttons */}
        <div className="hidden w-fit lg:flex flex-col justify-between items-center lg:flex-row lg:justify-evenly lg:pl-8 xl:pl-16">
          {/* Links */}
          <div>
            <ul className="h-full w-fit flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-center items-center lg:space-x-6 xl:space-x-10 ">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#list">List Property</a>
              </li>
            </ul>
          </div>

          <button className="w-fit my-6 px-10 lg:mx-10 xl:mx-14 text-primary bg-secondary py-2 lg:px-6 hover:text-white hover:bg-primary">
            <a href="#location">Locations</a>
          </button>
        </div>

        {/* Functionalities */}
        <div className="hidden lg:contents h-full w-fit">
          <ul className="h-full w-fit flex md:flex-row lg:space-x-2 xl:space-x-4 justify-center items-center lg:text-sm xl:text-base">
            <li className="">Currency:</li>
            <li className="hover:bg-primary hover:border-primary border-white border-2 py-2 lg:px-4 xl:px-6 text-primary hover:text-white">
              Log In
            </li>
            <li className="border-2 border-primary hover:bg-primary hover:text-white py-2 lg:px-4 xl:px-6">
              Sign Up
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <section
        id="mobile-menu"
        className={`bg-white absolute top-20 z-20 px-6 w-full flex-col justify-center hidden items-center origin-top animate-open-menu font-medium  h-[calc(100%-80px)] py-4 text-lg font-mont lg:hidden`}
      >
        {/* links ad buttons */}
        <div className="w-full h-fit flex flex-col items-center  space-y-8">
          <ul className="flex flex-col justify-center items-center space-y-8">
            <li onClick={toggleMenu}>
              <a href="#header">Home</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about">About</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#list">List Property</a>
            </li>
          </ul>

          <ul className="h-full flex flex-col lg:flex-row lg:space-x-12 justify-center items-center px-10 space-y-8">
            <li className="text">Currency:</li>
            <li>Log In</li>
            <li className="border-2 border-black py-2 px-6">Sign Up</li>
            <button
              onClick={toggleMenu}
              href="#location"
              className="px-8 y-4 text-primary bg-secondary py-2 hover:text-white hover:bg-primary"
            >
              Locations
            </button>
          </ul>
        </div>
      </section>
    </nav>
  );
}
