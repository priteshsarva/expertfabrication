import React, { useEffect } from 'react'
import usersvg from '../images/user.svg'
import cart from '../images/cart.svg'
import logo from '../images/ExpertHighDecorationLogo.png'
import { NavLink, useLocation } from "react-router-dom";

const Navbars = () => {
	let location = useLocation();
	useEffect(() => {
		console.log(location.pathname);
	}, [location])

	return (
		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="Expert High Decorate logo" width={150} />
					{/* Expert High Decorate */}
					{/* <span>.</span> */}
				</a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className={`"nav-item active" ${location.pathname === "/" ? "active" : ""}`}><NavLink className="nav-link" to="/">Home</NavLink></li>
						<li className={`"nav-item active" ${location.pathname === "/Shop" ? "active" : ""}`}><NavLink className="nav-link" to="Shop">Shop</NavLink></li>
						<li className={`"nav-item active" ${location.pathname === "/AboutUs" ? "active" : ""}`}><NavLink className="nav-link" to="AboutUs">About</NavLink></li>
						{/* <li className={`"nav-item active" ${location.pathname === "/Service" ? "active" : ""}`}><NavLink className="nav-link" to="Service">Services</NavLink></li> */}
						{/* <li className={`"nav-item active" ${location.pathname === "/Blog" ? "active" : ""}`}><NavLink className="nav-link" to="Blog">Blog</NavLink></li> */}
						<li className={`"nav-item active" ${location.pathname === "/ContactUs" ? "active" : ""}`}><NavLink className="nav-link" to="ContactUs">Contact us</NavLink></li>
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="/"><img src={usersvg} /></a></li>
						<li><a className="nav-link" href="cart.html"><img src={cart} /></a></li>
					</ul>
				</div>
			</div>

		</nav>
	)
}

export default Navbars
