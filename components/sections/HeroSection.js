import React from "react";

const HeroSection = () => {
	return (
		<section id="hero">
			<div className="container">
				<video autoplay muted id="vid">
					<source src="/videos/hero-video2.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
};

export default HeroSection;
