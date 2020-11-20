import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="nav horizontalLeft">
        <img
          alt="logo"
          src="https://www.adt.com.vn/img/logo.png"
          className="logo"
        />
        <div className="navItem">Movies</div>
        <div className="navItem">Shows</div>
        <div className="navItem">Schedule</div>
      </div>

      <div className="navSmall horizontalJustify">
        <img
          alt="logo"
          src="https://www.adt.com.vn/img/logo.png"
          className="navItem"
        />
        <button
          className="menu"
          onClick={() =>
            (document.getElementById("popup").hidden = !document.getElementById(
              "popup"
            ).hidden)
          }
        >
          Menu
        </button>
        <div id="popup" hidden>
          <div className="navItem">Movies</div>
          <div className="navItem">Shows</div>
          <div className="navItem">Schedule</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
