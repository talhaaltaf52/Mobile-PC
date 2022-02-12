import React from 'react';
import '../Header/header.css';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPhoneAndroid } from 'react-icons/md';

const Header = () => {
    return(
        <>
            <div className="container-fluid" style={{ backgroundColor: "#283785"}}>
                <div className="container">
                    <div className="header">
                        <span><AiOutlineMail /></span><span> support@pc&mobile.com</span>
                        <span style={{ marginLeft: "80px" }}><MdPhoneAndroid /></span><span> 123-456-789</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;