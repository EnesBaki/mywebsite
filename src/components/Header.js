import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            <img src={Logo}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
