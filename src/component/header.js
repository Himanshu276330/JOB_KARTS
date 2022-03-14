import React from "react";

{
  /* className === classNameName */
}

function Header() {
  return (
    <div className="Nav">
      <div className="logoname">
        JOBSKART
      </div>

      <div className="others">
        <div className="inner">
          <div className="item">Home</div>
          <div className="item">My Profile</div>
          <div className="item">About</div>
          <div className="item">Services</div>
          <div className="item" id="su">Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
