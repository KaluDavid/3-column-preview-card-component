import React from "react";
import { Sedan } from "./components/sedan";
import { Suv } from "./components/suv";
import { Luxury } from "./components/luxury";
import PropTypes from "prop-types";
import "./styles/main.scss";

export default function App() {
  return (
    <>
      <div className="main">
        <Sedan sedanName="SEDANS" />

        <Suv suvName="SUVS" />

        <Luxury luxuryName="LUXURY" />
      </div>
    </>
  );
}

App.propType = {
  sedanName: PropTypes.string.isRequired,
  suvName: PropTypes.string.isRequired,
  luxuryName: PropTypes.string.isRequired,
};
