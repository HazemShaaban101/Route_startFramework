import React from "react";

export default function Footer() {
	return (
		<>
			<div className="bg-body-navy text-white overflow-hidden">
				<div className="container">
					<div className="row py-5 gy-5">
						<div className="col-sm-4">
							<div className="item">
								<h3 className="text-center">LOCATION</h3>
								<p className="text-center">
									2215 John Daniel Drive <br />
									Clark, MO 65243
								</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="item">
								<h3 className="text-center">AROUND THE WEB</h3>
								<div className="d-flex flex-wrap justify-content-center gap-2">
									<div className="icon-div rounded-circle d-flex justify-content-center align-items-center border border-2 border-white p-2">
										<i className="fa-brands fa-facebook-f"></i>
									</div>
									<div className="icon-div rounded-circle d-flex justify-content-center align-items-center border border-2 border-white p-2">
										<i className="fa-brands fa-twitter"></i>
									</div>
									<div className="icon-div rounded-circle d-flex justify-content-center align-items-center border border-2 border-white p-2">
										<i className="fa-brands fa-linkedin-in"></i>
									</div>
									<div className="icon-div rounded-circle d-flex justify-content-center align-items-center border border-2 border-white p-2">
										<i className="fa-solid fa-globe"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="item">
								<h3 className="text-center">
									ABOUT FREELANCER
								</h3>
								<p className="text-center">
									Freelance is a free to use, licensed
									Bootstrap theme created by Route
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-body-darker-navy d-flex justify-content-center align-items-center">
					<p className="mb-0 py-3">Copyright © Your Website 2021</p>
				</div>
			</div>
		</>
	);
}
