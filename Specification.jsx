import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Specification.css';

function Specification() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="product-specs">
        <h2>Mobile Name</h2>
            <Slider {...settings}>
                <div>
                    <img width={"300px"} src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009491/Croma%20Assets/Communication/Mobiles/Images/243460_0_n90peu.png/mxw_2048,f_auto" alt="Product" />
                    
                </div>
                <div>
                    <img width={"300px"} src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009491/Croma%20Assets/Communication/Mobiles/Images/243460_0_n90peu.png/mxw_2048,f_auto" alt="Product" />
                </div>
                <div>
                    <img width={"300px"} src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009491/Croma%20Assets/Communication/Mobiles/Images/243460_0_n90peu.png/mxw_2048,f_auto" alt="Product" />
                </div>
            </Slider>
            
            <div id='tables'>
                <table>
                    <tbody>
                        <tr>
                            <td>Brand:</td>
                            <td>Example Brand</td>
                        </tr>
                        <tr>
                            <td>Model:</td>
                            <td>Example Model</td>
                        </tr>
                        <tr>
                            <td>Display:</td>
                            <td>6.2 inches, 1080 x 2340 pixels</td>
                        </tr>
                        <tr>
                            <td>Processor:</td>
                            <td>Qualcomm Snapdragon 855</td>
                        </tr>
                        <tr>
                            <td>RAM:</td>
                            <td>6 GB</td>
                        </tr>
                        <tr>
                            <td>Storage:</td>
                            <td>64 GB</td>
                        </tr>
                        <tr>
                            <td>Battery:</td>
                            <td>4000 mAh</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <td>Brand:</td>
                            <td>Example Brand</td>
                        </tr>
                        <tr>
                            <td>Model:</td>
                            <td>Example Model</td>
                        </tr>
                        <tr>
                            <td>Display:</td>
                            <td>6.2 inches, 1080 x 2340 pixels</td>
                        </tr>
                        <tr>
                            <td>Processor:</td>
                            <td>Qualcomm Snapdragon 855</td>
                        </tr>
                        <tr>
                            <td>RAM:</td>
                            <td>6 GB</td>
                        </tr>
                        <tr>
                            <td>Storage:</td>
                            <td>64 GB</td>
                        </tr>
                        <tr>
                            <td>Battery:</td>
                            <td>4000 mAh</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='pros-cons-container'>
                <div className="pros-container">
                    <h3>Pros:</h3>
                    <ul>
                        <li>Fast performance</li>
                        <li>Great display</li>
                        <li>Long battery life</li>
                    </ul>
                </div>

                <div className="cons-container">
                    <h3>Cons:</h3>
                    <ul>
                        <li>No headphone jack</li>
                        <li>Expensive</li>
                    </ul>
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Price:</td>
                        <td>
                            <div className="prices-container">
                                <div className="price-item">
                                    <span className="price-label">Flipkart:</span>
                                    <span className="price-value">Rs. 12,999</span>
                                    <a href="#" className="store-link">Go to Store</a>
                                </div>
                                <div className="price-item">
                                    <span className="price-label">Amazon:</span>
                                    <span className="price-value">Rs. 13,499</span>
                                    <a href="#" className="store-link">Go to Store</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>



        </div>
    );
}

export default Specification;