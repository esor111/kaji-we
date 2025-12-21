import { Container, Icon } from '../../common';
import styles from './Footer.module.css';

const socialLinks = [
  { name: 'facebook', href: 'https://facebook.com/lorenzphac', label: 'Facebook' },
  { name: 'tiktok', href: 'https://tiktok.com/@lorenzphac', label: 'TikTok' },
  { name: 'google', href: 'https://g.page/lorenzphac', label: 'Google' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <div className={styles.brand}>
            <img 
              src="/images/lorenz-logo-white.svg" 
              alt="Waterproofing Nepal" 
              className={styles.logo} 
            />
            <p className={styles.tagline}>
              तपाईंको घरको सुरक्षाको लागि विश्वसनीय waterproofing सेवा।
            </p>
            <div className={styles.social}>
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  {link.name === 'tiktok' ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  ) : (
                    <Icon name={link.name} size={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contact}>
            <a href="tel:9864488561" className={styles.phone}>
              <Icon name="phone" size={18} />
              <span>986-448-8561</span>
            </a>
            <p className={styles.address}>
              Kathmandu, Nepal
            </p>
            <span className={styles.badge}>24/7 Emergency Service</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Waterproofing Nepal
          </p>
          <div className={styles.legal}>
            <a href="#privacy">Privacy</a>
            <span className={styles.dot}>·</span>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
