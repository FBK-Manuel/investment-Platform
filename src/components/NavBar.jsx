// import React from 'react'

import { Button } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined, } from '@ant-design/icons';
// import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

function NavBar() {

    const logo = "/src/images/logo/invetLogo.png";

    const items = [
        {
            key: '1',
            label: (
                <Link to=''>Link 1</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to=''>Link 2</Link>
            ),

        },
        {
            key: '3',
            label: (
                <Link to=''>Link 3</Link>
            ),

        },
        {
            key: '4',
            label: (
                <Link to=''>Link 4</Link>
            )
        },
        {
            key: '5',
            label: 'sub menu',
            children: [
                {
                    key: '5-1',
                    label: (<Link to=''>Link 5</Link>)
                },
                {
                    key: '5-2',
                    label: (<Link to=''>Linkn 6</Link>)
                }
            ]
        },
    ];

    return (
        <div className="w3-content" style={{ maxWidth: "1200px" }}>
            <div className="">
                <div className="w3-bar w3-margin-top">
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
        </div>
    )
}

export default NavBar