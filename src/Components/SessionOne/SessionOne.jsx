import React from 'react';
import Button from '../Buttons/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './sessionone.css';
import img2 from './Images/iMac.png';
import img3 from './Images/Mobile.png';
import img4 from './Images/GamingPc.png';

const SessionOne = () => {
    return(
        <>
            <div className="container" style={{ marginTop:"30px", marginBottom:"20px" }}>
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="Heading_1">Mac Desktop</h1>
                        <p className="Para_1">Quality Products!</p>
                        <Button icon={<AiOutlineArrowRight />} className="button_3" />
                        <br /><br />
                        <img src={img2} alt="iMac Desktop" className="image2"/>
                    </div>
                    <div className="col-md-4">
                        <h1 className="Heading_1">Realme 6 Pro</h1>
                        <p className="Para_1">Quality Products!</p>
                        <Button icon={<AiOutlineArrowRight />} className="button_3" />
                        <br /><br />
                        <img src={img3} alt="RealMe 6 Pro" className="image3"/>
                    </div>
                    <div className="col-md-4">
                        <h1 className="Heading_1">Gaming PC</h1>
                        <p className="Para_1">Quality Products!</p>
                        <Button icon={<AiOutlineArrowRight />} className="button_3" />
                        <br /><br />
                        <img src={img4} alt="Gaming Pc" className="image2"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SessionOne;