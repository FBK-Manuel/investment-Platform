// import React from 'react'

import { RightOutlined } from "@ant-design/icons"
import { Button, Typography } from "antd"
import { Link } from "react-router-dom"

function RelatedPost() {
    const { Title } = Typography
    const image1 = "/src/images/te.jpg"
    // const image2 = "/src/images/tet-invet.png";

    return (
        <div>
            <div style={{ marginTop: "250px" }}>
                <div className="">
                    <div className="w3-row-padding">
                        <div className="w3-half">
                            <Title level={2} className="w3-container">
                                <b className="w3-text-white">Related Posts</b>
                            </Title>
                        </div>

                        <div className="w3-half">
                            <div className="w3-right w3-hide-small ">
                                <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className="w3-mobile"><Link to='/blog'>Browse articles</Link></Button>
                            </div>
                            <div className="  w3-hide-large w3-hide-medium">
                                <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className="w3-mobile"><Link to='/blog'>Browse articles</Link></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-row-padding">
                    <div className="w3-half w3-margin-top">
                        <div className="w3-card-4 w3-pop-up color-dark-blue w3-round-xlarge">
                            <div className="w3-margin-top ">
                                <img src={image1} alt="image" className="w3-round-xlarge w3-image" width="100%" />
                            </div>
                            <div className="w3-cell-row">
                                <div className="w3-container w3-cell">
                                    <p className="w3-text-grey w3-hover-text-white"><i className="	fa fa-calendar-check-o w3-text-grey"></i> January 3, 2023</p>
                                </div>
                                <div className="w3-cell w3-container">
                                    <p className="w3-text-grey w3-hover-text-white"><i className="fa fa-clock-o w3-text-grey"></i> 4 min read</p>
                                </div>
                            </div>
                            <div className="w3-container">
                                <p className="w3-medium"><strong>What is an INVET Token(Non-Fungible Token), and how you can buy one.</strong></p>
                            </div>
                            <div className="w3-container" style={{ paddingBottom: "50px" }} >
                                <Link className="w3-decoration w3-hover-text-blue" to="/post">Read More <RightOutlined /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w3-half w3-margin-top">
                        <div className="w3-card-4 w3-pop-up color-dark-blue w3-round-xlarge">
                            <div className="w3-margin-top ">
                                <img src={image1} alt="image" className="w3-round-xlarge w3-image" width="100%" />
                            </div>
                            <div className="w3-cell-row">
                                <div className="w3-container w3-cell">
                                    <p className="w3-text-grey w3-hover-text-white"><i className="	fa fa-calendar-check-o w3-text-grey"></i> January 3, 2023</p>
                                </div>
                                <div className="w3-cell w3-container">
                                    <p className="w3-text-grey w3-hover-text-white"><i className="fa fa-clock-o w3-text-grey"></i> 7 min read</p>
                                </div>
                            </div>
                            <div className="w3-container">
                                <p className="w3-medium"><strong>6 great crypto wallets you should try to keep your crypto assets secure</strong></p>
                            </div>
                            <div className="w3-container" style={{ paddingBottom: "50px" }} >
                                <Link className="w3-decoration w3-hover-text-blue" to="/post">Read More <RightOutlined /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedPost