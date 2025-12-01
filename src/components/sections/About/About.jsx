import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.heroSection}>
      {/* Left Side - Blue Content */}
      <div className={styles.contentBox}>
        <div className={styles.subHeader}>About Us</div>
        <h2 className={styles.title}>A HISTORY OF<br />DEPENDABLE SERVICE</h2>
        <p className={styles.description}>
          "We're not going anywhere. From our humble beginnings in Springfield in 1978, 
          we've grown into a thriving HVAC and plumbing business. Serving Springfield, 
          Branson, Bolivar, and surrounding areas. That means for nearly 50 years, while 
          other home repair companies spin up and fade away or get bought out by the big guys, 
          we're still here taking care of generations of customers just like you."
        </p>
        <div className={styles.signOff}>-YOUR FRIEND, MIKE / OWNER & CEO</div>

        <div className={styles.actionRow}>
          <a href="/meet-the-team" className={styles.btn}>
            Meet Our Team 
            <span className={styles.btnArrow}>→</span>
          </a>
          <div className={styles.signature}>Mike</div>
        </div>
      </div>

      {/* Right Side - Image Area */}
      <div className={styles.imageArea}>
        <div className={styles.circleWrapper}>
          <img 
            src="/images/about/mike-large.webp" 
            alt="Mike - Owner & CEO" 
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
