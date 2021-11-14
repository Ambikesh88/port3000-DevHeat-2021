import React from "react";

function Card(props){
    return(
      <>
            <div className="market1" id="marketid">

      <div className="cards">
        <div className="card">
          <img src={props.imgsrc}
          alt = "mypic" className="card__img"/>
          <div className="card__info">
            <span className="card__category"> {props.title} </span>
            <h3 className="card__title"> {props.sname} </h3>
            <a href={props.link} target="blank">
              <div className="btn-margin">
              <button>Contact Farmers</button></div>
            </a>
          </div>
        </div>
      </div>    
      </div>


      </>
    )
  }

  export default Card;

  //used cards 