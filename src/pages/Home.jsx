// import React from 'react'

import HowItWorks from "../components/HowItWorks"
import Index from "../components/Index"

function Home() {
    return (
        <div className="w3-container w3-content" style={{ maxWidth: "1200px" }}>
            <Index />
            <HowItWorks />
        </div>
    )
}

export default Home