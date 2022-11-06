import React from "react";

const StreetSection = () => {
	return (
		<section id="street">
			<img src="/images/street-z-1.png" alt="zz" className="street-z-1" />
			<img src="/images/street-z-2.png" alt="zz" className="street-z-2" />
			<div className="container">
				<img src="/images/street-img.png" alt="street" className="pc" />
				<img
					src="/images/street-img-2.png"
					alt="street mobile"
					className="mobile"
				/>
			</div>
			<svg
				onClick={() => {
					window.scrollTo(0, 0);
				}}
				className="scroll-top"
				width="32"
				height="29"
				viewBox="0 0 32 29"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				cursor="pointer"
			>
				<path
					d="M15.3679 12.4484L1.41042 26.3351C0.799314 26.9444 0.799314 27.9317 1.41042 28.5425C2.02152 29.1519 3.01411 29.1519 3.62522 28.5425L16.4753 15.7573L29.3253 28.541C29.9364 29.1503 30.929 29.1503 31.5417 28.541C32.1528 27.9317 32.1528 26.9429 31.5417 26.3336L17.5843 12.4469C16.9795 11.8469 15.9713 11.8469 15.3679 12.4484Z"
					fill="white"
				/>
				<path
					d="M15.3679 1.1652L1.41042 15.0519C0.799314 15.6612 0.799314 16.6485 1.41042 17.2593C2.02152 17.8687 3.01411 17.8687 3.62522 17.2593L16.4753 4.47412L29.3253 17.2578C29.9364 17.8671 30.929 17.8671 31.5417 17.2578C32.1528 16.6485 32.1528 15.6597 31.5417 15.0504L17.5843 1.16366C16.9795 0.56368 15.9713 0.56368 15.3679 1.1652Z"
					fill="white"
				/>
			</svg>
		</section>
	);
};

export default StreetSection;
