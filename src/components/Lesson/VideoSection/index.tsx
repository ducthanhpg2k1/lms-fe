import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoSection = ({ info }: { info: any }) => {
  const videoRef: any = useRef(null);
  const playerRef: any = useRef(null);

  useEffect(() => {
    if (info?.urlVideo && videoRef.current && !playerRef.current) {
      // Log URL để debug
      console.log('Video URL:', info.urlVideo);

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
        sources: [
          {
            src: info.urlVideo,
            type: determineVideoType(info.urlVideo),
          },
        ],
      };

      // Khởi tạo player với error handling
      try {
        playerRef.current = videojs(
          videoRef.current,
          options,
          function onPlayerReady() {
            console.log('Player is ready');

            // Kiểm tra source loaded
            this.on('loadedmetadata', function () {
              console.log('Video metadata loaded');
            });

            // Log tất cả các events
            this.on('all', function (event: string) {
              console.log('Player event:', event);
            });
          }
        );

        // Error handling
        playerRef.current.on('error', function (error: any) {});
      } catch (error) {
        console.error('Player initialization error:', error);
      }
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.dispose();
        } catch (error) {
          console.error('Error disposing player:', error);
        }
        playerRef.current = null;
      }
    };
  }, [info?.urlVideo]);

  // Hàm xác định loại video
  const determineVideoType = (url: string): string => {
    if (url.includes('.m3u8')) return 'application/x-mpegURL';
    if (url.includes('.mp4')) return 'video/mp4';
    if (url.includes('.webm')) return 'video/webm';
    // Mặc định return mp4 nếu không xác định được
    return 'video/mp4';
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        controls
        preload="auto"
        crossOrigin="anonymous" // Thêm CORS attribute
      />
    </div>
  );
};

export default VideoSection;
