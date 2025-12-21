import { Container, Button, Icon } from '../../common';
import styles from './HonestService.module.css';

export default function HonestService() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/images/honest/technician-van.webp" alt="Waterproofing Expert" />
          </div>

          <div className={styles.content}>
            <h2>तपाईंको घरको सुरक्षाको लागि विश्वसनीय Waterproofing सेवा</h2>
            <p>
              हामी विश्वास गर्छौं कि हरेक घरले उत्तम सुरक्षा पाउनु पर्छ। 
              इमानदार मूल्य, गुणस्तरीय काम, र तपाईंको घरलाई आफ्नै जस्तो व्यवहार - 
              यही हाम्रो प्रतिबद्धता हो। हाम्रो अनुभवी टोली तपाईंको सेवामा सधैं तत्पर छ।
            </p>
            <Button href="#contact" variant="primary" icon={<Icon name="arrowRight" size={16} />}>
              Appointment लिनुहोस्
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
