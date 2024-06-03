// import React from 'react'

import { Typography } from "antd"
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

function FrequentlyAskQ() {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const question1 = [
    {
      key: '1',
      label: <span className="w3-text-white"><b>Are my crypto assets safe while investing?</b></span>,
      children: <p className="w3-text-grey">{text}</p>,

    },

    {
      key: '2',
      label: <span className="w3-text-white"><b>Is the APY interest fixed or does it change regularly?</b></span>,
      children: <p className="w3-text-grey">{text}</p>,

    },
    {
      key: '3',
      label: <span className="w3-text-white"><b>Can i monitor my investments on the app?</b></span>,
      children: <p className="w3-text-grey">{text}</p>,
    },
  ];

  const question2 = [
    {
      key: '1',
      label: <span className="w3-text-white"><b>How long does INVET has been running for?</b></span>,
      children: <p className="w3-text-grey">{text}</p>,

    },

    {
      key: '2',
      label: <span className="w3-text-white"><b>Are you looking to expand for more crypto tokens?</b></span>,
      children: <p className="w3-text-grey">{text}</p>,

    },
    {
      key: '3',
      label: <span className="w3-text-white"><b>Are there careers available on our platform?</b></span>,
      children: <p className="w3-text-grey">{text}</p>,
    },
  ];

  const { Title } = Typography

  return (
    <div>
      <div className="margin-top w3-container">
        <div data-aos="fade-up" className="w3-center">
          <Title level={1} className="w3-margin-bottom">
            <b className="w3-text-white">Frequently Ask Questions</b>
            <p className="w3-small w3-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta omnis accusantium sunt. Aspernatur beatae harum illum et impedit perferendis</p>
          </Title>
        </div>
        <div className="w3-row-padding">
          <div data-aos="fade-up" className="w3-half">
            <div className="w3-margin-top">
              <div style={{ marginTop: "50px" }}>
                <Collapse
                  style={{
                    color: "white",
                    backgroundColor: "#1D263B"
                  }}
                  items={question1}
                  size="large"
                  bordered={false}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} className="color-blue w3-round-xlarge w3-padding-small w3-large" />}
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="w3-half">
            <div className="w3-margin-top">
              <div style={{ marginTop: "50px" }}>
                <Collapse
                  style={{
                    color: "white",
                    backgroundColor: "#1D263B"
                  }}
                  items={question2}
                  size="large"
                  bordered={false}
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} className="color-blue w3-round-xlarge w3-padding-small w3-large" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAskQ