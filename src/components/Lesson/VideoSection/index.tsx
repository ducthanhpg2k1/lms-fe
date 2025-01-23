import LoadingContainer from '@/components/UI/LoadingContainer';
import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-hls-quality-selector';
import 'videojs-contrib-quality-levels';

const VideoSection = ({ info, loading }: { loading: boolean; info: any }) => {
  const videoRef: any = useRef(null);
  const playerRef: any = useRef(null);

  const [progressVideo, setProgressVideo] = useState(0)

  console.log(progressVideo, 'progressVideo');


  useEffect(() => {
    // Initialize player if it doesn't exist
    if (!playerRef.current) {
      const videoElement = document.createElement('video');
      videoElement.className = 'video-js vjs-big-play-centered';
      videoElement.controls = true;
      videoElement.preload = 'auto';
      videoElement.crossOrigin = 'anonymous';

      // Replace old video element with new one
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement);


      }

      const options = {
        controls: true,
        responsive: true,
        fluid: true,
        autoplay: false,
        preload: 'auto',
        html5: {
          hls: {
            enableLowInitialPlaylist: true,
            smoothQualityChange: true,
            overrideNative: true,
          },
          nativeVideoTracks: false,
          nativeAudioTracks: false,
          nativeTextTracks: false,
        },
      };

      try {
        playerRef.current = videojs(
          videoElement,
          options,
          function onPlayerReady() {
            playerRef.current.hlsQualitySelector();
            console.log('Player is ready');
          }
        );

        playerRef.current.on('error', function (error: any) {
          console.error('Video player error:', error);
        });
      } catch (error) {
        console.error('Player initialization error:', error);
      }
    }

    // Update source when URL changes
    if (playerRef.current && info?.urlVideo) {
      const handleTimeUpdate = () => {
        const currentTime = playerRef.current.currentTime();
        const duration = playerRef.current.duration();
        const progress = (currentTime / duration) * 100;

        if (progress >= 80) {
          console.log('Video has reached 80% of its duration');
          setProgressVideo(progress)
          playerRef.current.off('timeupdate', handleTimeUpdate);
        }
      }

      try {
        playerRef.current.src({
          src: info.urlVideo,
          type: determineVideoType(info.urlVideo),
        });
        playerRef.current.on('timeupdate', handleTimeUpdate);

      } catch (error) {
        console.error('Error updating video source:', error);
      }
    }


    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.dispose();
          playerRef.current = null;
        } catch (error) {
          console.error('Error disposing player:', error);
        }
      }
    };
  }, [info?.urlVideo]);

  const determineVideoType = (url: string): string => {
    if (url.includes('.m3u8')) return 'application/x-mpegURL';
    if (url.includes('.mp4')) return 'video/mp4';
    if (url.includes('.webm')) return 'video/webm';
    return 'video/mp4';
  };

  return (
    <div className="video-container relative">
      <LoadingContainer loading={loading} />
      <div ref={videoRef} />
    </div>
  );
};

export default VideoSection;
