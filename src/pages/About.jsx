// import React from 'react'

import AboutIndex from "../components/About/AboutIndex"
import Company from "../components/About/Company"
import CompanyValues from "../components/About/CompanyValues"
import Founders from "../components/About/Founders"
import OurPartners from "../components/About/OurPartners"



function About() {



    return (
        <div>
            <div className="w3-container w3-content" style={{ maxWidth: "1200px" }}>
                <div >
                    <AboutIndex />
                </div>
                <div data-aos="fade-up">
                    <CompanyValues />
                </div>
                <div data-aos="fade-up">

                    <Company />
                    <Founders />
                </div>
                <div data-aos="fade-up">
                    <OurPartners />
                </div>
            </div>

        </div>
    )
}

export default About