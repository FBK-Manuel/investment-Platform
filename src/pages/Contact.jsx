// import React from 'react'

import { RightOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import FrequentlyAskQ from "../components/FrequentlyAskQ"
import { useState } from "react"
import { notification } from "antd";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleChanges = (e, type) => {
        switch (type) {
            case 'name':
                setName(e.target.value);

                break;
            case 'email':
                setEmail(e.target.value);

                break;
            case 'phone':
                setPhone(e.target.value);

                break;
            case 'subject':
                setSubject(e.target.value);

                break;
            case 'message':
                setMessage(e.target.value);

                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (name && email && subject && phone && message) {

                notification.success({
                    message: "Successfully submitted",
                    description: name + ", Your form was submitted successfully"
                })
                setName("")
                setEmail("")
                setPhone("")
                setSubject("")
                setMessage("")
            } else {
                notification.error({
                    message: "Invalid Inputs",
                    description: "It seems something went wrong"
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w3-content w3-container" style={{ maxWidth: "1200px" }}>
            <div style={{ marginTop: "100px" }}>
                <div className="w3-row-padding">
                    <div data-aos="fade-up" className="w3-half">
                        <h2><b>Contact Us</b></h2>
                        <p className="w3-text-grey w3-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium modi facilis perspiciatis id nulla repellat, ullam totam iusto tenetur iste reiciendis cupiditate consequatur, nihil possimus minus maxime? Nihil, qui.</p>
                        <div className="">
                            <i className="fa fa-github w3-xlarge color-blue w3-round-xxlarge w3-padding-small"></i> <span> Contribute GitHube</span><br />
                            <i className="fa fa-pinterest w3-xlarge color-blue w3-round-xxlarge w3-padding-small w3-margin-top"></i> <span>Join our community</span>
                        </div>
                        <div className="w3-margin-top w3-margin-bottom" style={{ paddingTop: "20px" }}>
                            <p className="">Follow Us</p>
                            <i className="w3-margin-right fa fa-facebook w3-padding-small  card-color w3-round w3-text-white"></i>
                            <i className="w3-margin-right fa fa-instagram w3-padding-small card-color w3-round w3-text-white"></i>
                            <i className="w3-margin-right fa fa-linkedin w3-padding-small  card-color w3-round w3-text-white"></i>
                            <i className="w3-margin-right fa fa-whatsapp w3-padding-small  card-color w3-round w3-text-white"></i>
                            <i className="w3-margin-right fa fa-twitter w3-padding-small  card-color w3-round w3-text-white"></i>
                            <i className="w3-margin-right fa fa-youtube-play w3-padding-small card-color w3-round w3-text-white"></i>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="w3-half">
                        <div className="">
                            <div className="card-color w3-round-xlarge" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                                <form action="" onSubmit={handleSubmit}>

                                    <div className="w3-half w3-container w3-margin-top" >
                                        <label htmlFor="" >Name</label>
                                        <input type="text" value={name} onChange={(e) => handleChanges(e, 'name')} placeholder="Jimmy Owen" className="w3-input w3-text-white w3-border w3-border-grey w3-round-large " style={{ backgroundColor: "#343c4f" }} />
                                    </div>
                                    <div className="w3-half w3-container w3-margin-top">
                                        <label htmlFor="">Email</label>
                                        <input type="email" value={email} onChange={(e) => handleChanges(e, 'email')} placeholder="example@yourgmail.com" className="w3-input w3-text-white w3-border w3-border-grey w3-round-large " style={{ backgroundColor: "#343c4f" }} />
                                    </div>

                                    {/* another form */}

                                    <div className="w3-half w3-container w3-margin-top">
                                        <label htmlFor="">Phone</label>
                                        <input type="text" value={phone} onChange={(e) => handleChanges(e, 'phone')} placeholder="001-232-3234-434" className="w3-input w3-text-white w3-border w3-border-grey w3-round-large " style={{ backgroundColor: "#343c4f" }} />
                                    </div>
                                    <div className="w3-half w3-container w3-margin-top">
                                        <label htmlFor="">Subject</label>
                                        <input type="text" value={subject} onChange={(e) => handleChanges(e, 'subject')} placeholder="Ex.Career" className="w3-input w3-text-white w3-border w3-border-grey w3-round-large " style={{ backgroundColor: "#343c4f" }} />
                                    </div>

                                    <div className="w3-container" >
                                        {/* <label htmlFor="" style={{ marginTop: "20px" }}>Message</label> */}
                                        <textarea name="message" id="" value={message} onChange={(e) => handleChanges(e, 'message')} placeholder="Message..." className="w3-input w3-text-white w3-border w3-border-grey w3-round-large " style={{ backgroundColor: "#343c4f", marginTop: "30px" }}></textarea>
                                    </div>
                                    <div className="w3-container w3-margin-top w3-margin-bottom">
                                        <button className="w3-button color-blue w3-hover-white w3-large w3-round-large w3-border-0" type="submit">Send Message</button>
                                    </div>
                                    {/* <div className="w3-center">
                                        {
                                            error !== "" ?
                                                (
                                                    <div className="w3-text-red">
                                                        {error}
                                                    </div>
                                                ) : (
                                                    <div className="w3-text-green">
                                                        {success}
                                                    </div>
                                                )
                                        }
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-top">
                    <div data-aos="fade-up" className="w3-container w3-center">
                        <h2>
                            <b>
                                Prefer to reach out directly?
                            </b>
                        </h2>
                        <p className="container w3-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A fugiat magni ipsum consequatur commodi veritatis mollitia atque! Perferendis,</p>
                    </div>
                    <div className="w3-container">
                        <div className="w3-row-padding w3-margin-top">
                            <div data-aos="fade-up" className="w3-third">
                                <div className=" w3-container w3-pop-up w3-padding w3-margin-bottom w3-card card-color w3-round-xlarge">
                                    <div className="w3-center ">
                                        <i className="fa fa-suitcase w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                                    </div>
                                    <div className="w3-text-white w3-center w3-margin-bottom">
                                        <b>Careers</b>
                                    </div>
                                    <div className="w3-text-grey w3-center w3-margin-bottom">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                                    </div>
                                    <div className="w3-center">
                                        <Link className="w3-margin-top w3-decoration" to=''>Join our team<RightOutlined /></Link>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="w3-third">
                                <div className=" w3-container w3-padding w3-pop-up w3-margin-bottom w3-card card-color w3-round-xlarge">
                                    <div className="w3-center ">
                                        <i className="fa fa-envelope-open-o w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                                    </div>
                                    <div className="w3-text-white w3-center w3-margin-bottom">
                                        <b>help & Support</b>
                                    </div>
                                    <div className="w3-text-grey w3-center w3-margin-bottom">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                                    </div>
                                    <div className="w3-center">
                                        <Link className="w3-margin-top w3-decoration" to=''>Contact support<RightOutlined /></Link>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="w3-third">
                                <div className=" w3-container w3-padding w3-pop-up w3-margin-bottom w3-card card-color w3-round-xlarge">
                                    <div className="w3-center ">
                                        <i className="fa fa-fax w3-xlarge w3-padding w3-circle w3-margin color-blue"></i>
                                    </div>
                                    <div className="w3-text-white w3-center w3-margin-bottom">
                                        <b>Press</b>
                                    </div>
                                    <div className="w3-text-grey w3-center w3-margin-bottom">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates ex ea, deleniti nihil quasi
                                    </div>
                                    <div className="w3-center">
                                        <Link className="w3-margin-top w3-decoration" to=''>Contact press team<RightOutlined /></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <FrequentlyAskQ />
                </div>
            </div>
        </div>
    )
}

export default Contact