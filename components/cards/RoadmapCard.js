import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const RoadmapCard = ({ title, image, description }) => {
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
					height: !active
						? "210px"
						: title === "metaverse" ||
						  title === "nft project" ||
						  title === "p2e game"
						? "650px"
						: "500px",
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
						className={`card-back ${
							title.toLowerCase() === "dao" ? "dao" : ""
						}`}
						style={{
							height: !active
								? "210px"
								: title === "metaverse" ||
								  title === "nft project" ||
								  title === "p2e game"
								? "650px"
								: "500px",
						}}
						ref={boxRef}
					>
						{description()}
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
						className={`card-back ${
							title.toLowerCase() === "dao" ? "dao" : ""
						}`}
						style={{
							height: !active
								? "210px"
								: title === "metaverse"
								? "600px"
								: "500px",
						}}
						ref={boxRef}
					>
						{description()}
					</div>
				</div>
			</div>
		);
	}
};

export default RoadmapCard;
