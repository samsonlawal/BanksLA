export default function About() {
  return (
    <div className="px-4 py-28 bg-white flex flex-col justify-center item-center">
      {/* image area */}
      <div>
        <img src="" alt="" />
      </div>

      {/* text area */}
      <div className="flex flex-col justify-center items-center px-2 space-y-8 text-center">
        <h1 className="text-2xl font-bold">
          Enjoy the <span className="text-primary">luxury</span> experience at
          any of our locations.
        </h1>
        <p>
          Banks LA exclusively manages the best handpicked and home-grown
          holiday apartments across several destinations (and counting). Just 1
          in 10 properties that apply make the Banks L.A list. If they are not
          beautifully furnished, filled with character and in a great location,
          you will not find them here.
          <br />
          <br />
          Provisioned to five-star standards by your very own concierge, with
          all the extra touches, you are assured of more than just a home stay.
          Whether you stay for 2 nights or 2 weeks, Banks L.A service is
          designed to make short stays more than just a holiday.
        </p>

        <div></div>
      </div>
    </div>
  );
}
