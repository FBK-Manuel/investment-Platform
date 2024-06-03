// import React from 'react'
import { notification } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [pass1, setPass1] = useState('')



    const handleChanges = (e, type) => {
        switch (type) {
            case 'email':
                setEmail(e.target.value)

                break;
            case 'password':
                setPass1(e.target.value)

                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (!email && !pass1) {
                notification.error({
                    message: 'both fields are ampty',
                    description: "Seems you left the fields empty"
                })
                return false;
            }
            if (!email) {
                notification.error({
                    message: 'Empty Input Field',
                    description: "Seems you left the field empty"
                })
                return false;
            }
            if (!pass1) {
                notification.error({
                    message: 'Empty Input Field',
                    description: "Seems you left the field empty"
                })
                return false;
            }

            if (email && pass1) {
                notification.success({
                    message: 'Registered Successfully',
                    description: "Check your email address for email confirmation."
                })
                console.log("all form is submited")
                setEmail("")
                setPass1("")

            }

        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div>
            <div className="w3-content w3-container" style={{ maxWidth: "800px" }}>
                <div className="w3-center" style={{ marginTop: "100px" }}>
                    <div data-aos="fade-up" className="w3-card-4 card-color w3-padding-32 w3-round-xxlarge">
                        <div className="w3-container w3-center">
                            <div style={{ marginBottom: "40px" }}>
                                <b className="w3-xlarge">Login</b>
                            </div>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="w3-container w3-margin-top">
                                    <label htmlFor="" className="w3-text-white w3-left">Email Address:</label>
                                    <input
                                        type="email"
                                        placeholder="janedoe@gmail.com"
                                        value={email}
                                        onChange={(e) => handleChanges(e, 'email')}
                                        className="w3-input w3-round-xlarge w3-border w3-border-grey w3-text-white card-color" />
                                </div>

                                <div className="w3-container w3-margin-top">
                                    <label htmlFor="" className="w3-text-white w3-left">Password:</label>
                                    <input
                                        type="password"
                                        placeholder="********"
                                        value={pass1}
                                        onChange={(e) => handleChanges(e, 'password')}
                                        className="w3-input w3-round-xlarge w3-border w3-border-grey w3-text-white card-color" />
                                </div>
                                <div className="w3-container w3-margin-top w3-left">
                                    <button type="submit" className="w3-button w3-round-large w3-xlarge w3-hover-white color-blue w3-border-0">Submit</button>
                                </div>
                            </form>
                            <div className="w3-container">
                                <p className="w3-text-grey">Dont have an account? <Link to='/signup' className="w3-decoration w3-text-blue w3-hover-text-white">Sign up</Link> instead.</p>
                                <p className="w3-text-grey">Forgot your password? <Link to='/signup/verified' className="w3-decoration w3-text-blue w3-hover-text-white">Reset now</Link></p>
                                <p className="w3-text-grey">Subscribe to our mailing <Link to='/' className="w3-decoration w3-text-blue w3-hover-text-white">newsletter</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login