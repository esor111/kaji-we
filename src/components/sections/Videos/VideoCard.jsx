import { useState } from 'react';
import styles from './VideoCard.module.css';

export default function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Use youtube_id from Supabase (snake_case)
  const youtubeId = video.youtube_id || video.youtubeId;
  const projectType = video.project_type || video.projectType;
  
  // YouTube thumbnail URL
  const thumbnailUrl = video.thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div className={styles.card}>
      <div className={styles.videoWrapper}>
        {!isPlaying ? (
          <>
            <img 
              src={thumbnailUrl} 
              alt={video.title}
              className={styles.thumbnail}
            />
            <button 
              className={styles.playButton}
              onClick={handlePlay}
              aria-label="Play video"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            {video.featured && (
              <span className={styles.badge}>Featured</span>
            )}
          </>
        ) : (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      <div className={styles.content}>
        <span className={styles.type}>{projectType}</span>
        <h3 className={styles.title}>{video.title}</h3>
        <p className={styles.description}>{video.description}</p>
      </div>
    </div>
  );
}
