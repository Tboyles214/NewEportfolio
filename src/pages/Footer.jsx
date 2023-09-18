import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import Resume from "../assets/Resume/TylerBoylesResume.pdf";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <h4 style={{ color: 'white', fontSize: '32px' }}>&lt;/&gt; | TB</h4>
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a target="_blank" href="https://github.com/Tboyles214">Github</a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/tyler-boyles/">LinkedIn</a>
        </div>
        <div>
          <a href="mailto:tboyles244@gmail.com">Email</a>
        </div>
        <div>
          <a target="_blank" href={Resume}>Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Tyler Boyles</div>
    </div>
  );
};

export default Footer;

