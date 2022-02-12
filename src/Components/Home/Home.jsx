import React from 'react';
import img1 from './Images/img1.png';
import Button from '../Buttons/Button';
import './home.css';
import { AiOutlineHeart } from 'react-icons/ai';

const Home = () => {
    return(
        <>
            <div className="container-fluid" style={{marginTop:"50px"}}>
                <div className="container">
                    <div className="row">
                        <div className="center_div col-md-4">
                            <h1 className="h1"><span className="span1">Be</span><span className="span2">st</span></h1>
                            <h1 className="h1"><span className="span1">Gaming</span><span className="span2"> Computer</span></h1><br />
                            <span className="span1">NAME : </span><span className="span2">VENGEANCE i7200 Gaming PC</span><br />
                            <span className="span1">CPU : </span><span className="span2">INTEL CORE I9-10850K</span><br />
                            <span className="span1">GPU : </span><span className="span2">NVIDIA GEFORCE RTX 3090</span><br />
                            <span className="span1">MEMORY : </span><span className="span2">64GB DDR4 3200</span><br />
                            <span className="span1">STORAGE : </span><span className="span2">TWO 2TB M.2 NVME SSD</span><br />
                            <span className="span1">OPERATING SYSTEM : </span><span className="span2">WINDOW 10 PRO</span><br />
                            <span className="span1">PRICE : </span><span className="span2">$4,899.99</span><br /><br />
                            <Button text="Shop Now" icon={<AiOutlineHeart />} className="button_2"/><br /><br />
                        </div>
                        <div className="col-md-8">
                            <img src={img1} alt="gamingpc" className="image1"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;