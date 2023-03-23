import React from 'react'
import SponzCSS from "../CSS/Sponz.module.css"

function SponsCard(props) {
    return (
        <div className={SponzCSS.card}>
            <div className={SponzCSS.cardTitle}>{props.title}</div>
            <div className={SponzCSS.brand}>
                <a target={"_blank"} className={SponzCSS.link} href={props.link}>
                    <div className={SponzCSS.brandImage}><img src={props.img} /></div>
                    <div className={SponzCSS.brandName}>{props.name}</div>
                </a>
            </div>
        </div>
    )
}

export default SponsCard