import React, { useState, useRef } from "react";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import chillHop from "../../data/data";
import InputRange from "react-input-range";

const MusicPlayer = () => {
	const audioRef = useRef(null);
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	const playSongHandler = (e) => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

		//Skip Forward
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		}

		//Skip Back
		if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				if (isPlaying) audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
		}
		if (isPlaying) audioRef.current.play();
	};

	const dragHandler = (value) => {
		audioRef.current.currentTime = value;
		setSongInfo({ ...songInfo, currentTime: value });
	};

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		//Calculate Percentage
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);

		setSongInfo({
			...songInfo,
			currentTime: current,
			duration: duration,
			animationPercentage: animation,
		});
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		setCurrentSong(songs[(currentIndex + 1) % songs.length]);

		setTimeout(() => {
			if (isPlaying) audioRef.current.play();
		}, 1000);
		console.log(audioRef);
		// skipTrackHandler("skip-forward");
	};

	return (
		<div id="player" className={`${isPlaying ? "active" : ""}`}>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}
			></audio>
			<img src="/images/player-img.png" alt="player" />

			<p className="music-name">{currentSong?.name}</p>

			<div className="player-controls">
				<div className="prev" onClick={() => skipTrackHandler("skip-back")}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23.25 18.75L12 12L23.25 5.25V18.75ZM12 18.75L0.75 12L12 5.25V18.75Z"
							fill="black"
						/>
					</svg>
				</div>

				<InputRange
					maxValue={songInfo?.duration}
					minValue={0}
					value={songInfo?.currentTime}
					draggableTrack={true}
					onChange={(value) => dragHandler(value)}
				/>

				<div className="next" onClick={() => skipTrackHandler("skip-forward")}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.75 5.25L12 12L0.75 18.75V5.25ZM12 5.25L23.25 12L12 18.75L12 5.25Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>
			<div className="play-pause" onClick={playSongHandler}>
				{!isPlaying ? <IoIosPlay color="#000" /> : <IoIosPause color="#000" />}
			</div>
		</div>
	);
};

export default MusicPlayer;
