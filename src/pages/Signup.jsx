import { notification } from "antd"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Signup() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const [checked, setChecked] = useState(false)


    const handleChanges = (e, type) => {
        switch (type) {
            case 'firstName':
                setFirstName(e.target.value)

                break;
            case 'lastName':
                setLastName(e.target.value)

                break;
            case 'email':
                setEmail(e.target.value)

                break;
            case 'password':
                setPass1(e.target.value)

                break;
            case 'confirmedPassword':
                setPass2(e.target.value)

                break;
            case 'checked':
                setChecked(e.target.checked)

                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!firstName && !lastName && !email && !pass1 && !pass2) {
                notification.error({
                    message: 'All the fields are ampty',
                    description: "Seems you left the fields empty"
                })
                return false;
            }
            if (!firstName) {
                notification.error({
                    message: 'Empty Input Field',
                    description: "Seems you left the field empty"
                })
                return false;
            }
            if (!lastName) {
                notification.error({
                    message: 'Empty Input Field',
                    description: "Seems you left the field empty"
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
            } else if (!pass2) {
                notification.error({
                    message: 'Empty Input Field',
                    description: "Seems you left the field empty"
                })
                return false;
            } else if (pass1.length <= 7) {
                notification.error({
                    message: 'Invalid password length',
                    description: "the password must be more than 7 characters"
                })
                return false;
            } else if (pass1 !== pass2) {
                notification.error({
                    message: 'Error Password',
                    description: "Both password do not match"
                })
                return false;
            }

            if (!checked) {
                notification.error({
                    message: "You haven't agree to our terms and conditions",
                    description: "It seems you didn't check the box, please check the box and try again"
                })
                return false;
            }

            const formData = {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: pass1,
            }

            const url = "http://localhost/invet/api/signup.php"

            const form = await axios.post(url, formData);

            if (form) {
                console.log(form)
            }


            // if (firstName && lastName && email && pass1) {
            //     notification.success({
            //         message: 'Registered Successfully',
            //         description: "Check your email address for email confirmation."
            //     })
            //     console.log("all form is submited")
            //     setFirstName("")
            //     setLastName("")
            //     setEmail("")
            //     setPass1("")
            //     setPass2("")
            // }

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
                                <b className="w3-xlarge">Sign Up</b>
                            </div>
                            <form action="" onSubmit={handleSubmit}>

                                <div className="w3-row-padding">
                                    <div className="w3-half">
                                        <label htmlFor="" className="w3-text-white w3-left">First Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Casanddra"

                                            value={firstName}
                                            onChange={(e) => handleChanges(e, 'firstName')}
                                            className="w3-input w3-round-xlarge w3-border w3-border-grey w3-text- w3-left card-color" />


                                    </div>

                                    <div className="w3-half">
                                        <label htmlFor="" className="w3-text-white w3-left">Last Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Brown"
                                            value={lastName}
                                            onChange={(e) => handleChanges(e, 'lastName')}
                                            className="w3-input w3-round-xlarge w3-border w3-border-grey w3-text-white card-color" />

                                    </div>
                                </div>
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
                                <div className="w3-container w3-margin-top">
                                    <label htmlFor="" className="w3-text-white w3-left">Confirmed Password:</label>
                                    <input
                                        type="password"
                                        placeholder="********"
                                        value={pass2}
                                        onChange={(e) => handleChanges(e, 'confirmedPassword')}
                                        className="w3-input w3-round-xlarge w3-border w3-border-grey w3-text-white card-color" />

                                    <div className="w3-left w3-margin-top">
                                        <label className=" ">Creating account with us means you accept our <Link to='' className="w3-text-blue w3-medium w3-decoration">Privacy Policy</Link> and <Link to='' className="w3-text-blue w3-medium w3-decoration">Terms & Conditions</Link></label>
                                        <input
                                            className="w3-check"
                                            value={checked}
                                            onChange={(e) => handleChanges(e, 'checked')}
                                            type="checkbox" />

                                    </div>
                                </div>
                                <div className="w3-container w3-margin-top w3-left">
                                    <button type="submit" className="w3-button w3-round-large w3-xlarge w3-hover-white color-blue w3-border-0">Submit</button>
                                </div>
                            </form>
                            <div className="w3-container">
                                <p className="w3-text-grey">Already have an account? <Link to='/login' className="w3-decoration w3-text-blue w3-hover-text-white">Login</Link> instead.</p>
                                <p className="w3-text-grey">Subscribe to our mailing <Link to='/' className="w3-decoration w3-text-blue w3-hover-text-white">newsletter</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup