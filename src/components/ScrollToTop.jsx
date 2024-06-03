// import React from 'react'

import { useEffect, useState } from "react"

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const scrollTop = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollTop);
    }, []);
    return (
        <div>
            {
                visible && (
                    <button className="w3-button w3-round-xxlarge w3-hover-white w3-pop-up color-blue w3-border w3-border-grey myBtn" id="scroll" title="scroll" onClick={scrollToTop}>
                        <i className="fa fa-chevron-circle-up w3-large"></i>
                    </button>
                )
            }
        </div>
    )
}

export default ScrollToTop