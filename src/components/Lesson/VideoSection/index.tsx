import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoSection = () => {
  const videoRef: any = useRef(null);
  const playerRef: any = useRef(null);

  const options = {
    controls: true, // Hiển thị các nút điều khiển (play, pause, volume, v.v.)
    autoplay: false, // Tự động phát khi tải
    preload: 'auto', // Tải trước video
    fluid: true, // Video tự động điều chỉnh theo kích thước container
    poster: 'https://picsum.photos/600/400',
    sources: [
      {
        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', // URL video (HLS, MP4, v.v.)
        type: 'application/x-mpegURL', // Loại video, ví dụ: HLS
      },
    ],
  };

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, options);
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [options]);
  return (
    <div>
      <video ref={videoRef} className="video-js" />
    </div>
  );
};
export default VideoSection;
