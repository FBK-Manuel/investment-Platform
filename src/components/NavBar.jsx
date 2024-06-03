// import React from 'react'

import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { DownOutlined, } from '@ant-design/icons';
// import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

function NavBar() {

    const logo = "/images/logo/invetLogo.png";
    const location = useLocation();
    const [active, setActive] = useState(true);
    const [inActive, setInActive] = useState(true)
    // const [isToggleHidden, setIsToggleHidden] = useState(true)
    // const navigate = useNavigate();
    const open = () => {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
        setActive(false);
        setInActive(true);

    }



    const close = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
        setActive(true);
        setInActive(false);
    }


    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/pricing' || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/blog' || location.pathname === '/signup') {
            window.scrollTo(0, 0); // Scroll to the top
        }

    }, [location])

    const items = [
        {
            key: '1',

            label: (
                <div onClick={close}>
                    <Link to=''>Link to progress 1</Link>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={close}>
                    <Link to=''>Link to progress 2</Link>
                </div>
            ),

        },
        {
            key: '3',
            label: (
                <div onClick={close}>
                    <Link to=''>Link to progress 3</Link>
                </div>
            ),

        },
        {
            key: '4',
            label: (
                <div onClick={close}>
                    <Link to='/blog'>Blog</Link>
                </div>
            )
        },
        {
            key: '5',
            label: 'sub menu',
            children: [
                {
                    key: '5-1',
                    label: (
                        <div onClick={close}>
                            <Link to=''>Link to progress 5</Link>
                        </div>
                    )
                },
                {
                    key: '5-2',
                    label: (
                        <div onClick={close}>
                            <Link to=''>Link to progress 6</Link>
                        </div>
                    )
                }
            ]
        },
    ];




    // useEffect(() => {
    //     // Check the pathname of the new location and decide whether to hide the sidebar
    //     if (location.pathname === '/contact' || location.pathname === '/cart') {
    //         // Hide the sidebar
    //         // navigate('/')
    //         console.log('Hide sidebar');
    //     }
    // }, [location]);


    return (
        <div className="w3-content" style={{ maxWidth: "1200px" }}>
            {/* large screen  */}
            <div className="w3-hide-small w3-hide-medium">
                <div className="w3-bar w3-margin-top" >
                    <Link to='/'><img src={logo} alt='logo' className="w3-bar-item w3-left" width={50} height={50} /></Link>
                    <div className="">
                        <Button style={{ backgroundColor: "#1649FF", color: "white", border: "none" }} className="w3-right w3-mobile"><Link to='/signup'>Get Started</Link></Button>
                        <Link to='/contact' className="w3-bar-item w3-decoration w3-hover-text-blue w3-mobile w3-right">Contact</Link>
                        <Link to='/cart' className="w3-bar-item w3-decoration w3-mobile w3-hover-text-blue w3-right">Cart (0)</Link>
                        <Dropdown menu={{ items }} className="w3-bar-item w3-mobile w3-hover-text-blue w3-right">
                            <Link>
                                <Space >
                                    Features
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                        <Link to='/pricing' className="w3-bar-item w3-decoration w3-hover-text-blue w3-mobile w3-right">Pricing</Link>
                        <Link to='/about' className="w3-bar-item w3-decoration w3-hover-text-blue w3-mobile w3-right">About</Link>
                        <Link to='/' className="w3-bar-item w3-decoration w3-hover-text-blue w3-mobile w3-right">Home</Link>
                    </div>

                </div>
            </div>

            {/* for the small screen responsiveness */}
            <div className="w3-hide-large">
                <div className="card-color w3-top">
                    <div className="w3-sidebar w3-round w3-card-4 w3-bar-block w3-animate-left " style={{ display: 'none', zIndex: 5, backgroundColor: "#1D263B" }} id="mySidebar">
                        {inActive && (
                            <div className="">
                                <button className=" w3-right w3-btn w3-round-xxlarge w3-xxlarge" onClick={close}> &times;</button>
                            </div>
                        )}

                        <div className="w3-container ">
                            <Link onClick={close} to='/' className="w3-bar-item w3-center w3-decoration w3-hover-text-blue ">Home</Link>
                            <Link onClick={close} to='/about' className="w3-bar-item w3-center w3-decoration w3-hover-text-blue ">About</Link>
                            <Link onClick={close} to='/pricing' className="w3-bar-item w3-center w3-decoration w3-hover-text-blue">Pricing</Link>
                            <Dropdown menu={{ items }} className="w3-bar-item w3-center w3-hover-text-blue">
                                <Link>
                                    <Space>
                                        Features
                                        <DownOutlined />
                                    </Space>
                                </Link>
                            </Dropdown>
                            <Link onClick={close} to='/cart' className="w3-bar-item w3-center w3-decoration w3-hover-text-blue">Cart (0)</Link>
                            <Link onClick={close} to='/contact' className="w3-bar-item w3-center w3-decoration w3-hover-text-blue ">Contact</Link>
                            <Button onClick={close} style={{ backgroundColor: "#1649FF", color: "white", border: "none" }} className="w3-center w3-block"><Link to='/signup'>Get Started</Link></Button>


                        </div>
                    </div>
                    {/* <!-- Page Content --> */}
                    <div className="w3-overlay w3-animate-opacity" onClick={close} style={{ cursor: "pointer" }} id="myOverlay"></div>

                    <div className="w3-bar">
                        <div className="w3-margin">
                            <img
                                src="/images/logo/invetLogo.png"
                                className="w3-bar-item"
                                alt="logo"
                                width="50px"
                                height="50px" />
                        </div>
                        <div className="w3-right w3-container w3-margin-bottom">
                            {active && (
                                <button
                                    className="w3-btn w3-bar-item w3-large w3-border w3-border-white w3-round-xxlarge"
                                    onClick={open}
                                >
                                    &#9776;
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar