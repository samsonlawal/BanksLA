import { useState } from "react";
import Navbar from "./UI/Navbar";
import Header from "./UI/Header";
import About from "./UI/About";
import Carousel from "./UI/Carousel";
import List from "./UI/List";
import Booking from "./UI/Booking";
import Contacts from "./UI/Contacts";
import Faq from "./UI/Faq";
import Review from "./UI/Review";
import Download from "./UI/Download";

import c1 from "./Images/c1.jpg";
import c2 from "./Images/c2.png";
import c3 from "./Images/c3.jpg";
import Host from "./UI/Host";
import Pool from "./UI/Pool";
import Footer from "./UI/Footer";
function App() {
  const slides = [c1, c2, c3];

  const reviewData = [
    {
      id: "c1",
      name: "Nwabu Obinna",
      review:
        "A great place to call home. The entire staff always greet you with a smile and are very helpful to our needs, and are quick to attend to any problems that arise . The grounds and facilities are kept clean every day by friendly courteous workers.",
      image: "",
      property: "Noah's Court, Lekki",
    },

    {
      id: "c2",
      name: "Samson Lawal",
      review:
        "A great place to call home. The entire staff always greet you with a smile and are very helpful to our needs, and are quick to attend to any problems that arise . The grounds and facilities are kept clean every day by friendly courteous workers.",
      image: "",
      property: "Noah's Court, Lekki",
    },

    {
      id: "c3",
      name: "Deji Omoregie",
      review:
        "A great place to call home. The entire staff always greet you with a smile and are very helpful to our needs, and are quick to attend to any problems that arise . The grounds and facilities are kept clean every day by friendly courteous workers.",
      image: "",
      property: "Noah's Court, Lekki",
    },

    {
      id: "c3",
      name: "Frank Gentle",
      review:
        "A great place to call home. The entire staff always greet you with a smile and are very helpful to our needs, and are quick to attend to any problems that arise . The grounds and facilities are kept clean every day by friendly courteous workers.",
      image: "",
      property: "Noah's Court, Lekki",
    },

    {
      id: "c3",
      name: "Destiny Kulture",
      review:
        "A great place to call home. The entire staff always greet you with a smile and are very helpful to our needs, and are quick to attend to any problems that arise . The grounds and facilities are kept clean every day by friendly courteous workers.",
      image: "",
      property: "Noah's Court, Lekki",
    },

    {
      id: "c3",
      name: "Audu Saheed",
      review:
        "A great place to call home. The entire staff always greet you with a smile and are very helpful to our needs, and are quick to attend to any problems that arise . The grounds and facilities are kept clean every day by friendly courteous workers.",
      image: "",
      property: "Noah's Court, Lekki",
    },
  ];

  const faqData = [
    {
      question: "What is the caution fee for?",
      answer:
        "Adipiscing at in tellus integer feugiat scelerisque. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Gravida in fermentum et sollicitudin ac. Quam viverra orci sagittis eu volutpat odio facilisis. Nunc sed blandit libero volutpat sed cras ornare.",
      id: 1,
    },

    {
      question: "What is the check out time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque. Etiam non quam lacus suspendisse faucibus. Eu ultrices vitae auctor eu augue. Adipiscing at in tellus integer feugiat scelerisque. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Gravida in fermentum et sollicitudin ac. Quam viverra orci sagittis eu volutpat odio facilisis. Nunc sed blandit libero volutpat sed cras ornare. Ac turpis egestas integer eget aliquet nibh praesent tristique. Quam quisque id diam vel quam elementum pulvinar etiam non. Consequat ac felis donec et. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Mauris nunc congue nisi vitae suscipit tellus mauris a. Viverra mauris in aliquam sem fringilla ut.",
      id: 2,
    },

    {
      question: "Can I get a refund after cancelling my stay?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque. Etiam non quam lacus suspendisse faucibus. Eu ultrices vitae auctor eu augue. Adipiscing at in tellus integer feugiat scelerisque. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Gravida in fermentum et sollicitudin ac. Quam viverra orci sagittis eu volutpat odio facilisis.",
      id: 3,
    },

    {
      question: "Do you have a restaurant or bar service?",
      answer:
        " Nunc sed blandit libero volutpat sed cras ornare. Ac turpis egestas integer eget aliquet nibh praesent tristique. Quam quisque id diam vel quam elementum pulvinar etiam non. Consequat ac felis donec et. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Mauris nunc congue nisi vitae suscipit tellus mauris a. Viverra mauris in aliquam sem fringilla ut.",
      id: 4,
    },

    {
      question: "How often is the apartment cleaned?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque. Etiam non quam lacus suspendisse faucibus. Eu ultrices vitae auctor eu augue. Adipiscing at in tellus integer feugiat scelerisque. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Gravida in fermentum et sollicitudin ac. Quam viverra orci sagittis eu volutpat odio facilisis. Nunc sed blandit libero volutpat sed cras ornare. Ac turpis egestas integer eget aliquet nibh praesent tristique. Quam quisque id diam vel quam elementum pulvinar etiam non. Consequat ac felis donec et. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Mauris nunc congue nisi vitae suscipit tellus mauris a. Viverra mauris in aliquam sem fringilla ut.",
      id: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Carousel
        slides={slides.map((s) => (
          <img src={s} alt="" />
        ))}
      />
      <List />
      <Host />
      <Pool />
      <Booking />
      <Contacts />
      <Faq items={faqData} />
      <Review slides={reviewData} />
      <Download />
      <Footer />
    </>
  );
}

export default App;
