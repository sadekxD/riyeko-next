import React from "react";

const RoadmapCard = ({ id }) => {
	return (
		<div className={`box box-${id}`} ref={boxRef} onClick={handleContent}>
			<div
				className="box-animate"
				style={{ width: dim.x, height: dim.y, opacity: active ? 1 : 0 }}
			></div>
			<div className="box-content">
				<h3 className="box-heading">NFT PROJECT</h3>
				<img src="/images/roadmap-1.png" alt="roadmap 1" />
			</div>
		</div>
	);
};

export default RoadmapCard;
