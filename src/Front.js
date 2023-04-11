import Navbar from "./component/Navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./component/Experience/Experience";

import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
Aos.init({
  offset: 100,
  duration: 700,
  easing: 'ease-in-sine',
  delay: 50,
});
function Front() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : " ",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <About />
      {/* <Experience /> */}
      <Portfolio />
      <div style={{
        maxWidth: "1400px",
        margin: "auto"
      }} >
        <Contact />
      </div>
      <Footer />


    </div>
  );
}

export default Front;
