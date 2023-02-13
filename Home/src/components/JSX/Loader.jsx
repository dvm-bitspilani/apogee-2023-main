import React from 'react'
import { useEffect } from 'react';
import '../CSS/Loader.css'

export default function Loader(props) {

    document.querySelectorAll('.bar').forEach((bar, idx) => {
        if(idx <= (props.percent)/5) {
            bar.style.backgroundColor = '#83C4FD';
            idx++;
        }
        else return;
    })

    useEffect(() => {
        if(props.percent >= 100) {
            document.querySelector('.loader').style.zIndex = -1000;
        }
        else {
            document.querySelector('.loader').style.zIndex = 100000000000000;
        }
    }, [])

  return (
    <div className='loader'>
        <div className="loaderWrapper">
            <span className='loading'>LOADING...</span>
            <div className="progressBar">
                <div className="bar" id="bar-1"></div>
                <div className="bar" id="bar-2"></div>
                <div className="bar" id="bar-3"></div>
                <div className="bar" id="bar-4"></div>
                <div className="bar" id="bar-5"></div>
                <div className="bar" id="bar-6"></div>
                <div className="bar" id="bar-7"></div>
                <div className="bar" id="bar-8"></div>
                <div className="bar" id="bar-9"></div>
                <div className="bar" id="bar-10"></div>
                <div className="bar" id="bar-11"></div>
                <div className="bar" id="bar-12"></div>
                <div className="bar" id="bar-13"></div>
                <div className="bar" id="bar-14"></div>
                <div className="bar" id="bar-15"></div>
                <div className="bar" id="bar-16"></div>
                <div className="bar" id="bar-17"></div>
                <div className="bar" id="bar-18"></div>
                <div className="bar" id="bar-19"></div>
                <div className="bar" id="bar-20"></div>
            </div>
        </div>
    </div>
  )
}
