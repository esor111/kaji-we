import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the data to your backend
  };

  if (submitted) {
    return (
      <div className={styles.form}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h3>धन्यवाद!</h3>
          <p>हामी तपाईंलाई छिट्टै सम्पर्क गर्नेछौं।</p>
          {onClose && (
            <button onClick={onClose} className={styles.closeBtn}>
              बन्द गर्नुहोस्
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Free Quote पाउनुहोस्</h3>
      <p className={styles.subtitle}>हामी २४ घण्टा भित्र सम्पर्क गर्नेछौं</p>
      
      <div className={styles.field}>
        <input
          type="text"
          name="name"
          placeholder="तपाईंको नाम"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <input
          type="tel"
          name="phone"
          placeholder="फोन नम्बर"
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">सेवा छान्नुहोस्</option>
          <option value="basement">Basement Waterproofing</option>
          <option value="roof">Roof Waterproofing</option>
          <option value="wall">Wall Waterproofing</option>
          <option value="foundation">Foundation Repair</option>
          <option value="bathroom">Bathroom Waterproofing</option>
          <option value="other">अन्य</option>
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Book Now
      </button>

      <p className={styles.note}>
        🔒 तपाईंको जानकारी सुरक्षित छ
      </p>
    </form>
  );
}
