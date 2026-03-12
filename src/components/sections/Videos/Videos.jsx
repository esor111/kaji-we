import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { Container, SectionHeader, Button, Icon } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import VideoCard from './VideoCard';
import styles from './Videos.module.css';

export default function Videos() {
  const { t, language } = useTranslation();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Show sample videos if database not set up yet
      setVideos([
        {
          id: 1,
          title: "Sample Video - Setup Supabase to see real videos",
          youtube_id: "dQw4w9WgXcQ",
          description: "Follow SUPABASE_SETUP.md to connect your database",
          project_type: "Basement",
          featured: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="videos" className={styles.section}>
        <Container>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            Loading videos...
          </div>
        </Container>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section id="videos" className={styles.section}>
        <Container>
          <SectionHeader
            label={language === 'ne' ? 'हाम्रो काम' : 'Our Work'}
            title={language === 'ne' ? 'परियोजना भिडियोहरू' : 'Project Videos'}
            description={language === 'ne' 
              ? 'हाम्रो पूरा गरिएका waterproofing परियोजनाहरू हेर्नुहोस्'
              : 'Watch our completed waterproofing projects'}
          />
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p>No videos yet. Add videos in the admin panel!</p>
            <a href="/admin" style={{ color: '#667eea', textDecoration: 'underline' }}>
              Go to Admin Panel
            </a>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="videos" className={styles.section}>
      <Container>
        <SectionHeader
          label={language === 'ne' ? 'हाम्रो काम' : 'Our Work'}
          title={language === 'ne' ? 'परियोजना भिडियोहरू' : 'Project Videos'}
          description={language === 'ne' 
            ? 'हाम्रो पूरा गरिएका waterproofing परियोजनाहरू हेर्नुहोस्'
            : 'Watch our completed waterproofing projects'}
        />

        <div className={styles.grid}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className={styles.cta}>
          <Button 
            href="#contact" 
            variant="primary" 
            size="lg"
            icon={<Icon name="arrowRight" size={18} />}
          >
            {language === 'ne' ? 'आफ्नो परियोजना सुरु गर्नुहोस्' : 'Start Your Project'}
          </Button>
        </div>
      </Container>
    </section>
  );
}
