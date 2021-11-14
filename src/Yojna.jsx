import React from "react";
import "./index.css";
function Yojna(props){
    return(
      <>
      <div className="yojna1" id="yojnaid">
      <div className="cards" >
        <div className="card">
          <img src={props.imgsrc}
          alt = "mypic" className="card__img"/>
          <div className="card__info">
            <span className="card__category"> {props.title} </span>
            <h3 className="card__title"> {props.sname} </h3>
            <a href={props.link} target="blank">
              <button >Know More</button>
            </a>
          </div>
        </div>
      </div>  
      </div>  
      </>
    )
  }

  export default Yojna;
