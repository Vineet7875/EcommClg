import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Works.css"  
const Works1 = () => {
    const navigate = useNavigate();
    const handleBelow5kClick = () => {
        navigate('/Below5kProducts');
    }
    const handleBetween5kTo10kClick = () => {
        navigate('/Between5kTo10kProducts');
    }
    const handleBetween10kTo20kClick = () => {
        navigate('/Between10kTo20kProducts');
    }
    const handleBetween20kTo30kClick = () => {
        navigate('/Between20kTo30kProducts');
    }
    const handleBetween30kTo50kClick = () => {
        navigate('/Between30kTo50kProducts');
    }
    const handleAbove50kClick = () => {
        navigate('/Above50kProducts');
    }
    const handleAllProductsClick = () => {
        navigate('/AllProducts');
    }
    return (<>
        <div id="work" className="Works1">
            <h1 id="Work">Mobiles By Budget (Rs)</h1>
            <div className="Works2">
                <div id="all" className="cardwo" data-aos="fade-up" onClick={handleAllProductsClick}>
                    <span>All</span>
                </div>
                <div id="samsung1" className="cardwo" data-aos="fade-up" onClick={handleBelow5kClick}>
                    <span>Below 5k</span>
                </div>
                <div id="oppo1" className="cardwo" data-aos="fade-up" onClick={handleBetween5kTo10kClick}>
                    <span>5-10k</span>
                </div>
                <div id="redmi1" className="cardwo" data-aos="fade-up" onClick={handleBetween10kTo20kClick}>
                    <span>10-20k</span>
                </div>
                <div id="vivo1" className="cardwo" data-aos="fade-up" onClick={handleBetween20kTo30kClick}>
                    <span>20-30k</span>
                </div>
                <div id="oneplus1" className="cardwo" data-aos="fade-up" onClick={handleBetween30kTo50kClick}>
                    <span>30-50k</span>
                </div>
                <div id="iphone1" className="cardwo" data-aos="fade-up" onClick={handleAbove50kClick}>
                    <span>Above 50k</span>
                </div>

            </div>
        </div>
    </>)
}
export default Works1