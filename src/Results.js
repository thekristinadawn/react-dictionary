import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results container">
        <h2>{props.results.word}</h2>
        <div className="row">
          {props.results.phonetics.map((phonetic, index) => (
            <div key={index} className="col">
              <Phonetic phonetic={phonetic} />
            </div>
          ))}
        </div>
        <div className="row">
          {props.results.meanings.map((meaning, index) => (
            <div key={index} className="col">
              <Meaning meaning={meaning} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
