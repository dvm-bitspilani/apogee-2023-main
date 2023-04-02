import React from "react";
import PartnersCSS from "../CSS/Sponz.module.css";

function MediaPartnersCard(props) {
  return (
    <div className={PartnersCSS.card}>
      <div className={PartnersCSS.cardTitle}>{props.title}</div>
      <div className={PartnersCSS.brand}>
        <a target={"_blank"} className={PartnersCSS.link} href={props.link}>
          <div className={PartnersCSS.brandImage}>
            <img src={props.img} />
          </div>
          <div className={PartnersCSS.brandName}>{props.name}</div>
        </a>
      </div>
    </div>
  );
}

export default MediaPartnersCard;
