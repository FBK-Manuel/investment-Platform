// import React from 'react'

import SubscribeMail from "../SubscribeMail"
import RelatedPost from "./RelatedPost"

function Post() {
    const image1 = "/images/te.jpg"
    const image3 = "/images/testimony/avatar_hat.jpg"
    return (
        <div className="w3-content" style={{ marginTop: "100px", maxWidth: "1200px" }}>
            {/* <!-- Grid --> */}
            <div className="w3-row">
                {/* <!-- Blog entries --> */}
                <div className="w3-col l8 s12">
                    {/* <!-- Blog entry --> */}
                    <div className="w3-card w3-round-large w3-margin card-color">
                        <div>
                            <img src={image1} alt="image for blog" className="w3-image w3-round-large" width="100%" />
                        </div>
                        <div className="w3-container">
                            <div className="w3-cell w3-container">
                                <div>
                                    <p className="w3-text-grey"><i className="fa fa-calendar"></i> January 5th, 2023</p>
                                </div>
                            </div>
                            <div className="w3-cell w3-container">
                                <p className="w3-text-grey"><i className="fa fa-clock-o"></i> 4 min read</p>
                            </div>
                            <h4 className="w3-text-white w3-container w3-margin-bottom"><b>What is NFT (Non-Fungible Token) and how can i buy one</b></h4>
                            <div className="w3-container w3-margin-bottom">
                                <p className="w3-text-grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique labore sint voluptatibus amet perspiciatis repudiandae totam, voluptatum est facere, nobis, delectus maiores consequatur odio dolorem enim. Vel, autem? Repellendus, atque.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam ipsam sunt repellat dicta fuga! Iste expedita aperiam incidunt repellat at, perspiciatis voluptatum dignissimos deserunt quaerat temporibus, hic impedit aliquam?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat repellendus accusantium omnis eos? Expedita iure minus quis cumque magnam aliquam quidem voluptatem ratione ipsa? Nobis sunt deserunt minus esse.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe, reprehenderit at magni beatae quae, quo cupiditate obcaecati facilis eligendi mollitia nulla excepturi laudantium culpa doloribus recusandae rerum nesciunt. Cumque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END BLOG ENTRIES --> */}
                </div>

                {/* <!-- Introduction menu --> */}
                <div className="w3-col l4">
                    {/* <!-- Posts --> */}
                    <div className="w3-margin">
                        <div className="">
                            <div className="w3-card-4 card-color w3-round-xlarge w3-pop-up">
                                <div className="w3-center w3-margin " >
                                    <div className="card-color w3-card-4 w3-round-xxlarge" style={{ paddingTop: "10px" }}>
                                        <img src={image3} alt="image" className="w3-image w3-round-xxlarge" width="100%" />
                                    </div>
                                </div>
                                <div className="w3-container w3-padding w3-center">
                                    <h4 style={{ lineHeight: 0 }}>Sophie Moore</h4>
                                    <p className="w3-text-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo aperiam obcaecati tenetur architecto, velit repudiandae eum dolorum nam corporis quam ab, facere dolore atque delectus reprehenderit nihil, assumenda laboriosam.</p>
                                </div>
                                <div className="w3-center">
                                    <i className="fa fa-facebook-official w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                                    <i className="fa fa-twitter-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                                    <i className="fa fa-linkedin-square w3-xlarge w3-margin-right w3-margin-bottom w3-pop-up" style={{ color: "#1649ff" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END Introduction Menu --> */}
                </div>
            </div>
            <div className="w3-container">
                <SubscribeMail />
            </div>
            <div className="w3-container">
                <RelatedPost />
            </div>
        </div>
    )
}

export default Post