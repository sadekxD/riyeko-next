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
					Our community will consist of NFT enthusiasts, crypto investors,
					startup founders, blockchain security researchers, Web3.0 developers,
					gamers, and more!
				</p>
				<br />
				<p>
					The Riyeko community will serve as a platform for connecting with
					others who share similar interests.
				</p>
				<br />
				<p>
					Players will gain access to our online meetups, private discord
					channel and receive the latest insights on all of our projects!
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
					arena (MOBA) game. With multiple ARENAS, customizable Characters, and
					unlimited Private competitions in our game!
				</p>
				<br />
				<p>
					Players can earn our native tokens for every battle they win! They can
					also choose to stake these tokens on our platform to earn staking
					rewards.
				</p>
				<br />
				<p>
					NFT holders will be eligible for our enhanced rewards program and have
					access to all features in our games, which will make their gaming
					experience more competitive and enjoyable
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
					The metaverse is gaining widespread attention and we believe that
					businesses from various industries will quickly adopt it.
				</p>
				<br />
				<p>
					We’re seizing this opportunity by building a strong presence and
					community in this Space.
				</p>
				<br />
				<p>
					Riyeko will host meetings in the metaverse for networking,
					collaboration, and updates on our projects.
				</p>
				<br />
				<p>
					We will also publish a list of the projects we are building in the
					metaverse on our Discord channel.
				</p>
				<br />
				<p>
					Additionally, NFT holders can vote for the projects they would like to
					contribute to.
				</p>
				<br />
				<p>
					Contributors will receive a bigger role in our projects and will be a
					part of our official team!
				</p>
				<br />
				<p>
					For more information on how to become a contributor, join our Discord
					channel.
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
				<p>Coming Soon!</p>
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
