import React from "react";
import sedansImage from "../img/icon-sedans.svg";
import "../styles/components.scss";

export function Sedan(props) {
  return (
    <>
      <main className="sedans">
        <img src={sedansImage} alt="" />
        <h1>{props.sedanName}</h1>

        <article>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </article>

        <button>Learn More</button>
      </main>
    </>
  );
}
