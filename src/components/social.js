import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
    return (
        <div className="socialContainer">
            <a href="https://www.youtube.com/channel/UCjicEQkOdP7x2kAn120mQFw?view_as=subscriber"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.instagram.com/_ericwang_/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/eric-wang-407209169/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Eric-rWang"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    );
}