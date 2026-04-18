import { useRef, useState, useCallback, useEffect } from 'react';
import styles from './BeforeAfter.module.css';

export default function BeforeAfter({ beforeUrl, afterUrl, beforeLabel = 'Before', afterLabel = 'After' }) {
  const wrapRef = useRef(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e) => {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') return;
      if (e.key === '[') setPos((p) => Math.max(0, p - 5));
      if (e.key === ']') setPos((p) => Math.min(100, p + 5));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label="Before / After comparison"
    >
      <img src={afterUrl} alt={afterLabel} className={styles.imageBase} draggable={false} />
      <div className={styles.beforeWrap} style={{ width: `${pos}%` }}>
        <img src={beforeUrl} alt={beforeLabel} className={styles.imageBefore} draggable={false} />
      </div>

      <div className={styles.labelBefore} style={{ opacity: pos > 10 ? 1 : 0 }}>
        {beforeLabel}
      </div>
      <div className={styles.labelAfter} style={{ opacity: pos < 90 ? 1 : 0 }}>
        {afterLabel}
      </div>

      <div className={styles.divider} style={{ left: `${pos}%` }}>
        <div className={styles.handle}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(0 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
