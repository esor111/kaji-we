import { useState } from 'react';
import { Button, Icon } from '../../common';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose, navigation }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
      />
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <img src="/images/lorenz-logo.svg" alt="Lorenz" className={styles.logo} />
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
                            <a key={subItem.href} href={subItem.href} className={styles.subLink}>
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      ))
                    ) : (
                      item.children.map((subItem) => (
                        <a key={subItem.href} href={subItem.href} className={styles.subLink}>
                          {subItem.label}
                        </a>
                      ))
                    )}
                  </div>
                </>
              ) : (
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.footer}>
          <a href={`tel:${navigation.phone}`} className={styles.phone}>
            <Icon name="phone" size={20} />
            {navigation.phone}
          </a>
          <Button href="/contact" variant="primary" size="lg" className={styles.cta}>
            Book Service
          </Button>
        </div>
      </div>
    </>
  );
}
