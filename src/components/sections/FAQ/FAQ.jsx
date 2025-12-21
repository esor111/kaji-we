import { useState } from 'react';
import { Container, Button, Icon } from '../../common';
import faqData from '../../../data/faq.json';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <img src="/images/about/guy.jpg" alt="Founder" className={styles.photo} />
            <blockquote className={styles.quote}>
              "प्रश्न छ? हामी यहाँ छौं। हाम्रो टोली तपाईंको प्रश्नको जवाफ दिन 
              र मार्गदर्शन प्रदान गर्न सधैं तयार छ।"
            </blockquote>
            <Button href="#contact" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
              सम्पर्क गर्नुहोस्
            </Button>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>बारम्बार सोधिने प्रश्नहरू</h2>
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
