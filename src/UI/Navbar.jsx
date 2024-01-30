import logo from "../Images/banks.png";

export default function Navbar() {
  // const hamburgeBtn = document.getElementById("ham");
  // const mobileMenu = document.getElementById("mobile-menu");

  // const toggleMenu = () => {
  //   mobileMenu.classList.toggle("hidden");
  //   mobileMenu.classList.toggle("flex");
  // };

  // hamburgeBtn.addEventListener("click", toggleMenu);
  // mobileMenu.addEventListener("click", toggleMenu);

  return (
    <div>
      <div className=" w-full px-6 py-6 bg-white flex flex-row justify-between item-center lg:flex-row ">
        <div className="w-30 h-full flex justify-center items-center">
          <img src={logo} alt="" />
        </div>

        <button id="ham" className="cursor-pointer text-3xl">
          &#9776;
        </button>

        {/* links ad buttons */}
        <div className=" hidden w-full lg:flex flex-col justify-center items-center lg:flex-row lg:justify-between px-16">
          {/* Logo */}

          {/* Links */}
          <div>
            <ul className="h-full flex flex-col space-y-6 lg:flex-row lg:space-x-10 justify-center items-center">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>List your Property</li>
            </ul>
          </div>

          <button className="w-fit my-6 px-10 mx-6 lg:mx-20 text-primary bg-secondary py-2 lg:px-6 hover:text-white hover:bg-primary">
            Locations
          </button>

          {/* Functionalities */}
          <div>
            <ul className="h-full flex flex-col space-y-6 lg:flex-row lg:space-x-12 justify-center items-center px-10">
              <li className="text">Currency:</li>
              <li>Log In</li>
              <li className="border-2 border-black py-2 px-6">Sign Up</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <section
        id="mobile-menu"
        className="absolute top-0 px-6 bg-green-700 w-full flex-col justify-center origin-top animate-open-menu hidden"
      >
        <button className="text-white self-end text-3xl">&times;</button>

        {/* links ad buttons */}
        <div className="w-full min-h-screen flex flex-col items-center">
          <ul className="flex flex-col space-y-6 justify-center items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>List your Property</li>
          </ul>

          <button className="my-6 px-8 mx-6 text-primary bg-secondary py-2 hover:text-white hover:bg-primary">
            Locations
          </button>

          {/* <div>
            <ul className="h-full flex flex-col space-y-6 lg:flex-row lg:space-x-12 justify-center items-center px-10">
              <li className="text">Currency:</li>
              <li>Log In</li>
              <li className="border-2 border-black py-2 px-6">Sign Up</li>
            </ul>
          </div> */}
        </div>
      </section>
    </div>
  );
}
