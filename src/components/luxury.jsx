import React from "react";
import luxuryImage from "../img/icon-luxury.svg";

export function Luxury(props) {
  return (
    <>
      <main>
        <img src={luxuryImage} alt="" />

        <h1>{props.luxuryName}</h1>

        <article>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </article>

        <button>Learn More</button>
      </main>
    </>
  );
}
