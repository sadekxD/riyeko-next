import React, { useState } from "react";
import { ethers } from "ethers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { checkValidDiscordId, checkValidTwitterId } from "../utils/utils";
import Head from "next/head";

const whitelist = () => {
	const MySwal = withReactContent(Swal);
	const [formData, setFormData] = useState({
		discord: "",
		twitter: "",
		wallet: "",
	});
	const [loading, setLoading] = useState(false);

	const _submit = async (e) => {
		e.preventDefault();
		MySwal.fire({
			html: "Please wait...",
			timerProgressBar: true,
			allowOutsideClick: false,
			customClass: {
				popup: "custom-swal-popup",
			},
			didOpen: () => {
				Swal.showLoading();
			},
		});
		try {
			if (ethers.utils.isAddress(formData.wallet)) {
				const res = await fetch(
					`https://sheet.best/api/sheets/${process.env.SHEET_BEST_API_KEY}`,
					{
						method: "POST",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(formData),
					}
				);

				MySwal.fire({
					html: (
						<div>
							<h4>Your Application has been received!</h4>
							<h2>Welcome to Riyeko City !!</h2>
						</div>
					),
					customClass: {
						popup: "custom-swal-popup",
					},
					showConfirmButton: false,
				});

				setFormData({
					discord: "",
					twitter: "",
					wallet: "",
				});
			} else {
				throw new Error("Parameter is not a number!");
			}
		} catch (err) {
			console.log(err);
			MySwal.fire({
				text: "Invalid Data!",
				customClass: {
					popup: "custom-swal-popup",
				},
			});
		}
	};

	const _change = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section id="whitelist">
			<Head>
				<title>Whitelist</title>
			</Head>
			<form className="container" onSubmit={_submit}>
				<h1 className="heading">
					RIY<span className="focus">EKO</span>
				</h1>
				<img style={{borderRadius: 8}} src="/images/whitelist.gif" alt="whitelist" />
				<div className="form-control">
					<div className="input-label">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_432_1369)">
								<path
									d="M10.8474 11.9023C9.11258 11.9023 7.70117 13.4572 7.70117 15.3685C7.70117 17.2797 9.11258 18.8346 10.8474 18.8346C12.5822 18.8346 13.9937 17.2797 13.9937 15.3685C13.9937 13.4572 12.5822 11.9023 10.8474 11.9023ZM10.8474 17.0768C10.0818 17.0768 9.45898 16.3104 9.45898 15.3685C9.45898 14.4265 10.0818 13.6602 10.8474 13.6602C11.6129 13.6602 12.2359 14.4265 12.2359 15.3685C12.2359 16.3104 11.6129 17.0768 10.8474 17.0768Z"
									fill="white"
								/>
								<path
									d="M19.1522 11.9023C17.4173 11.9023 16.0059 13.4572 16.0059 15.3685C16.0059 17.2797 17.4173 18.8346 19.1522 18.8346C20.887 18.8346 22.2984 17.2797 22.2984 15.3685C22.2984 13.4572 20.887 11.9023 19.1522 11.9023ZM19.1522 17.0768C18.3866 17.0768 17.7637 16.3104 17.7637 15.3685C17.7637 14.4265 18.3866 13.6602 19.1522 13.6602C19.9177 13.6602 20.5405 14.4265 20.5405 15.3685C20.5405 16.3104 19.9177 17.0768 19.1522 17.0768Z"
									fill="white"
								/>
								<path
									d="M29.9987 21.2445C29.9779 20.8729 29.4523 12.0829 26.1144 6.82475C26.0462 6.71723 25.9553 6.62576 25.8482 6.55686C21.7209 3.8991 18.9095 3.90672 18.7919 3.90625C18.451 3.91076 18.1574 4.10904 18.0155 4.39557L16.5976 7.11279C16.0694 7.07822 15.5362 7.06029 15 7.06029C14.464 7.06029 13.9307 7.07822 13.4025 7.11279L11.9862 4.39873C11.8449 4.11057 11.5504 3.91082 11.2081 3.90631C11.0898 3.90561 8.27879 3.89939 4.15192 6.55691C4.04486 6.62588 3.95399 6.71729 3.88572 6.8248C0.547755 12.0829 0.0221104 20.8729 0.0013682 21.2445C-0.0116396 21.4775 0.0685166 21.706 0.2242 21.8799C0.379005 22.0526 4.05629 26.0933 9.13912 26.0933C9.16186 26.0933 9.18524 26.0932 9.20803 26.0931C9.47516 26.0911 9.72682 25.9678 9.89211 25.7581L12.2366 22.7828C13.1371 22.8856 14.062 22.9392 15 22.9392C15.9381 22.9392 16.863 22.8856 17.7634 22.7828L20.1079 25.7581C20.2732 25.9678 20.5249 26.0911 20.792 26.0931C20.8152 26.0932 20.8378 26.0933 20.8609 26.0933C25.9433 26.0933 29.6212 22.0526 29.7758 21.8799C29.9315 21.706 30.0116 21.4775 29.9987 21.2445ZM21.2184 24.3272L19.7526 22.467C21.9839 22.008 23.9865 21.2269 25.5497 20.1781C25.9528 19.9077 26.0604 19.3617 25.7899 18.9586C25.5196 18.5555 24.9734 18.4478 24.5704 18.7184C22.2373 20.2837 18.749 21.1814 15 21.1814C11.2512 21.1814 7.76287 20.2837 5.42961 18.7186C5.02643 18.4482 4.48051 18.5558 4.2101 18.9589C3.93969 19.362 4.04727 19.908 4.45039 20.1784C6.01367 21.227 8.01629 22.0081 10.2475 22.467L8.78176 24.3272C5.34037 24.1675 2.6017 21.7609 1.78391 20.9622C1.92043 19.2592 2.62883 12.2354 5.26807 7.92988C7.85973 6.29395 9.81553 5.83896 10.689 5.71252L11.523 7.31043C9.56235 7.59672 7.72549 8.12283 6.16086 8.85947C5.7217 9.06619 5.53332 9.58984 5.74004 10.0291C5.94682 10.4682 6.47047 10.6565 6.90957 10.4499C9.14469 9.3976 12.0179 8.81811 15 8.81811C17.9823 8.81811 20.8556 9.39771 23.0906 10.4501C23.2116 10.5071 23.3389 10.5341 23.4644 10.5341C23.7942 10.5341 24.1104 10.3475 24.2602 10.0294C24.4669 9.59025 24.2785 9.06654 23.8394 8.85977C22.2747 8.12307 20.4378 7.59684 18.477 7.31055L19.3109 5.71264C20.1844 5.83908 22.1403 6.29406 24.732 7.93C27.3683 12.231 28.079 19.2621 28.2161 20.9638C27.4004 21.7642 24.6739 24.1688 21.2184 24.3272Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_432_1369">
									<rect width="30" height="30" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<p className="label-text">
							<i>DISCORD ID</i>
						</p>
					</div>
					<div className="input-box">
						<input
							required
							type="text"
							name="discord"
							value={formData.discord}
							onChange={_change}
							placeholder="ENTER DISCORD ID"
						/>
						<svg
							width="460"
							height="62"
							viewBox="0 0 460 62"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="frame"
							preserveAspectRatio="none"
						>
							<path
								d="M1 40.35V2C1 1.44772 1.4477 1 1.99999 1H413.766C413.909 1 414.05 1.03077 414.181 1.09023L458.415 21.2737C458.771 21.4362 459 21.7918 459 22.1834V60C459 60.5523 458.552 61 458 61H46.2292C46.0894 61 45.951 60.9707 45.8232 60.9139L1.59399 41.2639C1.23279 41.1034 1 40.7453 1 40.35Z"
								fill="black"
								stroke="#FFB800"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>

				<div className="form-control" style={{ marginTop: 30 }}>
					<div className="input-label">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.0994 25C13.8337 25.1249 17.4597 23.7345 20.153 21.1448C22.8463 18.5551 24.3779 14.9863 24.3994 11.25C25.2465 10.2018 25.8755 8.99478 26.2494 7.7C26.3064 7.49103 26.2355 7.26806 26.0682 7.13045C25.9009 6.99285 25.6685 6.96625 25.4744 7.0625C24.5657 7.49991 23.4793 7.30877 22.7744 6.5875C21.8879 5.61666 20.646 5.0462 19.3318 5.00616C18.0177 4.96613 16.7434 5.45993 15.7994 6.375C14.4981 7.63524 13.9526 9.48534 14.3619 11.25C10.1744 11.5 7.29941 9.5125 4.99941 6.7875C4.85822 6.62761 4.63585 6.56633 4.43269 6.63134C4.22953 6.69635 4.08404 6.87534 4.06191 7.0875C3.16455 12.0652 5.45799 17.0759 9.81191 19.65C8.38645 21.2848 6.38467 22.3058 4.22441 22.5C3.98713 22.5393 3.80113 22.7252 3.76159 22.9624C3.72205 23.1997 3.83772 23.4358 4.04941 23.55C5.92881 24.4892 7.99845 24.9852 10.0994 25Z"
								fill="black"
								stroke="white"
								stroke-width="2"
							/>
						</svg>

						<p className="label-text">
							<i>TWITTER ID</i>
						</p>
					</div>
					<div className="input-box">
						<input
							required
							type="text"
							name="twitter"
							value={formData.twitter}
							onChange={_change}
							placeholder="ENTER TWITTER ID"
						/>
						<svg
							width="460"
							height="62"
							viewBox="0 0 460 62"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="frame"
							preserveAspectRatio="none"
						>
							<path
								d="M1 40.35V2C1 1.44772 1.4477 1 1.99999 1H413.766C413.909 1 414.05 1.03077 414.181 1.09023L458.415 21.2737C458.771 21.4362 459 21.7918 459 22.1834V60C459 60.5523 458.552 61 458 61H46.2292C46.0894 61 45.951 60.9707 45.8232 60.9139L1.59399 41.2639C1.23279 41.1034 1 40.7453 1 40.35Z"
								fill="black"
								stroke="#FFB800"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
				<div className="form-control" style={{ marginTop: 30 }}>
					<div className="input-label">
						<svg
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_432_1383)">
								<path
									d="M28.636 15.1258V10.9094C28.636 9.47963 27.527 8.31687 26.1258 8.20411L22.2101 1.36474C21.8472 0.732193 21.2613 0.280091 20.5601 0.0923594C19.8623 -0.0940935 19.1326 0.00383102 18.5081 0.367341L5.08479 8.18213H2.72725C1.22316 8.18213 0 9.40522 0 10.9094V27.2727C0 28.7768 1.2231 30 2.72725 30H25.9087C27.4128 30 28.636 28.7769 28.636 27.2727V23.0563C29.4279 22.7739 29.9996 22.0242 29.9996 21.1365V17.0456C29.9996 16.1579 29.4279 15.4082 28.636 15.1258ZM24.5413 8.18213H18.5986L23.0557 5.58725L24.5413 8.18213ZM22.3782 4.40391L15.8885 8.18213H13.1967L21.7051 3.22837L22.3782 4.40391ZM19.1945 1.54582C19.5028 1.36538 19.863 1.31744 20.2072 1.40935C20.5555 1.50255 20.8458 1.72761 21.0262 2.04254L21.0276 2.04503L10.4867 8.18213H7.79497L19.1945 1.54582ZM27.2723 27.2727C27.2723 28.0244 26.6604 28.6363 25.9087 28.6363H2.72725C1.97556 28.6363 1.36366 28.0244 1.36366 27.2727V10.9094C1.36366 10.1577 1.97556 9.54578 2.72725 9.54578H25.9087C26.6604 9.54578 27.2723 10.1577 27.2723 10.9094V15.0002H23.1815C20.9256 15.0002 19.0906 16.8352 19.0906 19.0911C19.0906 21.3469 20.9256 23.1819 23.1815 23.1819H27.2723V27.2727ZM28.636 21.1365C28.636 21.5126 28.3304 21.8183 27.9541 21.8183H23.1815C21.6774 21.8183 20.4542 20.5952 20.4542 19.0911C20.4542 17.587 21.6773 16.3638 23.1815 16.3638H27.9541C28.3303 16.3638 28.636 16.6694 28.636 17.0456V21.1365Z"
									fill="white"
								/>
								<path
									d="M23.182 17.7275C22.4303 17.7275 21.8184 18.3394 21.8184 19.0911C21.8184 19.8428 22.4303 20.4547 23.182 20.4547C23.9336 20.4547 24.5455 19.8428 24.5455 19.0911C24.5456 18.3394 23.9337 17.7275 23.182 17.7275Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_432_1383">
									<rect width="30" height="30" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<p className="label-text">
							<i>WALLET ADDRESS</i>
						</p>
					</div>
					<div className="input-box">
						<input
							required
							type="text"
							name="wallet"
							value={formData.wallet}
							onChange={_change}
							placeholder="ENTER WALLET ADDRESS"
						/>
						<svg
							width="460"
							height="62"
							viewBox="0 0 460 62"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="frame"
							preserveAspectRatio="none"
						>
							<path
								d="M1 40.35V2C1 1.44772 1.4477 1 1.99999 1H413.766C413.909 1 414.05 1.03077 414.181 1.09023L458.415 21.2737C458.771 21.4362 459 21.7918 459 22.1834V60C459 60.5523 458.552 61 458 61H46.2292C46.0894 61 45.951 60.9707 45.8232 60.9139L1.59399 41.2639C1.23279 41.1034 1 40.7453 1 40.35Z"
								fill="black"
								stroke="#FFB800"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
				<button type="submit" className="join-btn">
					JOIN US!
					<svg
						className="frame"
						width="468"
						height="83"
						viewBox="0 0 468 83"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
					>
						<g filter="url(#filter0_bd_432_1361)">
							<path
								className="h-change"
								d="M5 49.6667V1H417.983L463 25.991V74H50.0171L5 49.6667Z"
								fill="none"
							/>
							<path
								d="M5 49.6667V1H417.983L463 25.991V74H50.0171L5 49.6667Z"
								stroke="#FFB800"
								stroke-width="2"
							/>
						</g>
						<defs>
							<filter
								id="filter0_bd_432_1361"
								x="0"
								y="-4"
								width="468"
								height="87"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
								<feComposite
									in2="SourceAlpha"
									operator="in"
									result="effect1_backgroundBlur_432_1361"
								/>
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="4" />
								<feGaussianBlur stdDeviation="2" />
								<feComposite in2="hardAlpha" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.26 0"
								/>
								<feBlend
									mode="normal"
									in2="effect1_backgroundBlur_432_1361"
									result="effect2_dropShadow_432_1361"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect2_dropShadow_432_1361"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</button>
			</form>
		</section>
	);
};

export default whitelist;
