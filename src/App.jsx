import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Router from "./Router/Router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import Footer from "./Layout/Footer";
AOS.init();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Router />
    </>
  );
}

export default App;
