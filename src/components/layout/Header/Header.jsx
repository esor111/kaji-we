import { useState, useEffect } from 'react';
import { Container, Button, Icon } from '../../common';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import navigation from '../../../data/navigation.json';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.inner}>
          <a href="/" className={styles.logo}>
            <img src="/images/lorenz-logo.svg" alt="Lorenz Plumbing Heating & Air" />
          </a>

          <nav className={styles.nav}>
            {navigation.mainNav.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && <Icon name="arrowDown" size={16} />}
                </a>
                {item.children && activeDropdown === item.label && (
                  <MegaMenu items={item.children} isServices={item.label === 'Services'} />
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={`tel:${navigation.phone}`} className={styles.phone}>
              <Icon name="phone" size={18} />
              <span>Call Us Today</span>
              <strong>{navigation.phone}</strong>
            </a>
            <Button href="/contact" variant="primary" icon={<Icon name="arrowRight" size={16} />}>
              Book Service
            </Button>
            <button className={styles.searchBtn} aria-label="Search">
              <Icon name="search" size={20} />
            </button>
          </div>

          <button 
            className={styles.menuBtn}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" size={28} />
          </button>
        </div>
      </Container>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
}
