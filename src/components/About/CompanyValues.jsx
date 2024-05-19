// import React from 'react'

import { Typography } from "antd"

function CompanyValues() {
    const { Title } = Typography;
    return (
        <>
            <div  >
                <div className="w3-center margin-top">
                    <Title level={4} className="w3-text-white">
                        <b>The values that drive our company</b>
                        <p className="w3-text-grey w3-small">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta odit, laudantium placeat
                        </p>
                    </Title>
                </div>
                <div className="w3-row-padding w3-margin-top">
                    <div className="w3-half w3-margin-top">
                        <div className="w3-card-4 w3-pop-up card-color w3-round-large">
                            <div className="">
                                <div className="w3-cell w3-container">
                                    <i className="fa fa-code color-blue w3-padding-large  w3-round-xxlarge w3-large" style={{ marginTop: "30px", }}></i>
                                </div>
                                <div className="w3-cell w3-container">
                                    <h5><b>Open Source</b></h5>
                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-half w3-margin-top ">
                        <div className="w3-card-4 w3-pop-up card-color w3-round-large">
                            <div className="">
                                <div className="w3-cell w3-container">
                                    <i className="fa fa-globe color-blue w3-padding-large  w3-round-xxlarge w3-large" style={{ marginTop: "30px", }}></i>
                                </div>
                                <div className="w3-cell w3-container">
                                    <h5><b>Decentralized</b></h5>
                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-row-padding w3-margin-top">
                    <div className="w3-half w3-margin-top">
                        <div className="w3-card-4 w3-pop-up card-color w3-round-large">
                            <div className="">
                                <div className="w3-cell w3-container">
                                    <i className="fa fa-search color-blue w3-padding-large  w3-round-xxlarge w3-large" style={{ marginTop: "30px", }}></i>
                                </div>
                                <div className="w3-cell w3-container">
                                    <h5><b>Transparency</b></h5>
                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-half w3-margin-top">
                        <div className="w3-card-4 w3-pop-up card-color w3-round-large">
                            <div className="">
                                <div className="w3-cell w3-container">
                                    <i className="fa fa-users color-blue w3-padding-large  w3-round-xxlarge w3-large" style={{ marginTop: "30px", }}></i>
                                </div>
                                <div className="w3-cell w3-container">
                                    <h5><b>Community-team</b></h5>
                                    <p className="w3-text-grey">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyValues