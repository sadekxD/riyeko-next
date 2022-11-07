import React, { useRef, useEffect } from "react";

const HeroSection = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		// let elem = document.querySelector("#vid");
		videoRef.current.onended = () => {
			videoRef.current.currentTime = 24.1;
			videoRef.current.play();
		};
	}, [videoRef]);

	return (
		<section id="hero">
			<div className="container">
				<video ref={videoRef} autoPlay muted id="vid">
					<source src="/videos/hero-video2.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
};

export default HeroSection;
