import React, { useState } from "react";
import iconGithub from "./assets/ic-github.png";
import iconProfile from "./assets/bf.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const handleSubmit = () => {};
  const [val, setVal] = useState("");
  const height = 30;
  const width = 30;
  return (
    <nav>
      <img
        src={iconGithub}
        alt="iconGithub"
        height={height}
        width={width}
        className="avatar"
      />
      <form className="form-class" onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          placeholder="Type / to search"
        />
      </form>
      <img
        src={iconProfile}
        alt="iconGithub"
        height={height}
        width={width}
        className="avatar"
      />
    </nav>
  );
};

export default Nav;
