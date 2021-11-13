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
        <h1>According to you Place</h1>
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

      <Route path="/weather">
        <Weather />
      </Route>
    </Switch>
  );
};

export default App;
