import React from "react"

export default function Card(props) {
  return (
    <div className="img-container">
      <div>
        
        <h4> {props.title} </h4>
        <h5>{props.loc}</h5>
        <p className="date"> {props.date} </p>
        <ul>
          {props.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>{" "}
      </div>{" "}
      <img src={props.img} alt="" />
    </div>
  )
}

/*
  
*/
