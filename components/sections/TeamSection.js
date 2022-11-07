import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamSection = () => {
	return (
		<section id="team">
			<div className="container">
				<Swiper
					modules={[Autoplay, Navigation]}
					navigation={{ nextEl: "#next", prevEl: "#prev" }}
					spaceBetween={0}
					breakpoints={{
						768: {
							slidesPerView: 1,
						},
						980: {
							slidesPerView: 2,
						},
						1400: {
							slidesPerView: 3,
						},
					}}
					autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
						<SwiperSlide key={i}>
							<img
								className="team-img"
								src={`/images/team-${item}.png`}
								alt="product"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="navigation">
				<button id="prev" style={{ color: "#fff" }}>
					<img src="/images/prev.png" alt="prev" />
				</button>
				<button id="next" style={{ color: "#fff" }}>
					<img src="/images/next.png" alt="next" />
				</button>
			</div>
		</section>
	);
};

export default TeamSection;
