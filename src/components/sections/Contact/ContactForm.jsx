import { useState } from 'react';
import { Button, Icon } from '../../common';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: '',
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className={styles.form}>
      <div className={styles.progress}>
        {[1, 2, 3].map((num) => (
          <div 
            key={num} 
            className={`${styles.progressStep} ${step >= num ? styles.active : ''}`}
          >
            {num}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className={styles.step}>
          <h3>What's your ZIP code?</h3>
          <p>Let us know where you're located so we can serve you better.</p>
          <input
            type="text"
            name="zipCode"
            placeholder="Enter ZIP Code"
            value={formData.zipCode}
            onChange={handleChange}
            className={styles.input}
          />
          <Button onClick={nextStep} variant="primary" className={styles.btn}>
            Continue
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <h3>Contact Information</h3>
          <p>How can we reach you?</p>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.buttons}>
            <Button onClick={prevStep} variant="outline" className={styles.btn}>
              Back
            </Button>
            <Button onClick={nextStep} variant="primary" className={styles.btn}>
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.step}>
          <h3>What service do you need?</h3>
          <p>Select the type of service you're looking for.</p>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select a service</option>
            <option value="plumbing">Plumbing</option>
            <option value="heating">Heating</option>
            <option value="ac">Air Conditioning</option>
            <option value="sewer">Sewer & Drain</option>
            <option value="other">Other</option>
          </select>
          <div className={styles.buttons}>
            <Button onClick={prevStep} variant="outline" className={styles.btn}>
              Back
            </Button>
            <Button variant="secondary" className={styles.btn}>
              Submit Request
            </Button>
          </div>
        </div>
      )}

      <div className={styles.badges}>
        <Icon name="google" size={24} />
        <Icon name="facebook" size={24} />
        <span>A+ BBB Rating</span>
      </div>
    </div>
  );
}
