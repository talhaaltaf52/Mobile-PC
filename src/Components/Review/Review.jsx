import React from 'react';
import { HiStar } from 'react-icons/hi';
import './review.css';
 
const Review = () => {
    return(
        <>
            <div className="container" style={{ marginTop:"50px", textAlign:"center" }}>
                <p className="para_4">Reviews From:</p>
                <h1 style={{ color:"#283785" }}><HiStar />Trustpilot</h1>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="container" style={{ width: "100%", height: "350px", backgroundColor: "#2370b8" }}>
                            <p className="review_div_1"><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /></p>
                            <p className="review_div_2">Thank you again and again! I have experienced the fastest support ever. My order arrived on my doorstep the following day. Your team is always friendly and very helpful. You managed to exceed my expectations!</p>
                            <p className="review_div_3">Sam Kromstain</p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default Review;