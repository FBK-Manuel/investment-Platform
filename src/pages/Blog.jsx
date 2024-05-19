// import React from 'react'

import BlogIndex from "../components/blog/BlogIndex"
import BlogView from "../components/blog/BlogView"

function Blog() {
    return (
        <div>
            <div className=" w3-content " style={{ maxWidth: "1200px" }}>
                <BlogIndex />
                <BlogView />
            </div>
        </div>
    )
}

export default Blog