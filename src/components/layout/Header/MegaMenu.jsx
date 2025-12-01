import styles from './MegaMenu.module.css';

export default function MegaMenu({ items, isServices }) {
  if (isServices) {
    return (
      <div className={styles.megaMenu}>
        <div className={styles.megaMenuInner}>
          {items.map((category) => (
            <div key={category.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <ul className={styles.categoryList}>
                {category.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={styles.categoryLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.dropdownLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
