import { Link } from "react-router-dom";

import logo from "../data/images/logo.jpg";

const Header = () => {
  const swipeMenu = () => {
    const mainMenu = document.querySelector("#menu");
    const burgerMenu = document.querySelector("#menu-burger");
    const nav = document.querySelector(".nav");

    document.addEventListener("click", function (event) {
      if (mainMenu.className === "") {
        return;
      } else if (event.target.closest("#menu") || event.target.closest("#menu-burger")) return;
      mainMenu.classList.add("invisible");
      burgerMenu.removeAttribute("class", "clicked");
    });
    let clickedEvent = "click";
    burgerMenu.addEventListener(
      clickedEvent,
      function () {
        if (!this.getAttribute("class")) {
          this.setAttribute("class", "clicked");
        } else {
          this.removeAttribute("class");
        }
        if (mainMenu.getAttribute("class") !== "visible") {
          mainMenu.setAttribute("class", "visible");
        } else {
          mainMenu.setAttribute("class", "invisible");
        }
      },
      false
    );
    nav.addEventListener("click", () => {
      mainMenu.classList.add("invisible");
      burgerMenu.removeAttribute("class", "clicked");
    });
  };
  return (
    <div id="identite" onLoad={swipeMenu}>
      <header id="header">
        <div id="menu-burger">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className="identite">
          <h1 className="titreIndex">
            <Link to="/">Shake it Yourself</Link>
          </h1>
          <div className="logo">
            <img src={logo} alt="logo site" id="logosite" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
