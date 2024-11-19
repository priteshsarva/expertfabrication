import React from 'react'
import product1 from '../images/product-1.png'
import product2 from '../images/product-2.png'
import product3 from '../images/product-3.png'
import cross from '../images/cross.svg'
import { Link } from 'react-router-dom'

const CraftedWith = () => {
    return (
        <>
            {/* Start Product Section */}
            <div className="product-section" id='exploreMore'>
                <div className="container">
                    <div className="row">

                        {/* Start Column 1 */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                            <p className="mb-4">Crafted with excellent materials, our products combine durability and elegance. From luxury furniture to foldable beds and sofas, we ensure premium quality and lasting comfort.</p>
                            <p><Link to="/Shop" className="btn">Explore</Link></p>
                        </div>
                        {/* End Column 1 */}

                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src={product1} className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 2 */}

                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src={product2} className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Kruzo Aero Chair</h3>
                                <strong className="product-price">$78.00</strong>

                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}

                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src={product3} className="img-fluid product-thumbnail" />
                                <h3 className="product-title">Ergonomic Chair</h3>
                                <strong className="product-price">$43.00</strong>

                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}

                    </div>
                </div>
            </div>
            {/* End Product Section */}
        </>
    )
}

export default CraftedWith
