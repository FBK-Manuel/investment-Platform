// import React from 'react'

function Founders() {
    const image1 = "/src/images/testimony/man_hat.jpg"
    const image2 = "/src/images/testimony/jane.jpg"
    const image3 = "/src/images/testimony/avatar_hat.jpg"
    const image4 = "/src/images/testimony/img_man.jpg"
    return (
        <div className="margin-top">
            <div className="w3-row-padding">
                <div className="w3-quarter w3-margin-top">
                    <div className="w3-card-4 card-color w3-round-xlarge w3-pop-up">
                        <div className="w3-center w3-margin " >
                            <div className="card-color w3-card-4 w3-round-xxlarge" style={{ paddingTop: "10px" }}>
                                <img src={image1} alt="image" className="w3-image w3-round-xxlarge" width="100%" />
                            </div>
                        </div>
                        <div className="w3-container w3-padding w3-center">
                            <h4 style={{ lineHeight: 0 }}>Andy Smith</h4>
                            <p className="w3-text-grey">Co-Founder and CEO</p>
                        </div>
                        <div className="w3-center">
                            <i className="fa fa-facebook-official w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-twitter-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-linkedin-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-margin-top">
                    <div className="w3-card-4 card-color w3-round-xlarge w3-pop-up">
                        <div className="w3-center w3-margin " >
                            <div className="card-color w3-card-4 w3-round-xxlarge" style={{ paddingTop: "10px" }}>
                                <img src={image2} alt="image" className="w3-image w3-round-xxlarge" width="100%" />
                            </div>
                        </div>
                        <div className="w3-container w3-padding w3-center">
                            <h4 style={{ lineHeight: 0 }}>Vanessa Brown</h4>
                            <p className="w3-text-grey">Co-Founder and CTO</p>
                        </div>
                        <div className="w3-center">
                            <i className="fa fa-facebook-official w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-twitter-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-linkedin-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-margin-top">
                    <div className="w3-card-4 card-color w3-round-xlarge w3-pop-up">
                        <div className="w3-center w3-margin " >
                            <div className="card-color w3-card-4 w3-round-xxlarge" style={{ paddingTop: "10px" }}>
                                <img src={image3} alt="image" className="w3-image w3-round-xxlarge" width="100%" />
                            </div>
                        </div>
                        <div className="w3-container w3-padding w3-center">
                            <h4 style={{ lineHeight: 0 }}>Sophie Moore</h4>
                            <p className="w3-text-grey">Head of Community</p>
                        </div>
                        <div className="w3-center">
                            <i className="fa fa-facebook-official w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-twitter-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-linkedin-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-margin-top">
                    <div className="w3-card-4 card-color w3-round-xlarge w3-pop-up">
                        <div className="w3-center w3-margin " >
                            <div className="card-color w3-card-4 w3-round-xxlarge" style={{ paddingTop: "10px" }}>
                                <img src={image4} alt="image" className="w3-image w3-round-xxlarge" width="100%" />
                            </div>
                        </div>
                        <div className="w3-container w3-padding w3-center">
                            <h4 style={{ lineHeight: 0 }}>John Carter</h4>
                            <p className="w3-text-grey">Head of Infrastructure</p>
                        </div>
                        <div className="w3-center">
                            <i className="fa fa-facebook-official w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-twitter-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                            <i className="fa fa-linkedin-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders