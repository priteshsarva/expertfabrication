import React from 'react'
import couch from '../images/couch.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                        <p className="mb-4">At Expert High Decoration, we design modern interiors with jhummars, luxury furniture, beds, and sofas, creating stylish yet affordable spaces.</p>
                        <p><Link to="/Shop" className="btn btn-secondary me-2">Shop Now</Link><a href="#exploreMore" className="btn btn-white-outline">Explore</a></p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="hero-img-wrap">
                        <img src={couch} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
