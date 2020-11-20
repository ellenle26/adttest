import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";

const Movies = () => {
  const videoPlayerRef = useRef(null);
  const videoSrc =
    "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
  const videoJSOptions = {
    autoplay: false,
    controls: true,
    userActions: { hotkeys: true },
    playbackRates: [0.5, 1, 1.5, 2],
  };
  let player;
  useEffect(() => {
    if (videoPlayerRef) {
      player = videojs(videoPlayerRef.current, videoJSOptions, () => {
        player.src(videoSrc);
      });
    }
  }, []);

  return (
    <>
      <div className="container horizontalCenter">
        {Array.from({ length: 8 }, (value, index) => (
          <div className="movieCard verticalCenter">
            <img
              alt="thumbnail"
              src="../../images/film.png"
              className="thumbnail"
            />
            <h3>THE DURIAN MOVIE PROJECT</h3>
            <div>The film was supported by "The Netherlands Film Fund"</div>
            <br />
            <a
              href="#"
              onClick={() => {
                document.getElementById("video").hidden = false;
              }}
            >
              Xem ngay
            </a>
          </div>
        ))}
      </div>
      <div id="video" hidden>
        <div
          className="horizontalCenter"
          onClick={() => {
            player.pause();
            document.getElementById("video").hidden = true;
          }}
          style={{ width: "100%", height: "5%" }}
        >
          x Close
        </div>
        <div
          className="verticalCenter"
          style={{ width: "100%", height: "15%" }}
        >
          <h3>THE DURIAN MOVIE PROJECT</h3>
          <div>The film was supported by "The Netherlands Film Fund"</div>
        </div>
        <video ref={videoPlayerRef} className="video-js" />;
      </div>
    </>
  );
};

export default Movies;
