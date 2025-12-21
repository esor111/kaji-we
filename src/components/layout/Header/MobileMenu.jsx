import { useState, useEffect, useRef } from 'react';
import { Button, Icon } from '../../common';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose, navigation }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  const toggleItem = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    
    // If it's a hash link, scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (href.startsWith('tel:')) {
      window.location.href = href;
    } else {
      // For other links, scroll to top or relevant section
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
      />
      <div 
        ref={menuRef}
        className={`${styles.menu} ${isOpen ? styles.open : ''}`}
      >
        <div className={styles.header}>
          <img src="/images/lorenz-logo.svg" alt="Waterproofing Nepal" className={styles.logo} />
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
            <Icon name="close" size={28} />
          </button>
        </div>

        <nav className={styles.nav}>
          {navigation.mainNav.map((item) => (
            <div key={item.label} className={styles.navItem}>
              {item.children ? (
                <>
                  <button 
                    className={styles.navButton}
                    onClick={() => toggleItem(item.label)}
                  >
                    {item.label}
                    <Icon 
                      name="arrowDown" 
                      size={20} 
                      className={expandedItem === item.label ? styles.rotated : ''}
                    />
                  </button>
                  <div className={`${styles.subMenu} ${expandedItem === item.label ? styles.expanded : ''}`}>
                    {item.label === 'Services' ? (
                      item.children.map((category) => (
                        <div key={category.category} className={styles.category}>
                          <span className={styles.categoryTitle}>{category.category}</span>
                          {category.items.map((subItem) => (
                            <a 
                              key={subItem.href} 
                              href="#services" 
                              className={styles.subLink}
                              onClick={(e) => handleLinkClick(e, '#services')}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      ))
                    ) : (
                      item.children.map((subItem) => (
                        <a 
                          key={subItem.href} 
                          href="#" 
                          className={styles.subLink}
                          onClick={(e) => handleLinkClick(e, '#')}
                        >
                          {subItem.label}
                        </a>
                      ))
                    )}
                  </div>
                </>
              ) : (
                <a 
                  href={item.label === 'Contact' ? '#contact' : '#'} 
                  className={styles.navLink}
                  onClick={(e) => handleLinkClick(e, item.label === 'Contact' ? '#contact' : '#')}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.footer}>
          <a 
            href="tel:9864488561" 
            className={styles.phone}
            onClick={(e) => handleLinkClick(e, 'tel:9864488561')}
          >
            <Icon name="phone" size={20} />
            986-448-8561
          </a>
          <Button 
            href="#contact" 
            variant="primary" 
            size="lg" 
            className={styles.cta}
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
}
