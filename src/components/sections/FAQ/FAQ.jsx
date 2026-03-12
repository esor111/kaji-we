import { useState } from 'react';
import { Container, Button, Icon } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import faqData from '../../../data/faq.json';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(1);

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <img src="/images/about/guy.jpg" alt="Founder" className={styles.photo} />
            <blockquote className={styles.quote}>
              {t('faq.quote')}
            </blockquote>
            <Button href="#contact" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
              {t('faq.contact')}
            </Button>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>{t('faq.title')}</h2>
            <div className={styles.accordion}>
              {faqData.map((item) => (
                <div 
                  key={item.id} 
                  className={`${styles.item} ${openId === item.id ? styles.open : ''}`}
                >
                  <button 
                    className={styles.question}
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    aria-expanded={openId === item.id}
                  >
                    <span>{item.question}</span>
                    <Icon name="arrowDown" size={20} className={styles.arrow} />
                  </button>
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
