// import React from 'react'
import { notification } from "antd";
import { useState } from "react"

function SubscribeMail() {
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
        <div>
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

export default SubscribeMail