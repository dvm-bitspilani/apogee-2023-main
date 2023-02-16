import React from 'react'
import '../CSS/SpeakerCard.css'
import soumya from '../../assets/soumya.png'

export default function SpeakerCard() {
  return (
    <div className='speakerCard'>
        <div className="speakerCont">
            <div className="speakerName">DR. SOUMYA SWAMINATHAN</div>
            <div className="speakerPos">CHIEF SCIENTIST, WHO</div>
        </div>
        <div className="speakerImg">
            <img src={soumya} alt="" />
        </div>
    </div>
  )
}
