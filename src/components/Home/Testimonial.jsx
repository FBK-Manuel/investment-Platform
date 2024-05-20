// import React from 'react'
import { Button, Col, Row, Typography } from "antd"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Testimonial() {
    var large = {
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

    const btc = "/images/testimony/img_man.jpg";
    const eth = "/images/testimony/img_parallax3.jpg";
    const doge = "/images/testimony/jane.jpg";
    const lith = "/images/testimony/people1.jpg";
    const xcoin = "/images/testimony/team1.jpg";
    const cardino = "/images/testimony/team4.jpg";
    // const phone = "/images/fone.png";
    const { Title } = Typography
    return (
        <div>
            <div className="w3-container">
                <div className="" style={{ marginTop: "250px" }}>
                    <Row>
                        <Col span={24}>
                            <Title level={2} className="w3-center">
                                <b className="w3-text-white">What our clients are saying about us</b>
                            </Title>
                        </Col>


                    </Row>
                </div>

                <div className="slider-container w3-margin-top w3-hide-small w3-hide-medium">
                    <Slider {...large}>

                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={btc} alt="bitcoin" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Emmanuel Kent</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={eth} alt="Etherum" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Lorence Steve</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>
                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={doge} alt="doge" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Emma Brown</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={xcoin} alt="xcoin" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Kelvin Scott</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={lith} alt="litecoin" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Maggie Gray</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={cardino} alt="Cardano" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Will Smith</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

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
                                            <img src={btc} alt="bitcoin" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Emmanuel Kent</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>
                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={eth} alt="Etherum" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Lorence Steve</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>
                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={doge} alt="doge" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Emma Brown</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={xcoin} alt="xcoin" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Kelvin Scott</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={lith} alt="litecoin" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Maggie Gray</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w3-card-2 card-color w3-round-xlarge">
                                <div className="w3-container " >
                                    <div className="w3-cell-row">
                                        <div className="w3-cell w3-image w3-margin-top" style={{ float: "left" }}>
                                            <img src={cardino} alt="Cardano" width="50px" height="50px" className="w3-circle" />
                                        </div>
                                        <div className="w3-cell" style={{ float: "left", marginTop: "20px", marginLeft: "10px" }}>
                                            <p style={{ lineHeight: 0 }}><b>Will Smith</b></p>
                                            <p className="w3-text-grey" >Cryptocurrency</p>
                                        </div>

                                    </div>

                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis ipsum minus quos assumenda?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="w3-margin-bottom w3-margin w3-center">
                    <Button size="large" className="color-blue w3-margin-right w3-border-0 "><Link to='/signup'>Get started</Link></Button>
                    <Button size="large" className="color-grey w3-border-0"><Link to='/about'>How it works</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial