// import React from 'react'

import Bloging from "../components/Home/Bloging"
import Cryptos from "../components/Home/Cryptos"
import HowItWorks from "../components/Home/HowItWorks"
import Index from "../components/Home/Index"
import Testimonial from "../components/Home/Testimonial"

function Home() {
    return (
        <div>
            <div className="w3-container w3-content" style={{ maxWidth: "1200px" }}>
                <Index />
                <HowItWorks />
                <Cryptos />
                <Testimonial />
                <Bloging />
            </div>
        </div>
    )
}

export default Home