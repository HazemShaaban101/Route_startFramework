import React, { useEffect, useState } from "react";
import img1 from "../../assets/imgi_1_poert1.png";
import img2 from "../../assets/imgi_2_port2.png";
import img3 from "../../assets/imgi_3_port3.png";

export default function Portfolio() {
	let [imgPath, setImgPath] = useState(null);
	let [lightBoxVisibility, setLightBoxVisibility] = useState("d-none");

	function handleImgClick(img) {
		setImgPath(img[Object.keys(img)[0]]);
		setLightBoxVisibility("");
	}

	return (
		<div className="d-flex justify-content-center align-items-center mt-5">
			<div className="container portfolio-content d-flex justify-align-content-center align-items-center flex-column mt-5">
				<h2 className="text-center fw-bolder mt-5 text-Dark fa-3x">
					portfolio component
				</h2>
				<div className="line-breaker position-relative my-1">
					<i className="fa fa-star text-dark bg-white"></i>
					<div className="the-line translate-middle-y bg-dark"></div>
				</div>

				<div className="row g-3 mt-1 mb-5">
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<div
								className="img-card rounded overflow-hidden position-relative"
								onClick={() => {
									handleImgClick({ img1 });
								}}>
								<img
									src={img1}
									alt="some pic"
									className="w-100"
								/>
								<div className="layer bg-body-teal d-flex justify-content-center align-items-center">
									<i className="fa fa-plus fa-7x text-white"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<div
								className="img-card rounded overflow-hidden position-relative"
								onClick={() => {
									handleImgClick({ img2 });
								}}>
								<img
									src={img2}
									alt="some pic"
									className="w-100"
								/>
								<div className="layer bg-body-teal d-flex justify-content-center align-items-center">
									<i className="fa fa-plus fa-7x text-white"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<div
								className="img-card rounded overflow-hidden position-relative"
								onClick={() => {
									handleImgClick({ img3 });
								}}>
								<img
									src={img3}
									alt="some pic"
									className="w-100"
								/>
								<div className="layer bg-body-teal d-flex justify-content-center align-items-center">
									<i className="fa fa-plus fa-7x text-white"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<div
								className="img-card rounded overflow-hidden position-relative"
								onClick={() => {
									handleImgClick({ img2 });
								}}>
								<img
									src={img2}
									alt="some pic"
									className="w-100"
								/>
								<div className="layer bg-body-teal d-flex justify-content-center align-items-center">
									<i className="fa fa-plus fa-7x text-white"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<div
								className="img-card rounded overflow-hidden position-relative"
								onClick={() => {
									handleImgClick({ img3 });
								}}>
								<img
									src={img3}
									alt="some pic"
									className="w-100"
								/>
								<div className="layer bg-body-teal d-flex justify-content-center align-items-center">
									<i className="fa fa-plus fa-7x text-white"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<div
								className="img-card rounded overflow-hidden position-relative"
								onClick={() => {
									handleImgClick({ img1 });
								}}>
								<img
									src={img1}
									alt="some pic"
									className="w-100"
								/>
								<div className="layer bg-body-teal d-flex justify-content-center align-items-center">
									<i className="fa fa-plus fa-7x text-white"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={lightBoxVisibility}
				id="lightBox"
				onClick={(e) => {
					if (e.target.classList.contains("lightBox")) {
						setLightBoxVisibility("d-none");
					}
				}}>
				<div className="lightBox position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 z-3">
					<img
						src={imgPath}
						alt="image in a lightBox"
						className="lightbox-img"
					/>
				</div>
			</div>
		</div>
	);
}
