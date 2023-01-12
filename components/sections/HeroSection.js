import React, { useRef, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero">
      <video
        src="/videos/bg-video.mp4"
        autoPlay
        muted
        loop
        controls={false}
      ></video>
      <div className="container">
        <div className="header">
          <Link href="/">
            <img src="/images/logo-main.png" alt="logo" className="logo" />
          </Link>
          {/* <button className="wl-btn">PLAYER LIST(WL)</button> */}
        </div>
        <Link href="/about">
          <button className="hero-cta">ENTER</button>
        </Link>
        {/* <Link href="/whitelist">
          <button className="wl-btn">PLAYER LIST(WL)</button>
        </Link> */}
      </div>
    </section>
  );
};

export default HeroSection;
