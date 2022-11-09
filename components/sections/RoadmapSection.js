import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const data = [{ title: "NFT PROJECT", description: "", image: "" }];

const RoadmapSection = () => {
	const [active, setActive] = useState(false);
	const boxRef = useRef(null);
	const containerRef = useRef(null);
	const [dim, setDim] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const ref = boxRef.current;
		const ref2 = containerRef.current;
		console.log(ref.clientHeight, ref.clientWidth);
		// setDim({ x: ref.clientWidth + 18, y: ref.clientHeight + 18 });

		if (active) {
			setDim({ x: ref2.clientWidth, y: ref2.clientHeight });
		} else {
			setDim({ x: ref.clientWidth + 18, y: ref.clientHeight + 18 });
		}
	}, [active]);

	useEffect(() => {
		window.addEventListener("resize", () => setActive(false));
	}, []);

	const handleContent = () => {
		setActive(!active);
	};

	return (
		<section id="roadmap">
			<div className="container">
				<div className="roadmap-left" ref={containerRef}>
					<div
						className={`box box-1`}
						ref={boxRef}
						// style={{
						// 	position: active ? "static" : "relative",
						// }}
					>
						<div
							className="box-animate"
							style={{
								width: dim.x,
								height: dim.y,
								opacity: active ? 1 : 0,
								top: 0,
								left: 0,
								transform: active ? "translate(-0px, -0px)" : "translate(0, 0)",
								zIndex: active ? 99 : -1,
							}}
						>
							<div className="animate-content">
								<svg
									onClick={handleContent}
									className="close-icon"
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M26.7734 13.8594C26.7734 13.6875 26.6328 13.5469 26.4609 13.5469L23.8828 13.5586L20 18.1875L16.1211 13.5625L13.5391 13.5508C13.3672 13.5508 13.2266 13.6875 13.2266 13.8633C13.2266 13.9375 13.2539 14.0078 13.3008 14.0664L18.3828 20.1211L13.3008 26.1719C13.2536 26.2291 13.2274 26.3008 13.2266 26.375C13.2266 26.5469 13.3672 26.6875 13.5391 26.6875L16.1211 26.6758L20 22.0469L23.8789 26.6719L26.457 26.6836C26.6289 26.6836 26.7695 26.5469 26.7695 26.3711C26.7695 26.2969 26.7422 26.2266 26.6953 26.168L21.6211 20.1172L26.7031 14.0625C26.75 14.0078 26.7734 13.9336 26.7734 13.8594Z"
										fill="white"
									/>
									<path
										d="M20 2.53906C10.3359 2.53906 2.5 10.375 2.5 20.0391C2.5 29.7031 10.3359 37.5391 20 37.5391C29.6641 37.5391 37.5 29.7031 37.5 20.0391C37.5 10.375 29.6641 2.53906 20 2.53906ZM20 34.5703C11.9766 34.5703 5.46875 28.0625 5.46875 20.0391C5.46875 12.0156 11.9766 5.50781 20 5.50781C28.0234 5.50781 34.5312 12.0156 34.5312 20.0391C34.5312 28.0625 28.0234 34.5703 20 34.5703Z"
										fill="white"
									/>
								</svg>

								<div className="an-left">
									<h2 className="animate-heading">NFT PROJECT</h2>
									<p>
										Riyeko is a collection of 5,555 players chillin’ on the
										Ethereum blockchain.
										<br />
										<br />
										Our Mission: NFTs are here to rule a new era of the
										Corporate world. From small business owners to tech giants,
										all of whom are looking to set foot into the NFT ecosystem.
										<br />
										<br />
										But… the distinct detachment from the digital world to the
										physical world is NFT's biggest predicament. We intend to
										solve this by being the bridge between both worlds.
										<br />
										<br />
										Our goal is to also be the biggest and most innovative
										community in the Web 3 eco-system that focuses on building
										together.
										<br />
										<br />
										Stay tuned for more announcements on this journey!
									</p>
								</div>
								<div className="an-right">
									<img src="/images/animate-1.png" alt="animate" />
								</div>
							</div>
						</div>
						<div className="box-content" onClick={handleContent}>
							<h3 className="box-heading">NFT PROJECT</h3>
							<img src="/images/roadmap-1.png" alt="roadmap 1" />
						</div>
					</div>
					<div className="box box-2">
						<div className="box-content">
							<h3 className="box-heading">METAVERSE</h3>
							<img src="/images/roadmap-2.png" alt="roadmap 2" />
						</div>
					</div>
					<div className="box box-3">
						<div className="box-content">
							<h3 className="box-heading">COMMUNITY</h3>
							<img src="/images/roadmap-3.png" alt="roadmap 3" />
						</div>
					</div>
					<div className="box box-4">
						<div className="box-content">
							<h3 className="box-heading">STREET</h3>
							<img src="/images/roadmap-4.png" alt="roadmap 4" />
						</div>
					</div>
					<div className="box box-5">
						<div className="box-content">
							<h3 className="box-heading">P2E GAME</h3>
							<img src="/images/roadmap-5.png" alt="roadmap 5" />
						</div>
					</div>
					<div className="box box-6">
						<div className="box-content">
							<h3 className="box-heading">DAO</h3>
						</div>
					</div>
				</div>
				<div className="roadmap-right">
					<img src="/images/roadmap-img.png" alt="roadmap image" />
				</div>
			</div>
		</section>
	);
};

export default RoadmapSection;
