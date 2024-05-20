// import React from 'react'

import { RightOutlined } from "@ant-design/icons"
import { Button, notification } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

function BlogView() {

    const image1 = "/src/images/te.jpg"
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (email) {
                notification.success({
                    message: "Successfully Submiited",
                    description: "Your email has been submitted successfully"
                })
                // console.log("success");
            } else {
                notification.error({
                    message: "Failed Request",
                    description: "Something went wrong, could be the field is empty"
                })
                // console.log("cant explain this")
            }
        } catch (error) {
            console.log(error)
        }
        setEmail("")
    }

    return (
        <div >
            {/* <!-- Grid --> */}
            <div className="w3-row">
                {/* <!-- Blog entries --> */}
                <div className="w3-col l8 s12">
                    {/* <!-- Blog entry --> */}
                    <div className="w3-card w3-round-large w3-margin card-color">
                        <div>
                            <img src={image1} alt="image for blog" className="w3-image w3-round-large" width="100%" />
                        </div>
                        <div className="w3-container">
                            <div className="w3-cell w3-container">
                                <div>
                                    <p className="w3-text-grey"><i className="fa fa-calendar"></i> January 5th, 2023</p>
                                </div>
                            </div>
                            <div className="w3-cell w3-container">
                                <p className="w3-text-grey"><i className="fa fa-clock-o"></i> 4 min read</p>
                            </div>
                            <h4 className="w3-text-white w3-container w3-margin-bottom"><b>What is NFT (Non-Fungible Token) and how can i buy one</b></h4>

                        </div>
                    </div>
                    {/* <!-- END BLOG ENTRIES --> */}
                </div>

                {/* <!-- Introduction menu --> */}
                <div className="w3-col l4">
                    {/* <!-- Posts --> */}
                    <div className="w3-margin">
                        <ul className="" style={{ textDecoration: "none" }}>
                            <li className="w3-padding-16">
                                <img src={image1} alt="Image" className="w3-left w3-margin-right w3-round-large" width="100px" />
                                <span className="w3-large"><b>6 great crypto wallets you should try to keep your crypto assets secure</b></span><br />

                            </li>
                            <li className="w3-padding-16">
                                <img src={image1} alt="Image" className="w3-left w3-margin-right w3-round-large" width="100px" />
                                <span className="w3-large"><b>The new INVET crypto debit card is live: Here is how to claim yours now!</b></span><br />
                                {/* <span>Praes tinci sed</span> */}
                            </li>
                            <li className="w3-padding-16">
                                <img src={image1} alt="Image" className="w3-left w3-margin-right w3-round-large" width="100px" />
                                <span className="w3-large"><b>Is crypto secure? What factors to consider if you will start investing in crypto</b></span><br />
                                {/* <span>Ultricies congue</span> */}
                            </li>
                            <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                                <img src={image1} alt="Image" className="w3-left w3-margin-right w3-round-large" width="100px" />
                                <span className="w3-large"><b>5 new interesting ethereum token you should pay attention to in 2022</b></span><br />
                                {/* <span>Lorem ipsum dipsum</span> */}
                            </li>
                        </ul>
                    </div>
                    {/* <!-- END Introduction Menu --> */}
                </div>

                {/* <!-- END GRID --> */}
            </div>
            <div className="margin-top">
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
                                <Link className="w3-decoration w3-hover-text-blue" to="#">Read More <RightOutlined /></Link>
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
                                <Link className="w3-decoration w3-hover-text-blue" to="#">Read More <RightOutlined /></Link>
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
                                <Link className="w3-decoration w3-hover-text-blue" to="#">Read More <RightOutlined /></Link>
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
                                <Link className="w3-decoration w3-hover-text-blue" to="#">Read More <RightOutlined /></Link>
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
                                <Link className="w3-decoration w3-hover-text-blue" to="#">Read More <RightOutlined /></Link>
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
                                <Link className="w3-decoration w3-hover-text-blue" to="#">Read More <RightOutlined /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w3-center w3-container w3-margin-top w3-padding-large">
                <Button size="large" className="color-blue w3-border-0" style={{ width: "200px" }} >Next <RightOutlined /></Button>
            </div>

            <div className=" w3-round-xlarge color-blue" style={{ marginTop: "100px" }}>
                <div className="w3-row-padding">
                    <div className="w3-half w3-margin-top w3-container w3-padding">
                        <h3 className=""><b>Subscribe to our email newsletter today!</b></h3>
                    </div>
                    <div className="w3-half w3-container w3-padding-16">
                        {/* <div className="search-container color-blue w3-margin-top "> */}
                        <form className="search-container w3-margin-top w3-margin-bottom color-blue" onSubmit={handleSubmit} action="">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                className="w3-input w3-border-0 w3-padding w3-round-large color-blue"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address..."
                            />
                            <button
                                type="submit"
                                className="w3-button w3-round w3-hover-white w3-border-0"
                            >
                                <i className="fa fa-send"></i>
                            </button>
                        </form>
                        {/* </div>/ */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogView