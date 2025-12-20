import { Container, Icon } from '../../common';
import styles from './Footer.module.css';

const socialLinks = [
  { name: 'facebook', href: 'https://facebook.com/lorenzphac', label: 'Facebook' },
  { name: 'tiktok', href: 'https://tiktok.com/@lorenzphac', label: 'TikTok' },
  { name: 'google', href: 'https://g.page/lorenzphac', label: 'Google' },
];

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        {/* Main Footer Content */}
        <div className={styles.main}>
          {/* Brand & Tagline */}
          <div className={styles.brand}>
            <img 
              src="/images/lorenz-logo-white.svg" 
              alt="Lorenz Plumbing Heating & Air" 
              className={styles.logo} 
            />
            <p className={styles.tagline}>
              Your friends in plumbing, heating & air since 1978.
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

          {/* Quick Links */}
          <nav className={styles.nav}>
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className={styles.contact}>
            <a href="tel:4174413517" className={styles.phone}>
              <Icon name="phone" size={18} />
              <span>(417) 441-3517</span>
            </a>
            <p className={styles.address}>
              1429 N Cedarbrook Ave<br />
              Springfield, MO 65802
            </p>
            <span className={styles.badge}>24/7 Emergency Service</span>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Lorenz Plumbing Heating & Air
          </p>
          <div className={styles.legal}>
            <a href="/privacy-policy">Privacy</a>
            <span className={styles.dot}>·</span>
            <a href="/terms-conditions">Terms</a>
            <span className={styles.dot}>·</span>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
