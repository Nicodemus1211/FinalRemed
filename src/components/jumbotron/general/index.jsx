import React from "react";
import Light from "../../../assets/images/light.JPG";
import Dark from "../../../assets/images/dark.JPG";
import Auto from "../../../assets/images/auto.JPG";

function General() {
  return (
    <>
      <div className="container">
        <div className="general">
          <h1>Appreance</h1>
          <div className="content">
            <div className="light">
              <img src={Light} alt="" />
              <h4>Light</h4>
            </div>
            <div className="dark">
              <img src={Dark} alt="" />
              <h4>Dark</h4>
            </div>
            <div className="auto">
              <img src={Auto} alt="" />
              <h4>Auto</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Map</h1>
        <div className="content2">
          <div className="frm">
            <p>Default Zoom Level: </p>
            <select name="" id="">
              <input type="option" />
              <option value="">100%</option>
              <option value="">90%</option>
            </select>
          </div>
          <div className="frm">
            <p>Default Theme: </p>
            <select name="" id="">
              <input type="option" />
              <option value="">Default</option>
            </select>
          </div>
          <div className="frm">
            <p>Default CJK Font: </p>
            <select name="" id="">
              <input type="option" />
              <option value="">Default</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>on start-up</h1>
        <div className="start">
          <div className="frm">
            <h4>Quick Entry: </h4>
            <form action="">
              <input type="checkbox" class="in" /> Start Quick Entry when system login
            </form>
          </div>
          <div className="frm">
            <h4>Launch Window: </h4>
            <form action="">
              <input type="checkbox" class="in" /> Start Quick Entry when system login
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
