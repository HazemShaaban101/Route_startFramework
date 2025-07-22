import React from "react";

export default function Contact() {
	return (
		<div className="d-flex justify-content-center align-items-center mt-5">
			<div className="container portfolio-content d-flex justify-align-content-center align-items-center flex-column mt-5">
				<h2 className="text-center fw-bolder mt-5 text-Dark fa-3x">
					Contact section
				</h2>
				<div className="line-breaker position-relative mt-1 mb-3">
					<i className="fa fa-star text-dark bg-white"></i>
					<div className="the-line translate-middle-y bg-dark"></div>
				</div>

				<div className="row w-100">
					<div className="col-lg-2"></div>
					<div className="col-lg-8 col-12">
						<div className="item">
							<div className="input-boxes w-100">
								<div className="input rounded-3 w-100 text-center mt-5 mb-2 position-relative">
									<input
										type="text"
										name="userName"
										className="w-100 rounded-3 p-3"
										placeholder="Username"
									/>
									<label
										htmlFor="userName"
										className="position-absolute">
										Username:
									</label>
								</div>
								<div className="input rounded-3 w-100 text-center mt-4 mb-2 position-relative">
									<input
										type="number"
										name="Age"
										className="w-100 rounded-3 p-3"
										placeholder="Age"
									/>
									<label
										htmlFor="Age"
										className="position-absolute">
										Age:
									</label>
								</div>
								<div className="input rounded-3 w-100 text-center mt-4 mb-2 position-relative">
									<input
										type="email"
										name="Email"
										className="w-100 rounded-3 p-3"
										placeholder="Email"
									/>
									<label
										htmlFor="Email"
										className="position-absolute">
										Email:
									</label>
								</div>
								<div className="input rounded-3 w-100 text-center mt-4 mb-2 position-relative">
									<input
										type="text"
										name="Password"
										className="w-100 rounded-3 p-3"
										placeholder="Password"
									/>
									<label
										htmlFor="Password"
										className="position-absolute">
										Password:
									</label>
								</div>
								<button className="btn btn-teal me-auto mt-2 mb-5">
									Submit
								</button>
							</div>
						</div>
					</div>
					<div className="col-lg-2"></div>
				</div>
			</div>
		</div>
	);
}
