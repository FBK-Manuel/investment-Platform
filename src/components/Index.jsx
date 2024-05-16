// import React from 'react'

import { Button, Typography } from "antd"
import { Link } from "react-router-dom"
// import { TypeAnimation } from "react-type-animation"
const { Title } = Typography
function Index() {
    const image = "/src/images/tet-invet.png";
    return (
        <div>
            <div className="w3-hide-large"></div>
            <div className=" w3-row-padding">
                <div className="w3-half">
                    <div style={{ paddingTop: "170px" }}>
                        <Title level={2} className="w3-text-white" style={{ fontSize: "3em" }}>
                            Earn up to 6.0% APY interest from your crypto assets.
                            {/* <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Earn up to 6.0% APY interest from your crypto assets.',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Addapt to the cryptocurrency world and secure a lifetime asset.',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: "3em", display: "inline-block", color: "white" }}
                        /> */}

                        </Title>
                        <p className="w3-small w3-text-grey w3-margin-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem et,
                            possimus ea iure perferendis amet quasi accusantium veritatis. </p>
                        <div className="w3-left w3-margin-top w3-block">
                            <Button size="large" style={{ backgroundColor: "#1649FF", color: "white", border: "none", }} className="w3-margin-right w3-margin-bottom w3-mobile"><Link to='' className="">Get Started</Link></Button>
                            <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className="w3-mobile"><Link to=''>Learn more</Link></Button>
                        </div>

                    </div>
                </div>
                <div className="w3-half">
                    <div style={{ paddingTop: "150px" }} className="">
                        <img src={image} alt="image" width="100%" height="100%" className="w3-image" />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "100px" }}>
                <Title level={5} className="w3-text-white" >
                    <div className="w3-bar">
                        <ul className="">
                            <li className="w3-bar-item w3-left w3-large w3-mobile "> Featured on:</li>
                            <li className="w3-bar-item w3-right w3-mobile  w3-medium w3-text-grey w3-hoverable "><i> Twitch</i></li>
                            <li className="w3-bar-item w3-right w3-mobile  w3-medium w3-text-grey"><i className="fa fa-pinterest w3-text-grey"> Pinterest</i></li>
                            <li className="w3-bar-item w3-right w3-mobile  w3-medium w3-text-grey"><i className="fa fa-youtube-play w3-text-grey"> YouTube</i></li>
                            <li className="w3-bar-item w3-right w3-mobile  w3-medium w3-text-grey"><i className="fa fa-facebook-f w3-text-grey"> Facebook</i></li>
                            <li className="w3-bar-item w3-right w3-mobile  w3-medium w3-text-grey"><i className="fa fa-google w3-text-grey"> Google</i></li>
                        </ul>
                    </div>
                </Title>
            </div>
            <Title level={4} className="w3-text-white">
                <div className="w3-bar">
                    <div className="w3-bar-item">
                        <b>Why INVET Is For You?</b>
                    </div>
                    <div className="w3-small w3-right w3-text-grey w3-bar-item">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Consequatur quam corporis nulla amet voluptates, labore numquam reprehenderit?</div>
                </div>
            </Title>
            <div>
                <div className="w3-row-padding w3-margin-top">
                    <div className="w3-third">
                        <div className=" w3-container w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                            <div className="w3-center ">
                                <i className="fa fa-briefcase w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                            </div>
                            <div className="w3-text-white w3-center w3-margin-bottom">
                                <b>Easy to create wallet</b>
                            </div>
                            <div className="w3-text-grey w3-center w3-margin-bottom">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                            </div>
                        </div>
                    </div>
                    <div className="w3-third">
                        <div className=" w3-container w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                            <div className="w3-center ">
                                <i className="fa fa-send w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                            </div>
                            <div className="w3-text-white w3-center w3-margin-bottom">
                                <b>Send & receive anytime</b>
                            </div>
                            <div className="w3-text-grey w3-center w3-margin-bottom">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                            </div>
                        </div>
                    </div>
                    <div className="w3-third">
                        <div className=" w3-container w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                            <div className="w3-center ">
                                <i className="fa fa-line-chart w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                            </div>
                            <div className="w3-text-white w3-center w3-margin-bottom">
                                <b>Report & analytics</b>
                            </div>
                            <div className="w3-text-grey w3-center w3-margin-bottom">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w3-row-padding w3-margin-top">
                    <div className="w3-third">
                        <div className=" w3-container w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                            <div className="w3-center ">
                                <i className="fa fa-rotate-right w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                            </div>
                            <div className="w3-text-white w3-center w3-margin-bottom">
                                <b>Real-time interest</b>
                            </div>
                            <div className="w3-text-grey w3-center w3-margin-bottom">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                            </div>
                        </div>
                    </div>
                    <div className="w3-third">
                        <div className=" w3-container w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                            <div className="w3-center ">
                                <i className="fa fa-shield w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                            </div>
                            <div className="w3-text-white w3-center w3-margin-bottom">
                                <b>Enterprise-grade security</b>
                            </div>
                            <div className="w3-text-grey w3-center w3-margin-bottom">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                            </div>
                        </div>
                    </div>
                    <div className="w3-third">
                        <div className=" w3-container w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                            <div className="w3-center ">
                                <i className="fa fa-commenting-o w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                            </div>
                            <div className="w3-text-white w3-center w3-margin-bottom">
                                <b>24/7 sedicated support</b>
                            </div>
                            <div className="w3-text-grey w3-center w3-margin-bottom">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w3-center">
                <div className="w3-container w3-margin-top w3-block">
                    <Button size="large" style={{ backgroundColor: "#1649FF", color: "white", border: "none", }} className="w3-margin-right w3-margin-bottom w3-mobile"><Link to='' className="">Get Started</Link></Button>
                    <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className="w3-mobile"><Link to=''>Learn more</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default Index