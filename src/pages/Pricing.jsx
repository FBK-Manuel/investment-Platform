// import React from 'react'

import FrequentlyAskQ from "../components/FrequentlyAskQ"
import PriceCard from "../components/PriceCard"

function Pricing() {
    return (
        <div className="w3-content w3-container" style={{ maxWidth: "1200px", marginTop: "150px" }}>
            <PriceCard />
            <FrequentlyAskQ />
        </div>
    )
}

export default Pricing