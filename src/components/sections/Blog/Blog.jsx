import { Container, SectionHeader, Button, Icon } from '../../common';
import BlogCard from './BlogCard';
import blogData from '../../../data/blog.json';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            label="Blog"
            title="Your Home Services Hub"
            description="Tips, guides, and insights to help you maintain your home."
          />
          <Button href="/blog" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
            View All Articles
          </Button>
        </div>

        <div className={styles.grid}>
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
