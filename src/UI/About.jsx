import about from "../Images/hotelAbout.png";

export default function About() {
  // const myPromise = new Promise((resolve, reject) => {
  //   // Asynchronous operation
  //   const result = fetchData(); // async function that fetches data

  //   // If statement to check whether the RESULT is truthy
  //   if (result) {
  //     resolve(result); // Operation successful
  //   } else {
  //     reject("Error fetching data"); // Operation failed
  //   }
  // });

  // myPromise
  //   .then((resolvedValue) => {
  //     console.log("Resolved:", resolvedValue);
  //   })
  //   .catch((rejectedReason) => {
  //     console.error("Rejected:", rejectedReason);
  //   });

  return (
    <div
      id="about"
      className="px-4 md:px-12 py-20 bg-white flex flex-col justify-center lg:justify-evenly item-center lg:flex-row lg:h-screen lg:py-10 lg:px-10 xl:px-20 gap-y-10"
    >
      {/* image area */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img src={about} alt="" className="lg:w-10/12 h-fit xl:w-128" />
      </div>

      {/* text area */}
      <div className="flex flex-col justify-center items-start space-y-4 text-left lg:w-1/2">
        <div className="flex flex-col justify-center items-start space-y-4  lg:w-full">
          <h1 className="text-3xl md:text-3xl xl:text-4xl font-semibold font-mont">
            Enjoy the <span className="text-primary">luxury</span> experience at
            any of our locations.
          </h1>
          <p className="font-open">
            Banks LA exclusively manages the best handpicked and home-grown
            holiday apartments across several destinations (and counting). Just
            1 in 10 properties that apply make the Banks L.A list. If they are
            not beautifully furnished, filled with character and in a great
            location, you will not find them here.
            <br />
            <br />
            Provisioned to five-star standards by your very own concierge, with
            all the extra touches, you are assured of more than just a home
            stay. Whether you stay for 2 nights or 2 weeks, Banks L.A service is
            designed to make short stays more than just a holiday.
          </p>

          <button className="bg-primary px-10 py-3 text-white text-lg font-mont hover:bg-orange-800">
            About Us{" "}
            {/* <span className="bg-white h-full text-primary px-6 py-3.5">
            &#x2192;
          </span> */}
          </button>
        </div>
      </div>
    </div>
  );
}
