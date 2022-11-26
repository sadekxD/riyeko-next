import React, { useState, useEffect, useRef } from "react";
import RoadmapCard from "../cards/RoadmapCard";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const RoadmapSection = () => {
	return (
		<section id="roadmap">
			<div className="container">
				<Swiper
					modules={[Autoplay, Navigation, Pagination]}
					navigation={{ nextEl: "#next", prevEl: "#prev" }}
					spaceBetween={40}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						980: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: 3,
						},
					}}
					pagination={{
						el: ".custom-pagination",
						clickable: true,
						type: "bullets",
					}}
					initialSlide={3}
					autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
						<SwiperSlide key={i}>
							<RoadmapCard />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="custom-pagination"></div>

				{/* <RoadmapCard /> */}
			</div>
		</section>
	);
};

export default RoadmapSection;
