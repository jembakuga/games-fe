import React, { useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ m3u8Url }) => {
  const videoRef = useRef(null);
  console.log(m3u8Url);
  const playVideo = () => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = m3u8Url;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }
  };

  return (
    <div>
      <video ref={videoRef} controls width="800" height="400"></video><br />
      <button onClick={playVideo}>Play Video</button>
    </div>
  );
};

export default VideoPlayer;
