import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-hls-quality-selector';

const VideoSection = () => {
  const videoRef: any = useRef(null);
  const playerRef: any = useRef(null);

  const options = {
    controls: true,
    autoplay: false,
    preload: 'auto',
    playbackRates: [0.5, 1, 1.5, 2],
    poster: 'https://picsum.photos/600/400',
    sources: [
      {
        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        type: 'application/x-mpegURL',
      },
    ],
  };

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      const videoElement = videoRef.current;
      playerRef.current = videojs(videoElement, options, () => {
        console.log('Player is ready');
      });

      playerRef.current.hlsQualitySelector({
        displayCurrentQuality: true,
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-js" />
    </div>
  );
};
export default VideoSection;
