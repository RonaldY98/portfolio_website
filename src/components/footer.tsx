import GithubIcon from "../assets/images/icons8-github.svg";
import InstagramIcon from "../assets/images/icons8-instagram.svg";
import LinkedInIcon from "../assets/images/icons8-linkedin.svg";
import GmailIcon from "../assets/images/icons8-gmail.svg";
import * as React from 'react';

const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-transparent bg-gradient-to-t from-gray-800">
      <h3 className="flex justify-center text-white pt-10 pb-5">
        Let's Connect! Reach out with any of the links below
      </h3>
      <div className="flex flex-row justify-center space-x-4">
        < GithubIcon />
        < InstagramIcon />
        < LinkedInIcon />
        < GmailIcon />
      </div>
    </div>
  );
};

export default Footer;
