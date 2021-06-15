import React from 'react';
//import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import vid from './videos/vid.mp4';
document.body.style.backgroundColor = "black";
function HeroSection() {
    return (
        <div className='hero-container'>
            <video
            autoPlay loop muted
            style={{
                position:"absolute",
                width:"100%",
                left:"50%",
                top:"50%",
                height:"125%",
                objectFit:"cover",
                transform:"translate(-50%,-50%)",
                zIndex:"-1"


            }}>
                <source src={vid} type="video/mp4" />
            </video>
            <h1><b> India's Greatest Monuments </b></h1>

        </div>
    );
}

export default HeroSection
