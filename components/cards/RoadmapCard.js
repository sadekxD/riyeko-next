import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDetectClickOutside } from "react-detect-click-outside";

const card = {
	init: {
		width: "100%",
		height: 250,
	},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	exit: {},
};

const card_inner = {
	init: {},
	// animate: {
	// 	transform: "rotateY(180deg)",
	// 	transition: {
	// 		duration: 0.6,
	// 	},
	// },
	// exit: {
	// 	transform: "rotateY(0)",
	// 	transition: {
	// 		duration: 0.6,
	// 	},
	// },
};

const card_back = {
	init: {
		height: "auto",
	},
	animate: {
		height: "fit-content",
		transition: {
			duration: 0.3,
		},
	},
};

const RoadmapCard = () => {
	const [active, setActive] = useState(false);
	const toggle = () => setActive(!active);
	const ref = useDetectClickOutside({
		onTriggered: () => {
			setActive(false);
		},
	});

	return (
		<AnimatePresence>
			<motion.div
				// className={`roadmap-card ${active ? "active" : ""}`}
				className="roadmap-card"
				onClick={toggle}
				variants={card}
				initial="init"
				animate={active && "animate"}
				exit="exit"
				ref={ref}
			>
				<motion.div
					className="card-inner"
					variants={card_inner}
					style={{ transform: active ? "rotateY(180deg)" : "rotateY(0deg)" }}
				>
					<motion.div className="card-front" data-title="NFT PROJECT">
						<img src="/images/roadmap-1.png" alt="roadmap 1" />
					</motion.div>
					<motion.div
						variants={card_back}
						className="card-back"
						onClick={() => setActive(false)}
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
					</motion.div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default RoadmapCard;
