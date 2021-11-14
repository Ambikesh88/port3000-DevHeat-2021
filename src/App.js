import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Kisan Bachao Enjoy the Modern Agriculture</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Intro</p>
        <h1>About the Team</h1>
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
