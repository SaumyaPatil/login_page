import React from 'react';
import XDR_logo from '../assets/XDR_logo.png';
import './Info.css';

const Info = () => {
    return (
        <div className="header_background">
            <div className="container">
                <div className="info-left">
                    <p className="text-left"> Detections & Response </p>
                </div>
                <div className="info-right">
                    <img src={XDR_logo} alt="XDR-logo" className='XDR-logo'/>
                </div>
            </div>
        </div>
    )
}

export default Info;