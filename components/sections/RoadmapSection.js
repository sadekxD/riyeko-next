import React, { useState, useEffect, useRef } from "react";
import RoadmapCard from "../cards/RoadmapCard";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
	{
		title: "nft project",
		description: () => (
			<React.Fragment>
				<p>
					Riyeko is a collection of 5,555 players chillin’ on the Ethereum
					blockchain.
				</p>
				<br />
				<p>
					NFTs are here to rule the new era of the corporate world. From small
					business owners to large
				</p>
				<br />
				<p>
					corporations and Tech Giants, everyone is eager to venture into the
					NFT ecosystem.
				</p>
				<br />
				<p>
					But… the distinct detachment from the digital world to the physical
					world is NFT’s biggest predicament. We strive to be the bridge between
					both worlds.
				</p>
				<br />
				<p>
					Our goal is to also be the biggest and most innovative community in
					the Web3.0 eco-system that focuses on building together.
				</p>
				<br />
				<p>Stay tuned for more announcements on this journey!</p>
			</React.Fragment>
		),
	},
	{
		title: "community",
		description: () => (
			<React.Fragment>
				<p>
					Our Community will be built around NFT enthusiasts, Crypto Investors,
					Startup Founders, Blockchain Security Researchers, Web 3 Developers,
					Gamers, and many more!
				</p>
				<br />
				<p>
					Riyeko Community will operate as a platform to connect with
					like-minded individuals.
				</p>
				<br />
				<p>
					Players will gain access to our online meetups, private discord
					channel and receive the latest updates on all of our projects!
				</p>
			</React.Fragment>
		),
	},
	{
		title: "p2e game",
		description: () => (
			<React.Fragment>
				<p>
					We’re building a highly competitive P2E Multiplayer online battle
					arena (MOBA) game. There will be multiple ARENAS, customizable
					Characters, and unlimited Private competitions in our game.
				</p>
				<br />
				<p>
					rypto tokens will be earned for every battle won and players have the
					option to stake their tokens on our platform and earn staking rewards!
				</p>
				<br />
				<p>
					Players will also be invited to participate in our Annual Street
					Challenge!
				</p>
				<br />
				<p>More Details will be announced in our private discord channel!</p>
			</React.Fragment>
		),
	},
	{
		title: "metaverse",
		description: () => (
			<React.Fragment>
				<p>
					Metaverse is rapidly gaining traction and we strongly believe that
					businesses from most if not all sectors will adopt it in the near
					future.
				</p>
				<br />
				<p>
					We’re seizing this opportunity by building a strong presence and
					community in this Space.
				</p>
				<br />
				<p>
					Riyeko will host meetups in the Metaverse for networking,
					collaboration, and updates on our projects.
				</p>
				<br />
				<p>
					We will also be releasing a list of projects that we’re building in
					the Metaverse on our Discord Channel.
				</p>
				<br />
				<p>
					What’s more? NFT holders can directly Vote for the projects they would
					like to contribute to.
				</p>
				<br />
				<p>
					Contributors will receive a bigger role in our projects and will be a
					part of our official team!
				</p>
				<br />
				<p>
					Join our discord channel for more information on how to be a
					Contributor!
				</p>
			</React.Fragment>
		),
	},
	{
		title: "street",
		description: () => (
			<React.Fragment>
				<p>
					Want to know something cool? We’re bringing an online store for all of
					Riyeko’s Merch!
				</p>
				<br />
				<p>
					From Hoodies to T-shirts and Snapbacks, Our community will be spoiled
					for choices.
				</p>
				<br />
				<p>Players will be given priority for all our Merch Drops.</p>
				<br />
				<p>Have a design in mind?</p>
				<br />
				<p>
					Send us your designs on our discord channel and we will try our best
					to make it part of our collection!
				</p>
				<br />
				<p>Hang tight!</p>
			</React.Fragment>
		),
	},
	{
		title: "dao",
		description: () => (
			<React.Fragment>
				<p>Comming Soon!</p>
			</React.Fragment>
		),
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
						initialSlide={1}
						autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
					>
						{data.map((item, i) => (
							<SwiperSlide key={item.title}>
								<RoadmapCard
									title={item.title}
									image={`/images/roadmap-${i + 1}.png`}
									description={item.description}
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
							description={item.description}
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
