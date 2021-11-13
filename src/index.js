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
  <h1 className="heading_style">List of Top 5 FASAL in 2020</h1>

  <Card 
  imgsrc={Sdata[0].imgsrc} 
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}/>

  <Card
 imgsrc={Sdata[1].imgsrc} 
 title={Sdata[1].title}
 sname={Sdata[1].sname}
 link={Sdata[1].link}/>

  <Card
  imgsrc={Sdata[2].imgsrc} 
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].link}/>

<Card
  imgsrc={Sdata[3].imgsrc} 
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  link={Sdata[3].link}/>

<Card
  imgsrc={Sdata[4].imgsrc}  
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  link={Sdata[4].link}/> 
  <Card
  imgsrc={Sdata[4].imgsrc}  
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  link={Sdata[4].link}/> 
 
{/* //for yojna */}
<h1 className="heading_style">Yojnas</h1>

  <Card 
  imgsrc={Yojnadata[0].imgsrc} 
  title={Yojnadata[0].title}
  sname={Yojnadata[0].sname}
  link={Yojnadata[0].link}/>

  <Card
 imgsrc={Yojnadata[1].imgsrc} 
 title={Yojnadata[1].title}
 sname={Yojnadata[1].sname}
 link={Yojnadata[1].link}/>

  <Card
  imgsrc={Yojnadata[2].imgsrc} 
  title={Yojnadata[2].title}
  sname={Yojnadata[2].sname}
  link={Yojnadata[2].link}/>

<Card
  imgsrc={Yojnadata[3].imgsrc} 
  title={Yojnadata[3].title}
  sname={Yojnadata[3].sname}
  link={Yojnadata[3].link}/>

<Card
  imgsrc={Yojnadata[4].imgsrc}  
  title={Yojnadata[4].title}
  sname={Yojnadata[4].sname}
  link={Yojnadata[4].link}/> 
  <Card
  imgsrc={Yojnadata[5].imgsrc}  
  title={Yojnadata[5].title}
  sname={Yojnadata[5].sname}
  link={Yojnadata[5].link}/> 

{/* for pest */}
<h1 className="heading_style">Pest</h1>

  <Card 
  imgsrc={Pestdata[0].imgsrc} 
  title={Pestdata[0].title}
  sname={Pestdata[0].sname}
  link={Pestdata[0].link}/>

  <Card
 imgsrc={Pestdata[1].imgsrc} 
 title={Pestdata[1].title}
 sname={Pestdata[1].sname}
 link={Pestdata[1].link}/>

  <Card
  imgsrc={Pestdata[2].imgsrc} 
  title={Pestdata[2].title}
  sname={Pestdata[2].sname}
  link={Pestdata[2].link}/>

<Card
  imgsrc={Pestdata[3].imgsrc} 
  title={Pestdata[3].title}
  sname={Pestdata[3].sname}
  link={Pestdata[3].link}/>

<Card
  imgsrc={Pestdata[4].imgsrc}  
  title={Pestdata[4].title}
  sname={Pestdata[4].sname}
  link={Pestdata[4].link}/> 
  <Card
  imgsrc={Pestdata[5].imgsrc}  
  title={Pestdata[5].title}
  sname={Pestdata[5].sname}
  link={Pestdata[5].link}/> 


 </>,
   document.getElementById('root')
);
