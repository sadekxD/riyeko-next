import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
	ssr: false,
});

const AboutSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<section id="about">
			<div className="about-bg-img">
				<AnimatePresence>
					{activeIndex === 0 && (
						<motion.img
							initial={{ filter: "blur(50px)" }}
							animate={{ filter: "blur(0)" }}
							transition={{ duration: 0.5 }}
							src={`/images/about-bg-${activeIndex + 1}.png`}
							alt={`about-bg-${activeIndex}`}
						/>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{activeIndex === 1 && (
						<motion.img
							initial={{ filter: "blur(50px)" }}
							animate={{ filter: "blur(0)" }}
							transition={{ duration: 0.5 }}
							src={`/images/about-bg-${activeIndex + 1}.png`}
							alt={`about-bg-${activeIndex}`}
							style={{ objectPosition: "center" }}
						/>
					)}
				</AnimatePresence>
			</div>
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
								{/* <p>
									Be one of our 5,555 Riyeko Players and join us in our quest to
									shape the NFT ecosystem into a secure and exciting space.
								</p>
								<br />
								<p>
									NFT holders a.k.a. Players will receive exclusive access to
									our Community, P2E Game and Metaverse projects.
								</p> */}
								{activeIndex === 0 ? (
									<>
										<TypeWriterEffect
											textStyle={{
												fontSize: 18,
											}}
											cursorColor="transparent"
											text="Be one of our 5,555 Riyeko Players and join us in our quest to shape the NFT ecosystem into a secure and exciting space."
											typeSpeed={20}
										/>
										<br />
										<TypeWriterEffect
											textStyle={{
												fontSize: 18,
											}}
											startDelay={3000}
											cursorColor="transparent"
											text="NFT holders a.k.a. Players will receive exclusive access to
									our Community, P2E Game and Metaverse projects."
											typeSpeed={20}
										/>
									</>
								) : (
									""
								)}
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="about-text">
								{/* <p>
									Players will also be invited to participate in our Annual
									Street Challenge to win the Ultimate Prize!
								</p>
								<br />
								<p>Are you ready to be a Player?</p>
								<br />
								<p>
									For more information and announcements, Follow us on Twitter
									and Connect with us on our Discord Channel!
								</p> */}
								{activeIndex === 1 ? (
									<>
										<TypeWriterEffect
											textStyle={{
												fontSize: 18,
											}}
											cursorColor="transparent"
											text="Players will also be invited to participate in our Annual
									Street Challenge to win the Ultimate Prize!"
											typeSpeed={20}
										/>
										<br />
										<TypeWriterEffect
											textStyle={{
												fontSize: 18,
											}}
											cursorColor="transparent"
											text="Are you ready to be a Player?"
											typeSpeed={20}
											startDelay={3000}
										/>
										<br />
										<TypeWriterEffect
											textStyle={{
												fontSize: 18,
											}}
											cursorColor="transparent"
											text="For more information and announcements, Follow us on Twitter
									and Connect with us on our Discord Channel!"
											typeSpeed={20}
											startDelay={4500}
										/>
									</>
								) : (
									""
								)}
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
