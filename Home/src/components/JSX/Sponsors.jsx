import React from "react";
import SponsCard from "./SponsCard";
import SponzCSS from "../CSS/Sponz.module.css";
import { sponsors } from "../../SponsorList";
import { useNavigate } from "react-router-dom";

function Sponsors() {
  const navigate = useNavigate();
  const navigateBack = () => navigate("/");

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
      <div onClick={navigateBack} className="backBtn"></div>

      <div>
        <div className={SponzCSS.title}>SPONSORS</div>
        {cards}
      </div>
    </div>
  );
}

export default Sponsors;
