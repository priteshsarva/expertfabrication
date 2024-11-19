import React from 'react'
import Hero from '../components/Hero'
import grid1 from '../images/img-grid-1.jpg'
import grid2 from '../images/img-grid-2.jpg'
import grid3 from '../images/img-grid-3.jpg'
import WhyChoosUs from '../components/WhyChoosUs'
import CraftedWith from '../components/CraftedWith'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Hero />
            <CraftedWith />
            <WhyChoosUs />

            {/* Start We Help Section */}
            <div className="we-help-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1"><img src={grid1} alt="Untree.co" /></div>
                                <div className="grid grid-2"><img src={grid2} alt="Untree.co" /></div>
                                <div className="grid grid-3"><img src={grid3} alt="Untree.co" /></div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5">
                            <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
                            <p>At Expert High Decoration, we specialize in creating modern interiors that reflect your style. Our expert team delivers customized, functional designs with quality furniture, smart solutions, and attention to detail.</p>

                            <ul className="list-unstyled custom-list my-4">
                                <li><b>Tailored Designs:</b><br></br>Customized solutions for every space.</li>
                                <li><b>Premium Furniture:</b><br></br>High-quality, stylish pieces for modern living.
                                </li>
                                <li><b>Expert Installation:</b><br></br>Seamless setup with professional guidance.</li>
                                <li><b>Affordable Luxury:</b><br></br>Elegant designs that fit your budget.</li>
                            </ul>
                            <p><Link to="/Shop" className="btn">Explore</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End We Help Section */}
        </>
    )
}

export default Home
