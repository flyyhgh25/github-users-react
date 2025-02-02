import React, { useState, useRef } from "react";
import iconGithub from "./assets/ic-github.png";
import iconProfile from "./assets/bf.jpg";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [val, setVal] = useState("");
  const [showLink, setShowLink] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);
  const height = 30;
  const width = 30;

  const toggleLink = () => {
    setShowLink((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", val);
  };

  const linkStyle = {
    width: showLink && linkRef.current ? `100%` : "0px",

  };

  return (
    <nav>
      <div className="nav-center">
        <div className="link-container" ref={linkContainerRef} style={linkStyle}>
          <ul ref={linkRef} style={{ display: showLink ? "flex" : "none" }}>
            <li style={{ width: "5%" }}>
              <img src={iconGithub} alt="GitHub Icon" height={height} width={width} className="avatar" />
            </li>
            <li style={{ width: "90%" }}>
              <form className="form-class" onSubmit={handleSubmit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  placeholder="Type / to search"
                />
              </form>
            </li>
            <li style={{ width: "5%" }}>
              <img src={iconProfile} alt="Profile Icon" height={height} width={width} className="avatar" />
            </li>
          </ul>
        </div>
        <div className="nav-bar">
          <button className="btn-bars" onClick={toggleLink}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
