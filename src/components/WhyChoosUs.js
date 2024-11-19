import React from 'react'
import truck from '../images/truck.svg'
import bag from '../images/bag.svg'
import support from '../images/support.svg'
import return1 from '../images/return.svg'
import whyChooseUs from '../images/why-choose-us-img.jpg'

const WhyChoosUs = () => {
    return (
        <>
            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p>We offer unique, high-quality furniture with fast, free shipping, easy shopping, 24/7 support, and hassle-free returns, making your experience seamless and exceptional.</p>

                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src={truck} alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>Enjoy quick delivery at no extra cost, ensuring your order arrives on time, every time.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src={bag} alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p> A seamless online shopping experience with user-friendly navigation and secure checkout.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src={support} alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>Our dedicated customer support team is available around the clock to assist with any inquiries or issues.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src={return1} alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>Return products easily with no complications, ensuring peace of mind with every purchase.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src={whyChooseUs} alt="Image" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}

        </ >
    )
}

export default WhyChoosUs
