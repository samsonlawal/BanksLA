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
      question: "How does CoinIn Calculate Cryptocurrency Prices?",
      answer:
        "The price is calculated using a global volume-weighted average price formula which is based on the pairings available on different exchanges of a particular crypto asset.",
      id: 1,
    },

    {
      question: "What is Crypto Market Cap?",
      answer:
        "Crypto market cap is the total value of all the coins of a particular cryptocurrency that have been mined or are in circulation. Market capitalization is used to determine the ranking of cryptocurrencies. The higher the market cap of a particular crypto coin, the higher its ranking and share of the market. Crypto market cap is calculated by multiplying the total number of coins in circulation by its current price. For instance, to calculate the market cap of Ethereum, all you need to do is multiply the total number of Ethereum in circulation by the current price of one Ethereum and you will get its market cap.",
      id: 2,
    },

    {
      question: "Why are Cryptocurrency Prices Different on Exchanges?",
      answer:
        "You may notice that cryptocurrencies listed on different exchanges have different prices. The reasons for this are complex, but simply put cryptocurrencies are traded on different exchanges and across different markets with varying economic conditions, liquidity, trading pairs, and offerings (e.g. derivatives / leverage) which all influence price in their own way.",
      id: 3,
    },

    {
      question: "What is 24h Volume in the Table Above?",
      answer:
        "The 24h trading volume refers to the amount a cryptocurrency has been bought and sold on all exchanges within the last 24 hours on the spot market. For instance, if the 24h volume for Ethereum is $15 billion, it means that $15 billion worth of Ether had changed hands across all exchanges in the last 24 hours.",
      id: 4,
    },

    {
      question: "How to compare Cryptocurrencies Market Cap?",
      answer:
        "Crypto market cap can be divided into three categories: <br/> Large-cap cryptocurrencies (>$10 billion) <br/> Mid-cap Cryptocurrencies ($1 billion - $10 billion) <br />Small-cap cryptocurrencies (<$1 billion). <br /> As a financial metric, market cap allows you to compare the total circulating value of one cryptocurrency with another. Large cap cryptocurrencies such as Bitcoin and Ethereum have a market cap of over $10 billion. They typically consist of protocols that have demonstrated track records, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics of their supply. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted valuation, and fundamentals during your research process.",
      id: 5,
    },

    {
      question: "Where to Check Cryptocurrency Prices?",
      answer:
        "You can track over 10,000 crypto prices on CoinIn across more than 50 currencies. Popular cryptocurrency pairs include BTC-USD, ETH-USD, and SLP-PHP. You can also track metrics such as 24 hour trading volume, market capitalization, price chart, historical performance chart, the circulating supply, and more. Sign up to use CoinIn’s crypto portfolio to track the performance of your portfolio.",
      id: 6,
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
