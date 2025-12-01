import { useState } from 'react';
import { Container, SectionHeader, Icon } from '../../common';
import process from '../../../data/process.json';
import styles from './Process.module.css';

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className={styles.process}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/images/process/woman-phone.webp" alt="Customer on phone" />
          </div>

          <div className={styles.content}>
            <SectionHeader
              label="Our Process"
              title="A Process That Works"
              description="We make it easy to get the help you need."
            />

            <div className={styles.steps}>
              {process.map((step) => (
                <div 
                  key={step.id}
                  className={`${styles.step} ${activeStep === step.id ? styles.active : ''}`}
                >
                  <button 
                    className={styles.stepHeader}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    <div className={styles.stepNumber}>
                      <span>{step.step}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <Icon 
                      name="arrowDown" 
                      size={20} 
                      className={styles.arrow}
                    />
                  </button>
                  <div className={styles.stepContent}>
                    <p>{step.description}</p>
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
