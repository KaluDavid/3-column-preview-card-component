import React from "react";
import suvImage from "../img/icon-suvs.svg";
import "../styles/components.scss";

export function Suv(props) {
  return (
    <>
      <main className="suv"> 
        <img src={suvImage} alt="" />

        <h1>{props.suvName}</h1>

        <article>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </article>

        <button>Learn More</button>
      </main>
    </>
  );
}
