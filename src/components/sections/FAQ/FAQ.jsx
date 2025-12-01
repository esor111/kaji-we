import { useState } from 'react';
import { Container, Button, Icon } from '../../common';
import faqData from '../../../data/faq.json';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <img src="/images/faq/mike.webp" alt="Mike" className={styles.photo} />
            <blockquote className={styles.quote}>
              "Have questions? We're here to help. Our team is always ready to answer 
              your questions and provide the guidance you need."
            </blockquote>
            <Button href="/faq" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
              See All Questions
            </Button>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
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
