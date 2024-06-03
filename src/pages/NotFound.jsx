// import React from 'react'

import { DoubleLeftOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

function NotFound() {
    const img = "/public/images/404p.png"
    return (
        <div>
            <div data-aos="fade-up" className="w3-content w3-margin-top">
                <img src={img} alt="image" width="100%" height="100%" />
                <div className="w3-center">
                    <h1 className="w3-jumbo">
                        <b>
                            Page Not Found
                        </b>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt error doloribus reprehenderit dolores, quos repellendus <br /> earum soluta magni officiis commodi, necessitatibus cumque nulla ducimus odit pariatur molestiae. Iste, at.</p>
                    <Link to='/' className="w3-button w3-pop-up w3-xlarge color-blue w3-hover-white w3-round-xxlarge"> <DoubleLeftOutlined />Take me back home</Link>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default NotFound