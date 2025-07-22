import React from "react";

export default function About() {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 bg-body-teal">
			<div className="container">
				<div className="about-content d-flex flex-column align-items-center">
					<h2 className="text-white fw-bolder fa-2x mt-5 mb-0 text-center">
						ABOUT COMPONENT
					</h2>
					<div className="line-breaker position-relative my-2">
						<i className="fa fa-star text-white"></i>
						<div className="the-line translate-middle-y"></div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="item">
								<p className="text-white">
									Freelancer is a free bootstrap theme created
									by Route. The download includes the complete
									source files including HTML, CSS, and
									JavaScript as well as optional SASS
									stylesheets for easy customization.
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="item">
								<p className="text-white">
									Freelancer is a free bootstrap theme created
									by Route. The download includes the complete
									source files including HTML, CSS, and
									JavaScript as well as optional SASS
									stylesheets for easy customization.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
