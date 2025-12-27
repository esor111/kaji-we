import styles from './VideoCard.module.css';

export default function VideoCard({ video }) {
  return (
    <div className={styles.card}>
      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content}>
        <h3>{video.title}</h3>
      </div>
    </div>
  );
}
