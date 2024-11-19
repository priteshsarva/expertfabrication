import React from 'react'
import person1 from '../images/person-1.jpg'
import post1 from '../images/post-1.jpg'
import post2 from '../images/post-2.jpg'
import post3 from '../images/post-3.jpg'
import envelopeoutline from '../images/envelope-outline.svg'
import sofa from '../images/sofa.png'
import logoForWhite from '../images/ExpertHighDecorationLogoForWhite.png'

import { tns } from "tiny-slider"
const Footer = () => {
	
	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');
		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
			slider.play();
		}
	};
	window.addEventListener('load',()=>{
		tinyslider();
	})


	return (
		<>
			{/* <!-- Start Testimonial Slider --> */}
			<div className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
							</div>

							<div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>"Expert High Decoration made my home look amazing! The modern sofa I ordered is stylish and comfortable. The team was incredibly helpful, ensuring a smooth delivery and installation. I’ll definitely return for future purchases."</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={person1} alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Priya Sharma</h3>
													<span className="position d-block mb-3"> </span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>"I’m beyond happy with the luxury foldable bed I bought! The quality is outstanding, and the setup was effortless thanks to the easy-to-follow guide. The customer service was exceptional. Highly recommend!"</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={person1} alt="Ananya Gupta" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Ananya Gupta</h3>
													<span className="position d-block mb-3"> </span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>"The furniture from Expert High Decoration is simply top-notch. The sleek design and comfort are exactly what I was looking for. Their customer support was quick to help with my queries. Very happy with the purchase!"</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={person1} alt="Ravi Kumar" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Ravi Kumar</h3>
													<span className="position d-block mb-3"> </span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
			{/* <!-- End Testimonial Slider --> */}

			{/* <!-- Start Blog Section --> */}
			<div className="blog-section">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-6">
							<h2 className="section-title">Recent Blog</h2>
						</div>
						<div className="col-md-6 text-start text-md-end">
							<a href="#" className="more">View All Posts</a>
						</div>
					</div>

					<div className="row">

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<a href="#" className="post-thumbnail">
									<img src={post1} alt="Image" className="img-fluid" />
								</a>
								<div className="post-content-entry">
									<h3><a href="#">First Time Home Owner Ideas</a></h3>
									<div className="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<a href="#" className="post-thumbnail"><img src={post2} alt="Image" className="img-fluid" /></a>
								<div className="post-content-entry">
									<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
									<div className="meta">
										<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<a href="#" className="post-thumbnail"><img src={post3} alt="Image" className="img-fluid" /></a>
								<div className="post-content-entry">
									<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
									<div className="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			{/* <!-- End Blog Section -->	 */}

			{/* <!-- Start Footer Section --> */}
			<footer className="footer-section">
				<div className="container relative">

					<div className="sofa-img">
						<img src={sofa} alt="Image" className="img-fluid" />
					</div>

					<div className="row">
						<div className="col-lg-8">
							<div className="subscription-form">
								<h3 className="d-flex align-items-center"><span className="me-1"><img src={envelopeoutline} alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

								<form action="#" className="row g-3">
									<div className="col-auto">
										<input type="text" className="form-control" placeholder="Enter your name" />
									</div>
									<div className="col-auto">
										<input type="email" className="form-control" placeholder="Enter your email" />
									</div>
									<div className="col-auto">
										<button className="btn btn-primary">
											<span className="fa fa-paper-plane"></span>
										</button>
									</div>
								</form>

							</div>
						</div>
					</div>

					<div className="row g-5 mb-5">
						<div className="col-lg-4">
							<div className="mb-4 footer-logo-wrap">
							<img src={logoForWhite} alt="Expert High Decorate logo"  className="footer-logo" width={250} />
								{/* <a href="#" className="footer-logo">Furni<span>.</span></a> */}
								
								</div>
							<p className="mb-4">We offers luxury, modern furniture like foldable beds and sofas, along with expert installation and fabrication services. We provide high-quality, stylish, and affordable solutions for your interior design needs.</p>

							<ul className="list-unstyled custom-social">
								<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
								<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
								<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
								<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
							</ul>
						</div>

						<div className="col-lg-8">
							<div className="row links-wrap">
								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a href="#">About us</a></li>
										<li><a href="#">Services</a></li>
										<li><a href="#">Blog</a></li>
										<li><a href="#">Contact us</a></li>
									</ul>
								</div>

								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a href="#">Support</a></li>
										<li><a href="#">Knowledge base</a></li>
										<li><a href="#">Live chat</a></li>
									</ul>
								</div>

								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a href="#">Jobs</a></li>
										<li><a href="#">Our team</a></li>
										<li><a href="#">Leadership</a></li>
										<li><a href="#">Privacy Policy</a></li>
									</ul>
								</div>

								<div className="col-6 col-sm-6 col-md-3">
									<ul className="list-unstyled">
										<li><a href="#">Nordic Chair</a></li>
										<li><a href="#">Kruzo Aero</a></li>
										<li><a href="#">Ergonomic Chair</a></li>
									</ul>
								</div>
							</div>
						</div>

					</div>

					<div className="border-top copyright">
						<div className="row pt-4">
							<div className="col-lg-6">
								<p className="mb-2 text-center text-lg-start">Copyright &copy;

									<script>document.write(new Date().getFullYear());</script>
									. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>
									{/* <!-- License information: https://untree.co/license/ --> */}
								</p>
							</div>

							<div className="col-lg-6 text-center text-lg-end">
								<ul className="list-unstyled d-inline-flex ms-auto">
									<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

						</div>
					</div>

				</div>
			</footer>
			{/* <!-- End Footer Section --> */}

			

		</>
		
	)
}

export default Footer
