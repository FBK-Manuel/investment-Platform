// import { SettingOutlined } from "@ant-design/icons";
import { Typography } from "antd"
import { Collapse } from 'antd';
// import React from 'react'
function HowItWorks() {
    const { Title } = Typography
    const avatar = "/src/images/avatah.png";

    const text = "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."

    // const getExtra = () => {
    //     <SettingOutlined
    //         onClick={(event) => {
    //             // If you don't want click extra trigger collapse, you can prevent this:
    //             event.stopPropagation();
    //         }}
    //     />
    // }
    const items = [
        {
            key: '1',
            label: <span className="w3-text-white"><i className="fa fa-user w3-large w3-padding w3-badge color-blue"></i> <b>Create an account</b></span>,
            children: <p className="w3-text-grey">{text}</p>,

        },

        {
            key: '2',
            label: <span className="w3-text-white"><i className="fa fa-exchange w3-large w3-padding w3-badge color-blue"></i> <b>Transfer your funds</b></span>,
            children: <p className="w3-text-grey">{text}</p>,

        },
        {
            key: '3',
            label: <span className="w3-text-white"><i className="fa fa-dollar w3-large w3-padding w3-badge color-blue "></i> <b>Earn passive interest everyday</b></span>,
            children: <p className="w3-text-grey">{text}</p>,
        },
    ];
    return (
        <div className="w3-container">
            <div className="w3-center" style={{ marginTop: "250px", marginBottom: "70px" }}>
                <Title level={3} className="w3-text-white">
                    <b>How it works</b>
                </Title>
                <p className="w3-small w3-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ratione sit ut odit ex soluta dolores, <br /> nisi id pariatur saepe dolorum maxime. Ipsa sed fuga enim ad corporis molestiae possimus!</p>
            </div>
            <div className="w3-row-padding w3-margin-top">
                <div className="w3-half">
                    <div className="w3-center w3-pop-up w3-card card-color w3-round-xlarge ">
                        <div className="w3-padding-16 w3-margin">
                            <img src={avatar} alt="image" width={"70%"} height="70%" className="w3-image" />
                        </div>
                    </div>
                </div>
                <div className="w3-half">
                    <div style={{ marginTop: "50px" }}>
                        <Collapse
                            style={{ color: "white" }}
                            defaultActiveKey={['1']}
                            accordion
                            items={items}
                            size="large"
                            bordered={false}
                            expandIconPosition="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks