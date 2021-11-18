import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./Components/navbar.css"
import "./index.css";
 import Sdata from "./Sdata";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Yojna from "./Yojna";

import Yojnadata from './Yojnadata';
import Pest from './Pest';
import Pestdata from './Pestdata';

//used the props for using cards and other props

ReactDOM.render(
  <>
  <BrowserRouter>
    <React.StrictMode>
      <App />
      
    </React.StrictMode>
  </BrowserRouter>,
  <h1 className="heading_style">List of Crops with Market Price</h1>
  
  {/* For the Crops */}

  {Sdata.map((val) => {
    return (
    <Card
    imgsrc={val.imgsrc} 
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
    );
  })}    
 
{/* //for yojna */}
<h1 className="heading_style">Yojnas</h1>
{Yojnadata.map((val) => {
  return(
  <Yojna 
  imgsrc={val.imgsrc} 
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
})}  

{/* for pest */}
<h1 className="heading_style">Pest</h1>

{Pestdata.map((val) => {
  return(
  <Pest 
  imgsrc={val.imgsrc} 
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
})}


 </>,
   document.getElementById('root')
);
