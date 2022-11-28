import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const RoadmapCard = ({ title, image }) => {
	const [active, setActive] = useState(false);
	const toggle = () => setActive(!active);
	const boxRef = useRef();
	const [dim, setDim] = useState({ x: 0, y: 0 });
	const [innerWidth, setInnerWidth] = useState();

	useEffect(() => {
		setDim({ x: boxRef.current.clientWidth, y: boxRef.current.clientHeight });
	}, [active, innerWidth]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setInnerWidth(window.innerWidth);
			window.addEventListener("resize", () => {
				setInnerWidth(window.innerWidth);
			});
		}
	}, [innerWidth]);

	const ref = useDetectClickOutside({
		onTriggered: () => {
			setActive(false);
		},
	});

	if (innerWidth <= 600) {
		return (
			<div
				className="roadmap-card"
				onClick={toggle}
				ref={ref}
				style={{
					height: !active ? "210px" : "500px",
				}}
			>
				<div
					className="card-inner"
					style={{
						transform: active ? "rotateY(180deg)" : "rotateY(0deg)",
					}}
				>
					<div className="card-front" data-title={title}>
						<img src={image} alt={image} />
					</div>
					<div
						className="card-back"
						style={{
							height: !active ? "210px" : "500px",
						}}
						ref={boxRef}
					>
						<p>
							Riyeko is a collection of 5,555 players chillin’ on the Ethereum
							blockchain.
						</p>
						<br />
						<p>
							NFTs are here to rule the new era of the corporate world. From
							small business owners to large
						</p>
						<br />
						<p>
							corporations and Tech Giants, everyone is eager to venture into
							the NFT ecosystem.
						</p>
						<br />
						<p>
							But… the distinct detachment from the digital world to the
							physical world is NFT’s biggest predicament. We strive to be the
							bridge between both worlds.
						</p>
						<br />
						<p>
							Our goal is to also be the biggest and most innovative community
							in the Web3.0 eco-system that focuses on building together.
						</p>
						<p>Stay tuned for more announcements on this journey!</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className="roadmap-card"
				onClick={toggle}
				ref={ref}
				// style={{
				// 	height: !active ? "210px" : "500px",
				// }}
			>
				<div
					className="card-inner"
					style={{
						transform: active ? "rotateY(180deg)" : "rotateY(0deg)",
					}}
				>
					<div className="card-front" data-title={title}>
						<img src={image} alt={image} />
					</div>
					<div
						className="card-back"
						style={{
							height: !active ? "210px" : "500px",
						}}
						ref={boxRef}
					>
						<p>
							Riyeko is a collection of 5,555 players chillin’ on the Ethereum
							blockchain.
						</p>
						<br />
						<p>
							NFTs are here to rule the new era of the corporate world. From
							small business owners to large
						</p>
						<br />
						<p>
							corporations and Tech Giants, everyone is eager to venture into
							the NFT ecosystem.
						</p>
						<br />
						<p>
							But… the distinct detachment from the digital world to the
							physical world is NFT’s biggest predicament. We strive to be the
							bridge between both worlds.
						</p>
						<br />
						<p>
							Our goal is to also be the biggest and most innovative community
							in the Web3.0 eco-system that focuses on building together.
						</p>
						<p>Stay tuned for more announcements on this journey!</p>
					</div>
				</div>
			</div>
		);
	}
};

export default RoadmapCard;
