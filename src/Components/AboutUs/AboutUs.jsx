import React from 'react';
import './aboutus.css';
import img6 from './Images/about.jpg';

const AboutUs = () => {
    return(
        <>
            <div className="container" style={{ marginTop:"40px" }}>
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="Heading_4">About Us</h1>
                        <h3 className="Heading_5">The Highest Quality of Products</h3>
                        <p className="para_3">We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p>
                    </div>
                    <div className="col-md-7">
                        <img src={img6} className="about_img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;