import React from "react";
import iconProfile from "./assets/bf.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faUserGroup } from "@fortawesome/free-solid-svg-icons";
const Content = () => {
  const height = 30;
  const width = 30;
  return (
    <section>
      <div className="card">
        <img
          src={iconProfile}
          alt="iconGithub"
          height={height}
          width={width}
          className="avatar"
        />
        <div className="identity">
          <h2>
            <a className="github-name" href="#">
              Aysan
            </a>
            <a className="text-muted" href="#">
              aisao
            </a>
          </h2>
          <p>
            Nader Dabit dabit3 Specializing in full stack cloud, blockchain, and
            AI application development with React, React Native, Node.js, &
            TypeScript.
          </p>
          <ul>
            <li>Indonesia</li>
            <li>
              <FontAwesomeIcon icon={faBookBookmark} /> 420
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} /> 7.4K
            </li>
          </ul>
        </div>
        <button>Follow</button>
      </div>
      
    </section>
  );
};

export default Content;
