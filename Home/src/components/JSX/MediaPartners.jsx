import React from "react";
import MediaPartnersCard from "./MediaPartnersCard";
import PartnersCSS from "../CSS/Sponz.module.css";
import { partners } from "../../PartnersList";
import BackBtn from "./BackBtn";

function MediaPartners() {
  const cards = partners.map(partner => {
    return (
      <MediaPartnersCard
        name={partner.PartnerName}
        title={partner.Partner}
        link={partner.Link}
        img={partner.Logo}
      />
    );
  });

  return (
    <div className={PartnersCSS.container}>
      <div className={PartnersCSS.header}>
        <div className={PartnersCSS.back}>
          <BackBtn />
        </div>
        <div className={PartnersCSS.title}>Media Partners</div>
        <div className={PartnersCSS.back}></div>
      </div>
      {cards}
    </div>
  );
}

export default MediaPartners;
