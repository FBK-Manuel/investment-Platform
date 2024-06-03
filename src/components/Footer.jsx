// import { Button, Input, Space } from "antd"
import { notification } from "antd";
import { useState } from "react"
import { Link } from "react-router-dom"


function Footer() {
    const logo = "/images/logo/invetLogo.png"
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (email) {
                // console.log("submited successfully", email)
                notification.success({
                    message: "Newsletter Subscription",
                    description: "Your have successfully subscribe to our newsletter"
                })
                setSuccess("")
            } else if (!email) {
                notification.error({
                    message: "Something went wrong!",
                    description: "It seems you left the field empty"
                })
                setError("This field is left blank!")
                setError("")
                // console.log("error")
            }
            setEmail("")


        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <div data-aos="fade-up" style={{ marginTop: "100px" }}>
                <hr />
            </div>
            <div className="w3-container w3-content" style={{ maxWidth: "1200px" }}>
                <div className="w3-margin-top w3-margin-bottom" >
                    <div className="w3-row-padding">
                        <div className="w3-quarter w3-container">
                            <div data-aos="fade-up" className="w3-margin-top">
                                <Link to='/'><img src={logo} alt='logo' className="" width="40%" height="40%" /></Link>
                                <p className="w3-text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dolor asperiores quas modi sint quaerat. Aliquid sapiente.</p>
                                <div data-aos="fade-up">
                                    <a href="#" target="_blank">
                                        <i className="fa fa-facebook-official w3-text-grey w3-margin-right w3-hover-text-white"></i>
                                    </a>
                                    <a href="http://" target="_blank" >
                                        <i className="fa fa-twitter-square w3-text-grey w3-margin-right w3-hover-text-white"></i>
                                    </a>
                                    <a href="http://" target="_blank" >
                                        <i className="fa fa-instagram w3-text-grey w3-margin-right w3-hover-text-white"></i>
                                    </a>
                                    <a href="http://" target="_blank" >
                                        <i className="fa fa-linkedin-square w3-text-grey w3-margin-right w3-hover-text-white"></i>
                                    </a>
                                    <a href="http://" target="_blank" >
                                        <i className="fa fa-youtube-play w3-text-grey w3-margin-right w3-hover-text-white"></i>
                                    </a>
                                    <a href="http://" target="_blank" >
                                        <i className="fa fa-whatsapp w3-text-grey w3-margin-right w3-hover-text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w3-quarter w3-container w3-margin-top">
                            <p className="w3-text-white w3-margin-top"><b>Menu</b></p>
                            <div className="w3-margin-top">
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/">Home</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/about">About</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/blog">Blog</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Integration</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Integration Single</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/pricing">Pricing</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Pricing Single</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/contact">Contact</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/signup">Sign Up</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="/signin">Sign In</Link></p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w3-quarter w3-container w3-margin-top">
                            <p className="w3-text-white w3-margin-top"><b>Utility Pages</b></p>
                            <div className="w3-margin-top">
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Start Here</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">StyleGuide</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Password Protected</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="*">404 Not Found</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Licenses</Link></p>
                                <p className="w3-text-grey w3-hover-text-white"><Link className="w3-decoration" to="#">Changelog</Link></p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="w3-quarter w3-container w3-margin-top">
                            <p className="w3-text-white w3-margin-top"><b>Subscribe to our newsletter</b></p>
                            <div className="w3-margin-top">
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <form data-aos="fade-up" action="" onSubmit={handleSubmit}>
                                    <input
                                        className="w3-input w3-border w3-large w3-round-large card-color w3-border-grey"
                                        placeholder="Enter your email..."
                                        type="email"
                                        name=""
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id=""
                                    />
                                    <button
                                        type="submit"
                                        disabled={email === "" ? true : false}
                                        className="w3-button color-blue w3-large w3-round-large w3-padding-large w3-margin-top"
                                    >
                                        Submit
                                    </button>
                                    <div className="w3-center">
                                        {
                                            error !== "" ? (
                                                <div className="w3-text-red">{error}</div>
                                            ) : (
                                                <div className="w3-text-green">{success}</div>
                                            )
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "150px" }}>
                    <hr />
                    <div className="w3-margin-top">
                        <div className="color-dark-blue w3-padding">
                            <div className="w3-center">
                                <p className="w3-text-grey ">Copyright <i className="fa fa-copyright"></i> INVET | All Rights Reserved | Designed and Powered by <Link className="w3-text-white w3-hover-text-blue" to="#">HackHarik Developers</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer