// import githubIcon from "../assets/images/icons8-github.svg";
// import instagramIcon from "../assets/images/icons8-instagram.svg";
// import linkedInIcon from "../assets/images/icons8-linkedin.svg";
// import gmailIcon from "../assets/images/icons8-gmail.svg";
import * as React from 'react'
const Footer = () => {
  return (
    <div className="pt-10 pb-10 bg-transparent bg-gradient-to-t from-gray-800">
      <h3 className="flex justify-center text-white pt-10 pb-5">
        Let's Connect! Reach out with any of the links below
      </h3>
      <div className="flex flex-row justify-center space-x-4">
        <img src={'../assets/images/icons8-github.svg'} alt="githubSVG" />
        <img src={'../assets/images/icons8-instagram.svg'} alt="instagramSVG" />
        <img src={'../assets/images/icons8-linkedin.svg'} alt="linkedinSVG" />
        <img src={'../assets/images/icons8-gmail.svg'} alt="linkedinSVG" />
      </div>
    </div>
  );
};

export default Footer;
