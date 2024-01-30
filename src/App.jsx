import { useState } from "react";
import Navbar from "./UI/Navbar";
import Header from "./UI/Header";
import About from "./UI/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <About />
    </>
  );
}

export default App;
