import React, { useState, useEffect, useRef } from "react";
import RoadmapCard from "../cards/RoadmapCard";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
	{
		title: "nft project",
	},
	{
		title: "community",
	},
	{
		title: "p2e game",
	},
	{
		title: "metaverse",
	},
	{
		title: "street",
	},
	{
		title: "dao",
	},
];

const RoadmapSection = () => {
	return (
		<section id="roadmap">
			<div className="container">
				<div className="swiper-wrapper">
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
						{data.map((item, i) => (
							<SwiperSlide key={item.title}>
								<RoadmapCard
									title={item.title}
									image={`/images/roadmap-${i + 1}.png`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="custom-pagination"></div>

				<div className="roadmap-items">
					{data.map((item, i) => (
						<RoadmapCard
							key={item.title}
							title={item.title}
							image={`/images/roadmap-${i + 1}.png`}
						/>
					))}
				</div>

				{/* <RoadmapCard /> */}
			</div>
		</section>
	);
};

export default RoadmapSection;
