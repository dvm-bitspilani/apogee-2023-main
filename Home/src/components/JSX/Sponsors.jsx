import React from "react";
import SponsCard from "./SponsCard";
import SponzCSS from "../CSS/Sponz.module.css";
import { sponsors } from "../../SponsorList";
import BackBtn from "./BackBtn";

function Sponsors() {
  const cards = sponsors.map(sponsor => {
    return (
      <SponsCard
        name={sponsor.PartnerName}
        title={sponsor.Partner}
        link={sponsor.Link}
        img={sponsor.Logo}
      />
    );
  });

  return (
    <div className={SponzCSS.container}>
      <div className={SponzCSS.header}>
        <div className={SponzCSS.back}>
          <BackBtn />
        </div>
        <div className={SponzCSS.title}>SPONSORS</div>
        <div className={SponzCSS.back}></div>
      </div>
      {cards}
    </div>
  );
}

export default Sponsors;
