import React, { useEffect, useState } from "react";

const Footer = ({ socials }) => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    setSocial(socials);
  }, []);
  return (
    <footer>
      <ul>
        {social.map((data) => {
          const { id, url, text, icon } = data;
          return (
            <li key={id}>
              <a href={url}> {icon}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
