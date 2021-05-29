import React from "react";
import gh from "./github-social.svg";
import tw from "./twitter-social.svg";
import li from "./linkedin-social.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="socials">
        <li className="social">
          <a href="https://twitter.com/holtbt">
            <img src={tw} alt="Twitter" />
          </a>
        </li>
        <li className="social">
          <a href="https://github.com/btholt">
            <img src={gh} alt="GitHub" />
          </a>
        </li>
        <li className="social">
          <a href="https://linkedin.com/in/btholt">
            <img src={li} alt="LinkedIn" />
          </a>
        </li>
        <li className="social">
          <div className="terms">
            <p>Content Licensed Under CC-BY-NC-4.0</p>
            <p>Code Samples and Excercise Licensed Under Apache 2.0</p>
            <p>Brian Holt</p>
          </div>
        </li>
      </ul>
    </footer>
  );
}
