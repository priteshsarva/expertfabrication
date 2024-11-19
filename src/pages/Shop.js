import React from 'react'
import product1 from '../images/product-1.png'
import product2 from '../images/product-2.png'
import product3 from '../images/product-3.png'
import cross from '../images/cross.svg'
import { Link } from 'react-router-dom'

const Shop = () => {
    return (
        <>
            <div class="untree_co-section product-section before-footer-section">
                <div class="container">
                    <div class="row">

                        {/*  Start Column 1 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product3} class="img-fluid product-thumbnail" />

                                <h3 class="product-title">Nordic Chair</h3>
                                <strong class="product-price">$50.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                            </Link>
                        </div>
                        {/*  End Column 1 */}

                        {/*  Start Column 2 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product1} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Nordic Chair</h3>
                                <strong class="product-price">$50.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 2 */}

                        {/*  Start Column 3 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product2} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Kruzo Aero Chair</h3>
                                <strong class="product-price">$78.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 3 */}

                        {/*  Start Column 4 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product3} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Ergonomic Chair</h3>
                                <strong class="product-price">$43.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 4 */}


                        {/*  Start Column 1 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product3} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Nordic Chair</h3>
                                <strong class="product-price">$50.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 1 */}

                        {/*  Start Column 2 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product1} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Nordic Chair</h3>
                                <strong class="product-price">$50.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 2 */}

                        {/*  Start Column 3 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product2} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Kruzo Aero Chair</h3>
                                <strong class="product-price">$78.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 3 */}

                        {/*  Start Column 4 */}
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <Link class="product-item" to="/SingleProduct">
                                <img src={product3} class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Ergonomic Chair</h3>
                                <strong class="product-price">$43.00</strong>

                                <span class="icon-cross">
                                    <img src={cross} class="img-fluid" />
                                </span>
                             </Link>
                        </div>
                        {/*  End Column 4 */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
