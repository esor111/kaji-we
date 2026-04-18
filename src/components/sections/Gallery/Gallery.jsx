import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from '../../../lib/supabase';
import { Container, SectionHeader } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import GalleryCard from './GalleryCard';
import Lightbox from './Lightbox';
import { SAMPLE_GALLERY } from './sampleGallery';
import styles from './Gallery.module.css';

const PROJECT_TYPES_NE = {
  All: 'सबै',
  Basement: 'बेसमेन्ट',
  Roof: 'छत',
  Wall: 'पर्खाल',
  Bathroom: 'बाथरूम',
  Foundation: 'जग',
  Terrace: 'टेरेस',
  Other: 'अन्य',
};

export default function Gallery() {
  const { language } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase
          .from('gallery')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        if (cancelled) return;
        setItems(data && data.length ? data : SAMPLE_GALLERY);
      } catch (err) {
        if (!cancelled) setItems(SAMPLE_GALLERY);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.project_type).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return items;
    return items.filter((i) => i.project_type === activeFilter);
  }, [items, activeFilter]);

  const labelFor = (key) =>
    language === 'ne' ? (PROJECT_TYPES_NE[key] || key) : key;

  if (loading) {
    return (
      <section id="gallery" className={styles.section}>
        <Container>
          <div className={styles.loading}>
            {language === 'ne' ? 'लोड हुँदैछ...' : 'Loading gallery...'}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="gallery" className={styles.section}>
      <Container>
        <SectionHeader
          label={language === 'ne' ? 'हाम्रा परियोजनाहरू' : 'Our Projects'}
          title={language === 'ne' ? 'परियोजना ग्यालेरी' : 'Project Gallery'}
          description={
            language === 'ne'
              ? 'हामीले पूरा गरेका वाटरप्रूफिङ परियोजनाहरू नजिकबाट हेर्नुहोस्।'
              : 'A closer look at waterproofing projects we have completed across Nepal.'
          }
        />

        <div className={styles.filterBar} role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat}
              className={`${styles.filterChip} ${activeFilter === cat ? styles.filterChipActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {labelFor(cat)}
              <span className={styles.filterCount}>
                {cat === 'All'
                  ? items.length
                  : items.filter((i) => i.project_type === cat).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          className={styles.grid}
          layout
          key={activeFilter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {filtered.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              language={language}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            {language === 'ne' ? 'यस श्रेणीमा फोटो छैन।' : 'No photos in this category.'}
          </div>
        )}
      </Container>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            startIndex={lightboxIndex}
            language={language}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
