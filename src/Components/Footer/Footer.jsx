import React from 'react';
import './footer.css';
import logo2 from './Images/logo2.png';

const Footer = () => {
    return(
        <>
            <div className="container-fluid" style={{ marginTop:"60px", backgroundColor:"#f5f5f5"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" style={{ marginTop: "20px" }}>
                            <div className="text-center">
                                <img src={logo2} style={{ width:"200px", height:"150px", paddingLeft:"40px" }}/>
                            </div>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "50px" }}>
                            <ul className="ul">
                                <h3 className="Heading_6">Your Account</h3>
                                <li className="li">Personal info</li>
                                <li className="li">Orders</li>
                                <li className="li">Credit slips</li>
                                <li className="li">Adresses</li>
                            </ul>
                        </div>
                        <div className="col-md-3" style={{ marginTop: "50px" }}>
                            <ul className="ul">
                                <h3 className="Heading_6">Customer Service</h3>
                                <li className="li">Monday to Friday</li>
                                <li className="li">10am - 6:30pm</li>
                                <li className="li">123-456-789</li>
                                <li className="li">support@pc&mobile.com</li>
                            </ul>
                        </div>
                        <div className="col-md-3" style={{ marginTop: "50px" }}>
                            <ul className="ul">
                                <h3 className="Heading_6">Our Guarantees</h3>
                                <li className="li">Shiping in 3 days</li>
                                <li className="li">Free returns within 14 days</li>
                                <li className="li">Secure payments</li>
                            </ul>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "50px" }}>
                            <ul className="ul">
                                <h3 className="Heading_6">Our Company</h3>
                                <li className="li">Delivery</li>
                                <li className="li">Legal Notice</li>
                                <li className="li">About Us</li>
                                <li className="li">Terms and conditions of use</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;