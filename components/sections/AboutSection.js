import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<section id="about">
			<div className="container">
				<div className="slider-wrapper">
					<Swiper
						modules={[Navigation]}
						navigation={{ nextEl: "#next", prevEl: "#prev" }}
						spaceBetween={0}
						onSlideChange={(e) => {
							setActiveIndex(e.activeIndex);
						}}
					>
						<SwiperSlide>
							<div className="about-text">
								<p>
									Be one of our 5,555 Riyeko Players and join us in our quest to
									shape the NFT ecosystem into a secure and exciting space.
								</p>
								<br />
								<p>
									NFT holders a.k.a. Players will receive exclusive access to
									our Community, P2E Game and Metaverse projects.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="about-text">
								<p>
									Players will also be invited to participate in our Annual
									Street Challenge to win the Ultimate Prize!
								</p>
								<br />
								<p>Are you ready to be a Player?</p>
								<br />
								<p>
									For more information and announcements, Follow us on Twitter
									and Connect with us on our Discord Channel!
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="slider-controls">
						<button
							id="prev"
							className={`${activeIndex === 0 ? "active" : ""}`}
						></button>
						<button
							id="next"
							className={`${activeIndex === 1 ? "active" : ""}`}
						></button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
