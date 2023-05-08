import React from "react";

function Sidebar() {
  return (
    <>
      <div className="container">
        <div className="row sidebar">
          <ul>
            <li>
              <a href="/General">General</a>
            </li>
            <li>
              <a href="/Languages">Languages</a>
            </li>
            <li>
              <a href="/Advanced">Advanced</a>
            </li>
            <li>
              <a href="">Update</a>
            </li>
            <li>
              <a href="">Share</a>
            </li>
            <li>
              <a href="">Shortcurts</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
