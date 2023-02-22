import React, { useContext, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import globalContext from "../context/GlobalContext";
import Head from "next/head";

const mint = () => {
	const {
		connectWallet,
		handleCount,
		disconnect,
		mint,
		value,
		connected,
		mintInfo,
		web3,
	} = useContext(globalContext);

	useEffect(() => {
		if (!web3.cachedProvider) {
			console.log(web3.cachedProvider);
			connectWallet();
		}
	}, []);

	return (
		<section id="mint">
			<Head>
				<title>Mint</title>
			</Head>
			<div className="container">
				<div className="img-wrapper">
					<Swiper
						modules={[Autoplay, EffectCoverflow]}
						effect="coverflow"
						slidesPerView={3}
						initialSlide={1}
						// spaceBetween={40}
						loop
						breakpoints={{
							0: {
								spaceBetween: 20,
							},
							400: {
								spaceBetween: 40,
							},
						}}
						coverflowEffect={{
							rotate: 40,
							stretch: 0,
							depth: 40,
							modifier: 1,
							slideShadows: false,
						}}
						autoplay={{ delay: 500 }}
					>
						{[1, 2, 3, 4, 5, 6].map((item, i) => (
							<SwiperSlide key={i}>
								{({ isActive }) => (
									<img
										style={{ borderRadius: 10 }}
										className={`img ${isActive ? "active" : ""}`}
										src={`/images/${item}.png`}
										alt="product"
									/>
								)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="mint-info">
					<div className="price">
						<p>
							<span>
								<i>PRICE</i>
							</span>
							<span>
								<i>
									{mintInfo.preSale
										? mintInfo.presaleCost
										: mintInfo.publicSale
										? mintInfo.publicCost
										: ""}{" "}
									ETH
								</i>
							</span>
						</p>
						<svg
							width="218"
							height="52"
							viewBox="0 0 218 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
						>
							<path
								d="M3 33.161V4C3 3.44772 3.44771 3 4 3H193.827C194.045 3 194.256 3.07099 194.43 3.2022L214.603 18.4477C214.853 18.6367 215 18.932 215 19.2455V48C215 48.5523 214.552 49 214 49H24.1659C23.9526 49 23.745 48.9318 23.5732 48.8054L3.40732 33.9664C3.15122 33.7779 3 33.4789 3 33.161Z"
								fill="black"
								stroke="#FFB800"
								strokeWidth="6"
							/>
						</svg>
					</div>
					<div className="supply">
						<p>
							<span>
								<i>SUPPLY</i>
							</span>
							<span>
								<i>5555</i>
							</span>
						</p>
						<svg
							width="218"
							height="52"
							viewBox="0 0 218 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
						>
							<path
								d="M3 33.161V4C3 3.44772 3.44771 3 4 3H193.827C194.045 3 194.256 3.07099 194.43 3.2022L214.603 18.4477C214.853 18.6367 215 18.932 215 19.2455V48C215 48.5523 214.552 49 214 49H24.1659C23.9526 49 23.745 48.9318 23.5732 48.8054L3.40732 33.9664C3.15122 33.7779 3 33.4789 3 33.161Z"
								fill="black"
								stroke="#FFB800"
								strokeWidth="6"
							/>
						</svg>
					</div>
				</div>
				<div className="mint-counter">
					<button className="dec" onClick={() => handleCount("dec")}>
						<AiOutlineMinus size={24} color="#FF00FF" />
						<svg
							className="frame"
							width="89"
							height="70"
							viewBox="0 0 89 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#filter0_d_432_1260)">
								<path
									d="M5 40.8127V2C5 1.44772 5.44771 1 6 1H75.544C75.9599 1 76.3324 1.25739 76.4794 1.64639L83.9354 21.3696C83.9781 21.4826 84 21.6024 84 21.7232V60C84 60.5523 83.5523 61 83 61H13.4494C13.0368 61 12.6666 60.7466 12.5172 60.3619L5.06779 41.1746C5.02299 41.0592 5 40.9365 5 40.8127Z"
									fill="black"
									fill-opacity="1"
									shapeRendering="crispEdges"
									className="c_btn"
								/>
								<path
									d="M5 40.8127V2C5 1.44772 5.44771 1 6 1H75.544C75.9599 1 76.3324 1.25739 76.4794 1.64639L83.9354 21.3696C83.9781 21.4826 84 21.6024 84 21.7232V60C84 60.5523 83.5523 61 83 61H13.4494C13.0368 61 12.6666 60.7466 12.5172 60.3619L5.06779 41.1746C5.02299 41.0592 5 40.9365 5 40.8127Z"
									stroke="white"
									strokeWidth="2"
									shapeRendering="crispEdges"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_432_1260"
									x="0"
									y="0"
									width="89"
									height="70"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
										values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_432_1260"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_432_1260"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</button>
					<p className="counter">
						{value}
						<svg
							className="frame"
							width="89"
							height="70"
							viewBox="0 0 89 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
						>
							<g filter="url(#filter0_d_432_1260)">
								<path
									d="M5 40.8127V2C5 1.44772 5.44771 1 6 1H75.544C75.9599 1 76.3324 1.25739 76.4794 1.64639L83.9354 21.3696C83.9781 21.4826 84 21.6024 84 21.7232V60C84 60.5523 83.5523 61 83 61H13.4494C13.0368 61 12.6666 60.7466 12.5172 60.3619L5.06779 41.1746C5.02299 41.0592 5 40.9365 5 40.8127Z"
									fill="black"
									fill-opacity="0.8"
									shapeRendering="crispEdges"
								/>
								<path
									d="M5 40.8127V2C5 1.44772 5.44771 1 6 1H75.544C75.9599 1 76.3324 1.25739 76.4794 1.64639L83.9354 21.3696C83.9781 21.4826 84 21.6024 84 21.7232V60C84 60.5523 83.5523 61 83 61H13.4494C13.0368 61 12.6666 60.7466 12.5172 60.3619L5.06779 41.1746C5.02299 41.0592 5 40.9365 5 40.8127Z"
									stroke="white"
									strokeWidth="2"
									shapeRendering="crispEdges"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_432_1260"
									x="0"
									y="0"
									width="89"
									height="70"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
										values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_432_1260"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_432_1260"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</p>
					<button className="inc" onClick={() => handleCount("inc")}>
						<AiOutlinePlus size={24} color="#FF00FF" />
						<svg
							className="frame"
							width="89"
							height="70"
							viewBox="0 0 89 70"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#filter0_d_432_1260)">
								<path
									d="M5 40.8127V2C5 1.44772 5.44771 1 6 1H75.544C75.9599 1 76.3324 1.25739 76.4794 1.64639L83.9354 21.3696C83.9781 21.4826 84 21.6024 84 21.7232V60C84 60.5523 83.5523 61 83 61H13.4494C13.0368 61 12.6666 60.7466 12.5172 60.3619L5.06779 41.1746C5.02299 41.0592 5 40.9365 5 40.8127Z"
									fill="black"
									fill-opacity="1"
									shapeRendering="crispEdges"
									className="c_btn"
								/>
								<path
									d="M5 40.8127V2C5 1.44772 5.44771 1 6 1H75.544C75.9599 1 76.3324 1.25739 76.4794 1.64639L83.9354 21.3696C83.9781 21.4826 84 21.6024 84 21.7232V60C84 60.5523 83.5523 61 83 61H13.4494C13.0368 61 12.6666 60.7466 12.5172 60.3619L5.06779 41.1746C5.02299 41.0592 5 40.9365 5 40.8127Z"
									stroke="white"
									strokeWidth="2"
									shapeRendering="crispEdges"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_432_1260"
									x="0"
									y="0"
									width="89"
									height="70"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
										values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_432_1260"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_432_1260"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</button>
				</div>

				{connected ? (
					<React.Fragment>
						<button className="mint-btn" onClick={mint}>
							MINT
							<svg
								className="frame"
								width="468"
								height="83"
								viewBox="0 0 468 83"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
							>
								<g filter="url(#filter0_bd_432_1239)">
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
										id="filter0_bd_432_1239"
										x="0"
										y="-4"
										width="468"
										height="87"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_432_1239"
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
											in2="effect1_backgroundBlur_432_1239"
											result="effect2_dropShadow_432_1239"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect2_dropShadow_432_1239"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
						</button>
						<button className="disconnect" onClick={disconnect}>
							Disconnect
						</button>
					</React.Fragment>
				) : (
					<button className="mint-btn" onClick={connectWallet}>
						CONNECT
						<svg
							className="frame"
							width="468"
							height="83"
							viewBox="0 0 468 83"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
						>
							<g filter="url(#filter0_bd_432_1239)">
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
									id="filter0_bd_432_1239"
									x="0"
									y="-4"
									width="468"
									height="87"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
									<feComposite
										in2="SourceAlpha"
										operator="in"
										result="effect1_backgroundBlur_432_1239"
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
										in2="effect1_backgroundBlur_432_1239"
										result="effect2_dropShadow_432_1239"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect2_dropShadow_432_1239"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</button>
				)}
			</div>
		</section>
	);
};

export default mint;
