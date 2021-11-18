import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Kisan Mitra Enjoy the Modern Agriculture</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>About the Team</h1>
        <p>We at Kisaan Mitra helps our farmers to boost their productivity and their market value through Modern Agriculture techniques. We provide one stop destination for market price of every Crop, Pesticides Information, Government Schemes, Renting Essential Farming Equipments, Weather Report and a quick customer support. Jai Jawan Jai Kisaan 🧑‍🌾</p>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Our Service Page</h1>
        <div className="service-container">
        <a href ="marketid" > 
        <button className="service-btn">Market Price</button></a>
        <a href ="pestid" > 
        <button className="service-btn">Pesticides Info</button></a>
        <a href ="yojnaid" > 
        <button className="service-btn">Yojnas Info</button></a>
        <a href ="rentingid" > 
        <button className="service-btn">Renting</button></a>
        </div>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <section className="hero-section">
        <p>Questions? </p>
        <h1>Send us the message</h1>
        <div className="service-container">
        <a href ="contact" > 
        <button className="service-btn">kisanmitra@gmail.com</button></a>
    

        </div>
      </section>
    </>
  );
};

const Weather = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Check the Climate  </p>
        <h1>According to your place</h1>
        <a href ="https://kisanmitraweather.netlify.app/ " target = "_blank"> 
        <button className="btn">Check Here</button></a>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/weather" >
        <Weather />
      </Route>
    </Switch>
  );
};

export default App;
