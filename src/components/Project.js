import { Paper } from "@mui/material";
import React from "react";

function Project({ image, onClick, link, title }) {
  return (
    <div className="project" onClick={onClick}>
      <a target="_blank" href={link}>
      <div className="project__description">{title}</div>
      <img src={image} alt="project-img" className="project__img" />
      </a>
      
    </div>
  );
}

export default Project;
