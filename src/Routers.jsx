// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"

function Routers() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/pricing"
                    element={<Pricing />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />


                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </div>
    )
}

export default Routers