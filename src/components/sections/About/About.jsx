import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.heroSection}>
      {/* Left Side - Blue Content */}
      <div className={styles.contentBox}>
        <div className={styles.subHeader}>हाम्रो बारेमा</div>
        <h2 className={styles.title}>विश्वसनीय सेवाको<br />इतिहास</h2>
        <p className={styles.description}>
          "हामी कहीं जाँदैनौं। हाम्रो सुरुवात साना थियो, तर आज हामी Nepal को 
          अग्रणी waterproofing कम्पनी बनेका छौं। Kathmandu, Lalitpur, Bhaktapur 
          र वरपरका क्षेत्रहरूमा सेवा प्रदान गर्दै। जहाँ अरू कम्पनीहरू आउँछन् र जान्छन्, 
          हामी यहीं छौं - तपाईंको घरको सुरक्षाको लागि।"
        </p>
        <div className={styles.signOff}>- तपाईंको साथी / FOUNDER</div>

        <div className={styles.actionRow}>
          <a href="#contact" className={styles.btn}>
            सम्पर्क गर्नुहोस्
            <span className={styles.btnArrow}>→</span>
          </a>
        </div>
      </div>

      {/* Right Side - Image Area */}
      <div className={styles.imageArea}>
        <div className={styles.circleWrapper}>
          <img 
            src="/images/about/guy.jpg" 
            alt="Founder" 
            className={styles.photo} 
          />

          {/* Ratings Card */}
          <div className={styles.ratingsCard}>
            <div className={styles.rItem}>
              <img src="/images/icons/Google-logo.svg" alt="Google" className={styles.rLogo} />
              <div className={styles.rText}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.score}>4.9 RATING</span>
              </div>
            </div>
            <div className={styles.rItem}>
              <img src="/images/icons/facebook-logo.svg" alt="Facebook" className={styles.rLogo} />
              <div className={styles.rText}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.score}>90% RCMD</span>
              </div>
            </div>
            <div className={styles.rItem}>
              <img src="/images/icons/angie-logo.svg" alt="Angi" className={styles.rLogo} />
              <div className={styles.rText}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.score}>4.5 RATING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
