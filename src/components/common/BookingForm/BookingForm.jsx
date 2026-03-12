import { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './BookingForm.module.css';

export default function BookingForm({ onClose }) {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('bookings')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          service: formData.service,
          message: formData.message || null
        }]);
      
      if (error) throw error;
      
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        if (onClose) onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.form}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h3>{language === 'ne' ? 'धन्यवाद!' : 'Thank You!'}</h3>
          <p>
            {language === 'ne' 
              ? 'हामी तपाईंलाई छिट्टै सम्पर्क गर्नेछौं।' 
              : 'We will contact you soon.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>
        {language === 'ne' ? 'Free Quote पाउनुहोस्' : 'Get Free Quote'}
      </h3>
      <p className={styles.subtitle}>
        {language === 'ne' 
          ? 'हामी २४ घण्टा भित्र सम्पर्क गर्नेछौं' 
          : 'We will contact you within 24 hours'}
      </p>
      
      <div className={styles.field}>
        <input
          type="text"
          name="name"
          placeholder={language === 'ne' ? 'तपाईंको नाम' : 'Your Name'}
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
          placeholder={language === 'ne' ? 'फोन नम्बर' : 'Phone Number'}
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <input
          type="email"
          name="email"
          placeholder={language === 'ne' ? 'इमेल (वैकल्पिक)' : 'Email (Optional)'}
          value={formData.email}
          onChange={handleChange}
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
          <option value="">
            {language === 'ne' ? 'सेवा छान्नुहोस्' : 'Select Service'}
          </option>
          <option value="basement">Basement Waterproofing</option>
          <option value="roof">Roof Waterproofing</option>
          <option value="wall">Wall Waterproofing</option>
          <option value="foundation">Foundation Repair</option>
          <option value="bathroom">Bathroom Waterproofing</option>
          <option value="other">
            {language === 'ne' ? 'अन्य' : 'Other'}
          </option>
        </select>
      </div>

      <div className={styles.field}>
        <textarea
          name="message"
          placeholder={language === 'ne' ? 'सन्देश (वैकल्पिक)' : 'Message (Optional)'}
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className={styles.textarea}
        />
      </div>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading 
          ? (language === 'ne' ? 'पठाउँदै...' : 'Sending...') 
          : (language === 'ne' ? 'Book Now' : 'Book Now')}
      </button>

      <p className={styles.note}>
        🔒 {language === 'ne' 
          ? 'तपाईंको जानकारी सुरक्षित छ' 
          : 'Your information is secure'}
      </p>
    </form>
  );
}
