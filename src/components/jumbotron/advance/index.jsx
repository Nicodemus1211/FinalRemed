import React from "react";

function Advance() {
  return (
    <>
      <div className="container">
        <div className="start">
          <div className="frm">
            <h4>Spell Check: </h4>
            <form action="">
              <input type="checkbox" class="in" /> Check spelling while typing
            </form>
          </div>
          <div className="frm">
            <h4>Share Analytics: </h4>
            <form action="">
              <input type="checkbox" class="in" /> Automatically send usage statistics <br />
              (NO PRIVATE DATA)
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advance;
