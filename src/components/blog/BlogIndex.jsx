// import React from 'react'

function BlogIndex() {
    return (
        <div>
            <div className="" style={{ marginTop: "120px" }}>
                <div className="w3-row-padding">
                    <div className="w3-half">
                        <h2><strong>INVET Blog</strong></h2>
                    </div>
                    <div className="w3-half">
                        <div className="">
                            <div className="search-container">
                                <div className="w3-">
                                    <button className="card-color w3-border-0" type="submit"><i className="fa fa-search "></i></button>
                                </div>
                                <input
                                    className="w3-input w3-text-white w3-border-0 card-color w3-round-xlarge"
                                    type="search"
                                    name=""
                                    id=""
                                    placeholder="Searching for..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogIndex