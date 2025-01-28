import React, { useEffect, useState } from "react";
import iconProfile from "./assets/bf.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import UseFetch from "./axios/custom";
const Content = ({ url }) => {
  const [users, setUsers] = useState([]);
  const height = 30;
  const width = 30;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UseFetch(url);
        setUsers(response.data);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  //location = data: url
  return (
    <section>
      {users.map((data) => {
        const { id, avatar_url, html_url, login } = data;
        return (
          <div key={id} className="card">
            <img
              src={avatar_url}
              alt="iconGithub"
              height={height}
              width={width}
              className="avatar"
            />
            <div className="identity">
              <h2>
                <a className="github-name" href={html_url}>
                  {login}
                </a>
                <a className="text-muted" href="#">
                  aisao
                </a>
              </h2>
              <p>
                Nader Dabit dabit3 Specializing in full stack cloud, blockchain,
                and AI application development with React, React Native,
                Node.js, & TypeScript.
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
        );
      })}
    </section>
  );
};
export default Content;
