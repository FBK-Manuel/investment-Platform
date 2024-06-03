// import React from 'react'

import { Button, Typography } from "antd"

function PriceCard() {
    const { Title } = Typography;
    const cardImage1 = "/public/invet2.png";
    const cardImage2 = "/public/R.png";
    const cardImage3 = "/public/invet.png";
    return (
        <div>
            <div className="w3-margin-top">
                <div>
                    <div data-aos="fade-up" className="w3-container w3-center" style={{ marginBottom: "50px" }}>
                        <Title level={1} className="w3-text-white">
                            Pricing
                            <p className="w3-text-grey w3-small">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque nisi quasi quibusdam dicta error placeat minus,
                            </p>
                        </Title>
                    </div>
                    <div className="w3-row-padding">
                        <div data-aos="fade-up" className="w3-third w3-margin-top">
                            <div className="w3-card-2 w3-pricing-pop w3-round-xlarge w3-container card-color">
                                <img src={cardImage1} alt="image" width="50px" height="50px" className="w3-margin-top" />
                                <h3><strong>Lite</strong></h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisi cing elit. Impedit quis nesciunt nihil,</p>
                                <Button size="large" className="color-blue w3-block w3-border-0 w3-center">Get Started</Button>
                                <h3 className="w3-xxlarge w3-margin-bottom">
                                    <b>$9.00 USD</b> <span className="w3-small">/month</span>
                                </h3>
                                <hr />
                                <div className="w3-margin-top w3-margin-bottom">
                                    <p className="w3-medium">
                                        What it includes?
                                    </p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> 5.7% APY Investment</p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> Investment signals and analytics</p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> Monthly and weekly reporting</p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> Standard support</p>
                                </div>
                                <div style={{ marginBottom: "50px" }}>
                                    <Button size="large" className="color-blue w3-block w3-margin-top w3-border-0 w3-center">Get Started</Button>
                                </div>

                            </div>
                        </div>
                        <div data-aos="fade-up" className="w3-third w3-margin-top">
                            <div className="w3-card-2 w3-pricing-pop w3-round-xlarge w3-container color-blue ">
                                <img src={cardImage2} alt="image" width="50px" height="50px" className="w3-margin-top" />
                                <h3><strong>Standard</strong></h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisi cing elit. Impedit quis nesciunt nihil,</p>
                                <Button size="large" className="w3-white w3-block w3-border-0 w3-center">Get Started</Button>
                                <h3 className="w3-xxlarge w3-margin-bottom">
                                    <b>$19.00 USD</b> <span className="w3-small">/month</span>
                                </h3>
                                <hr />
                                <div className="w3-margin-top w3-margin-bottom">
                                    <p className="w3-medium">
                                        What it includes?
                                    </p>
                                    <p><i className="fa fa-check" style={{ color: "#ffffff" }}></i> 5.7% APY Investment</p>
                                    <p><i className="fa fa-check" style={{ color: "#ffffff" }}></i> Investment signals and analytics</p>
                                    <p><i className="fa fa-check" style={{ color: "#ffffff" }}></i> Monthly and weekly reporting</p>
                                    <p><i className="fa fa-check" style={{ color: "#ffffff" }}></i> Convertion rate</p>
                                    <p><i className="fa fa-check" style={{ color: "#ffffff" }}></i> Premium support</p>

                                </div>
                                <div style={{ marginBottom: "50px" }}>
                                    <Button size="large" className="w3-white w3-block w3-margin-top w3-border-0 w3-center">Get Started</Button>
                                </div>

                            </div>
                        </div>
                        <div data-aos="fade-up" className="w3-third w3-margin-top">
                            <div className="w3-card-2 w3-pricing-pop w3-round-xlarge w3-container card-color">
                                <img src={cardImage3} alt="image" width="50px" height="50px" className="w3-margin-top" />
                                <h3><strong>Pro</strong></h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisi cing elit. Impedit quis nesciunt nihil,</p>
                                <Button size="large" className="color-blue w3-block w3-border-0 w3-center">Get Started</Button>
                                <h3 className="w3-xxlarge w3-margin-bottom">
                                    <b>$29.00 USD</b> <span className="w3-small">/month</span>
                                </h3>
                                <hr />
                                <div className="w3-margin-top w3-margin-bottom">
                                    <p className="w3-medium">
                                        What it includes?
                                    </p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> 5.7% APY Investment</p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> Investment signals and analytics</p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> Monthly and weekly reporting</p>
                                    <p><i className="fa fa-check" style={{ color: "#1649FF" }}></i> Dedicated support</p>
                                </div>
                                <div style={{ marginBottom: "50px" }}>
                                    <Button size="large" className="color-blue w3-block w3-margin-top w3-border-0 w3-center">Get Started</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceCard