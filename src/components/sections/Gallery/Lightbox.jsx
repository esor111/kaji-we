import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BeforeAfter from './BeforeAfter';
import styles from './Lightbox.module.css';

export default function Lightbox({ items, startIndex = 0, language, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);
  const [showBefore, setShowBefore] = useState(false);
  const [captionOpen, setCaptionOpen] = useState(true);
  const stripRef = useRef(null);

  const current = items[index];
  const total = items.length;

  const goTo = useCallback((next) => {
    const clamped = ((next % total) + total) % total;
    setDirection(next > index ? 1 : -1);
    setIndex(clamped);
    setShowBefore(false);
  }, [index, total]);

  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);
  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'b' || e.key === 'B') {
        if (current?.before_url) setShowBefore((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext, onClose, current]);

  // Prevent body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Auto-scroll thumbnail strip to active item
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const active = strip.querySelector(`[data-thumb-index="${index}"]`);
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [index]);

  if (!current) return null;

  const title = language === 'ne'
    ? (current.title_ne || current.title || '')
    : (current.title_en || current.title || '');
  const description = language === 'ne'
    ? (current.description_ne || current.description || '')
    : (current.description_en || current.description || '');

  const handleDragEnd = (_e, info) => {
    const swipePower = info.offset.x * (info.velocity.x ? 1 : 0.5);
    if (info.offset.x < -80 || info.velocity.x < -500) goNext();
    else if (info.offset.x > 80 || info.velocity.x > 500) goPrev();
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.98 }),
  };

  return createPortal(
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop (click to close) */}
      <motion.div
        className={styles.backdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>{String(index + 1).padStart(2, '0')}</span>
          <span className={styles.counterDivider}>/</span>
          <span className={styles.counterTotal}>{String(total).padStart(2, '0')}</span>
        </div>

        <div className={styles.topActions}>
          {current.before_url && (
            <button
              type="button"
              className={`${styles.topButton} ${showBefore ? styles.topButtonActive : ''}`}
              onClick={() => setShowBefore((v) => !v)}
              aria-pressed={showBefore}
            >
              <span className={styles.splitIcon} aria-hidden="true">
                <span /><span />
              </span>
              {language === 'ne' ? 'पहिले / पछि' : 'Before / After'}
            </button>
          )}
          <button
            type="button"
            className={styles.topButton}
            onClick={() => setCaptionOpen((v) => !v)}
            aria-pressed={captionOpen}
            aria-label={language === 'ne' ? 'विवरण देखाउनुहोस्' : 'Toggle info'}
            title={language === 'ne' ? 'विवरण' : 'Info'}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.topButton} ${styles.closeButton}`}
            onClick={onClose}
            aria-label={language === 'ne' ? 'बन्द गर्नुहोस्' : 'Close'}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav arrows (desktop) */}
      <button
        type="button"
        className={`${styles.navArrow} ${styles.navPrev}`}
        onClick={goPrev}
        aria-label={language === 'ne' ? 'अघिल्लो' : 'Previous'}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        className={`${styles.navArrow} ${styles.navNext}`}
        onClick={goNext}
        aria-label={language === 'ne' ? 'अर्को' : 'Next'}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Stage */}
      <div className={styles.stage}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current.id}
            className={styles.stageInner}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
          >
            {current.before_url && showBefore ? (
              <BeforeAfter
                beforeUrl={current.before_url}
                afterUrl={current.image_url}
                beforeLabel={language === 'ne' ? 'पहिले' : 'Before'}
                afterLabel={language === 'ne' ? 'पछि' : 'After'}
              />
            ) : (
              <motion.img
                key={current.image_url}
                src={current.image_url}
                alt={title}
                className={styles.image}
                layoutId={`gallery-image-${current.id}`}
                draggable={false}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Caption panel */}
      <AnimatePresence>
        {captionOpen && (
          <motion.div
            className={styles.caption}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.captionMeta}>
              {current.project_type && (
                <span className={styles.chip}>{current.project_type}</span>
              )}
              {current.location && (
                <span className={styles.location}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {current.location}
                </span>
              )}
            </div>
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumbnail strip */}
      <div className={styles.thumbStrip} ref={stripRef}>
        <div className={styles.thumbStripInner}>
          {items.map((it, i) => {
            const isActive = i === index;
            return (
              <button
                key={it.id}
                type="button"
                data-thumb-index={i}
                className={`${styles.thumb} ${isActive ? styles.thumbActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`View ${i + 1}`}
                aria-current={isActive}
              >
                <img src={it.image_url} alt="" loading="lazy" />
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>,
    document.body
  );
}
