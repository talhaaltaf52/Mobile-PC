import React from 'react';
import Button from '../Buttons/Button';
import img5 from './Images/Tablet.png';
import { AiOutlineHeart } from 'react-icons/ai';
import './sessiontwo.css';

const SessionTwo = () => {
    return(
        <>
            <div className="container" style={{ marginTop:"100px", backgroundColor:"#f5f5f5" }}>
                <div className="row">
                    <div className="col-md-8">
                        <img src={img5} alt="Tablet" className="image4"/>
                    </div>
                    <div className="col-md-4" style={{ marginTop:"50px", textAlign:"left" }}>
                        <p className="para_2">ALL NEW TREND TABLETS</p>
                        <h1 className="Heading_2">Top Rated</h1>
                        <h1 className="Heading_2">Tablets!</h1>
                        <p style={{ fontFamily:"monospace", fontWeight:"bold" }}>Doing It All, In All New Ways.</p>
                        <Button text="Shop Now" icon={<AiOutlineHeart />} className="button_2"/><br /><br />
                    </div>
                </div>
            </div>
        </>
    );
} 

export default SessionTwo;