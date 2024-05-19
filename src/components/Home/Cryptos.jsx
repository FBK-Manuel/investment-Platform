// import React from 'react'

import { Button, Typography } from "antd"
import { Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RightOutlined } from "@ant-design/icons";
function Cryptos() {
    var action = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    var small = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const { Title } = Typography
    const btc = "/src/images/bitc.png";
    const eth = "/src/images/eth.png";
    const doge = "/src/images/dodge.png";
    const lith = "/src/images/lith.png";
    const xcoin = "/src/images/xc.png";
    const cardino = "/src/images/cardano.png";
    const phone = "/src/images/fone.png";



    return (
        <div className="w3-container">
            <div className="" style={{ marginTop: "250px" }}>
                <div className="w3-row-padding">
                    <div className="w3-half">
                        <Title level={2}>
                            <b className="w3-text-white">Native integrated with most <br /> popular cryptocurrency</b>
                        </Title>
                    </div>

                    <div className="w3-half" >
                        <div className="w3-margin-bottom w3-right w3-hide-small w3-hide-medium">
                            <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className=""><Link to=''>Browse all cryptos</Link></Button>
                        </div>
                        <div className="w3-margin-bottom  w3-hide-large">
                            <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className="w3-mobile"><Link to=''>Browse all cryptos</Link></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-container w3-margin-top w3-hide-small w3-hide-medium">
                <Slider {...action}>

                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={btc} alt="bitcoin" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Bitcoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>
                                    <div className="w3-tag w3-round w3-margin-top color-blue w3-cell w3-right">
                                        New
                                    </div>
                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in bitcoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={eth} alt="Etherum" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Etherum</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>
                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in etherum <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={doge} alt="doge" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Dogecoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in dogecoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={xcoin} alt="xcoin" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Xcoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in xcoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={lith} alt="litecoin" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Litecoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in litecoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={cardino} alt="Cardano" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Cardino</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in cardano <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider >
            </div >



            {/* On small screen */}
            <div className="w3-hide-large">
                <Slider {...small}>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={btc} alt="bitcoin" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Bitcoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>
                                    <div className="w3-tag w3-round w3-margin-top color-blue w3-cell w3-right">
                                        New
                                    </div>
                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in bitcoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={eth} alt="Etherum" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Etherum</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>
                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in etherum <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={doge} alt="doge" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Dogecoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in dogecoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={xcoin} alt="xcoin" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Xcoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in xcoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={lith} alt="litecoin" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Litecoin</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in litecoin <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w3-card-2 card-color w3-round-xlarge">
                            <div className="w3-container " >
                                <div className="w3-cell-row">
                                    <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                        <img src={cardino} alt="Cardano" width="50px" height="50px" />
                                    </div>
                                    <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                        <p style={{ lineHeight: 0 }}><b>Cardino</b></p>
                                        <p className="w3-text-grey" >Cryptocurrency</p>
                                    </div>

                                </div>
                                <hr />
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                </p>
                                <div style={{ paddingBottom: "30px" }}>
                                    <Link to='#' className="w3-decoration  w3-hover-text-blue" >Invest in cardano <RightOutlined /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="w3-container " style={{ marginTop: "250px" }}>
                <div className="color-light-blue w3-round-xxlarge w3-padding w3-margin">
                    <div className="w3-row-padding">
                        <div className="w3-half">
                            <div className="w3-left" style={{ marginTop: "50px" }}>
                                <img src={phone} alt="image" width="100%" height="100%" />
                            </div>
                        </div>
                        <div className="w3-half">
                            <div className="w3-center" style={{ marginTop: "150px" }}>
                                <div>
                                    <h3><b>Start investing today</b></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae dolor quasi sunt unde maiores totam, nobis accusantium, quaerat corrupti maxime. Aliquid,</p>
                                </div>
                                <div className="w3-margin-bottom w3-container">
                                    <Button size="large" className="color-white w3-mobile w3-margin-bottom w3-margin-right "><Link to='#'>Get started</Link></Button>
                                    <Button size="large" className="color-pale-blue w3-mobile"><Link to='#'>Learn more</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cryptos