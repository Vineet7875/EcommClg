import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Works.css"
const Works = () => {
    const navigate = useNavigate();
    const handleSamsungClick = () => {
        navigate('/SamsungProducts');
    }
    const handleOppoClick = () => {
        navigate('/OppoProducts');
    }
    const handleVivoClick = () => {
        navigate('/VivoProducts');
    }
    const handleRedmiClick = () => {
        navigate('/RedmiProducts');
    }
    const handleOneplusClick = () => {
        navigate('/OneplusProducts');
    }
    const handleIphoneClick = () => {
        navigate('/IphoneProducts');
    }
    const handleAllProductsClick = () => {
        navigate('/AllProducts');
    }

    return (<>
        <div id="work" className="Works1">
            <h1 id="WorkMob">Mobiles By Brands</h1>
            <div className="Works2">
                <div id="all" className="cardwo" data-aos="fade-up"onClick={handleAllProductsClick} >
                    <span>All</span>
                </div>

                <div id="samsung" className="cardwo" data-aos="fade-up" onClick={handleSamsungClick}>

                </div>
                <div id="oppo" className="cardwo" data-aos="fade-up" onClick={handleOppoClick}>

                </div>
                <div id="redmi" className="cardwo" data-aos="fade-up" onClick={handleRedmiClick}>

                </div>
                <div id="vivo" className="cardwo" data-aos="fade-up" onClick={handleVivoClick}>

                </div>
                <div id="oneplus" className="cardwo" data-aos="fade-up" onClick={handleOneplusClick}>

                </div>
                <div id="iphone" className="cardwo" data-aos="fade-up" onClick={handleIphoneClick}>

                </div>
            </div>
        </div>
    </>)
}
export default Works