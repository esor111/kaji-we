import { Container, SectionHeader } from '../../common';
import VideoCard from './VideoCard';
import styles from './Blog.module.css';

const videos = [
  {
    id: 1,
    title: "HVAC Maintenance Tips",
    url: "https://www.youtube.com/watch?v=-j0rjlfmDx4",
    videoId: "-j0rjlfmDx4"
  },
  {
    id: 2,
    title: "Plumbing Basics",
    url: "https://www.youtube.com/watch?v=3I9Wnc78qvw",
    videoId: "3I9Wnc78qvw"
  },
  {
    id: 3,
    title: "Home Services Guide",
    url: "https://www.youtube.com/watch?v=GegwAs7GXwg",
    videoId: "GegwAs7GXwg"
  }
];

export default function Blog() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            label="Videos"
            title="Your Home Services Hub"
            description="Watch our helpful videos on home maintenance and services."
          />
        </div>

        <div className={styles.grid}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Container>
    </section>
  );
}
