// import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd"
import { Link } from "react-router-dom";

// import React from 'react'
const { Title } = Typography;
function AboutIndex() {

    const globe = "/images/globe.png"
    return (
        <>
            <div className="" style={{ marginTop: "250px" }}>
                <div>
                    <div className="background-image">
                        <Title level={2} className="w3-xxxlarge w3-text-white">
                            <b>  We are on a mission to <br /> democratize investment to <br /> all crypto holders</b>
                        </Title>
                    </div>
                    <div className="w3-left w3-margin-top">
                        <div className="w3-cell-row ">
                            <div className=" w3-cell " style={{ paddingRight: "5px" }}>
                                <Button size="large" style={{ backgroundColor: "#1649FF", color: "white", border: "none", }} className="w3-margin-right w3-margin-bottom w3-mobile"><Link to='' className="">Join our team</Link></Button>
                            </div>
                            <div className="w3-cell " style={{ paddingLeft: "5px" }}>
                                <Button size="large" style={{ backgroundColor: "#3E4350", color: "white", border: "none" }} className="w3-mobile"><Link to=''>Learn more</Link></Button>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "250px" }}>
                        <div className="w3-row-padding">
                            <div className="w3-half">
                                <Title level={4} className="w3-text-white">
                                    <strong>Take a look at the amazing <br /> result we had achieved</strong>
                                    <p className="w3-text-grey w3-small">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum minima molestiae quod quae consectetur, ullam itaque quas non dolorem tempora et quibusdam aperiam. Beatae quos quisquam veniam laborum porro.
                                    </p>
                                    <p className="w3-text-grey w3-small">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita labore repellat, aliquid minus praesentium
                                    </p>
                                </Title>
                            </div>
                            <div className="w3-half" style={{ marginTop: "100px" }}>
                                <div className="w3-right">
                                    <div className="w3-cell w3-padding ">
                                        <i className="fa fa-filter color-blue w3-padding-large w3-large w3-round-xxlarge"></i>
                                    </div>
                                    <div className="w3-cell">
                                        <h5><strong>506mm in earning interests</strong></h5>
                                        <p className="w3-text-grey w3-small">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="">
                                        <div className="w3-cell w3-padding ">
                                            <i className="fa fa-user color-blue w3-padding-large w3-large w3-round-xxlarge"></i>
                                        </div>
                                        <div className="w3-cell">
                                            <h5><strong>A total of 81,657 investors</strong></h5>
                                            <p className="w3-text-grey w3-small">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w3-row-padding" style={{ marginTop: "250px" }}>
                        <div className="w3-half ">
                            <img src={globe} alt="image" className="w3-image w3-container w3-left" width="100%" />
                        </div>
                        <div className="w3-half">
                            <Title level={3} className="w3-text-white">
                                <b>A new era of crypto investments has arrived</b>
                                <p className="w3-text-grey w3-small">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati exercitationem tenetur libero cumque. Debitis vitae corporis neque deleniti, earum totam necessitatibus, dignissimos eveniet accusamus eligendi atque adipisci, labore fugiat?
                                </p>
                                <hr />
                            </Title>
                            <div>
                                <div className="" >
                                    <div className="w3-cell w3-padding ">
                                        268<i className="fa fa-percent" style={{ color: "#1649ff", fontSize: "20px" }}></i>
                                    </div>
                                    <div className="w3-cell">
                                        <h5><strong>Investment growth <br />Year over year</strong></h5>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="w3-cell w3-padding ">
                                        1K<i className="fa fa-plus" style={{ color: "#1649ff", fontSize: "20px" }}></i>
                                    </div>
                                    <div className="w3-cell">
                                        <h5><strong>New investors <br />Joining every day</strong></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutIndex