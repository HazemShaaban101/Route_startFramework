import React from "react";
import logoURL from "../../assets/imgi_1_avataaars.svg";

export default function Home() {
	return (
		<div
			id="Home"
			className="vh-100 bg-body-teal d-flex justify-content-center align-items-center">
			<div className="container home-content d-flex justify-align-content-center align-items-center flex-column mt-5">
				<img src={logoURL} alt="Logo" />
				<h2 className="text-center fw-bolder mt-3 text-white fa-2x">
					START FRAMEWORK
				</h2>
				<div className="line-breaker position-relative my-2">
					<i className="fa fa-star text-white"></i>
					<div className="the-line translate-middle-y"></div>
				</div>
				<p className="text-white">
					Graphic Artist - Web Designer - Illustrator
				</p>
			</div>
		</div>
	);
}
