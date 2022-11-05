import React from "react";

const AboutSection = () => {
	return (
		<section id="about">
			<div className="about-left">
				<img src="/images/about-img-1.png" alt="about" />
			</div>
			<div className="about-right">
				<img
					src="/images/about-heading.png"
					alt="about heading"
					className="about-heading"
				/>
				<p className="about-info">
					Become one of our 5,555 Riyeko Players and join us in our quest to
					shape the NFT ecosystem into a secure and exciting space. <br /> NFT
					holders a.k.a. Players will receive exclusive access to our Community,
					P2E Game and Metaverse projects. <br /> Players will also be invited
					to participate in our Annual Street Challenge to win the Ultimate
					Prize! <br /> Are you ready to be a Player? <br /> For more
					information and announcements, Follow us on Twitter and Connect with
					us on our Discord Channel!
				</p>
			</div>
			<img src="/images/about-img-2.png" alt="Were Wolf" className="about-ww" />
		</section>
	);
};

export default AboutSection;
