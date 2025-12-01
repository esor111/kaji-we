import './Mike.css';

function Mike() {
  return (
    <div className="hero-section">
      {/* Left Side - Blue Content */}
      <div className="content-box">
        <div className="sub-header">About Us</div>
        <h1>A HISTORY OF<br />DEPENDABLE SERVICE</h1>
        <p className="description">
          "We're not going anywhere. From our humble beginnings in Springfield in 1978, 
          we've grown into a thriving HVAC and plumbing business. Serving Springfield, 
          Branson, Bolivar, and surrounding areas. That means for nearly 50 years, while 
          other home repair companies spin up and fade away or get bought out by the big guys, 
          we're still here taking care of generations of customers just like you."
        </p>
        <div className="sign-off">-YOUR FRIEND, MIKE / OWNER & CEO</div>

        <div className="action-row">
          <a href="/meet-the-team" className="btn">
            Meet Our Team 
            <i className="btn-arrow">→</i>
          </a>
          <div className="signature">Mike</div>
        </div>
      </div>

      {/* Right Side - Image Area */}
      <div className="image-area">
        <div className="circle-wrapper">
          <img 
            src="/images/about/mike-large.webp" 
            alt="Mike - Owner & CEO" 
            className="photo" 
          />

          {/* Ratings Card */}
          <div className="ratings-card">
            <div className="r-item">
              <img src="/images/icons/Google-logo.svg" alt="Google" className="r-logo" />
              <div className="r-text">
                <div className="stars">★★★★★</div>
                <span className="score">4.9 RATING</span>
              </div>
            </div>
            <div className="r-item">
              <img src="/images/icons/facebook-logo.svg" alt="Facebook" className="r-logo" />
              <div className="r-text">
                <div className="stars">★★★★★</div>
                <span className="score">90% RCMD</span>
              </div>
            </div>
            <div className="r-item">
              <img src="/images/icons/angie-logo.svg" alt="Angi" className="r-logo" />
              <div className="r-text">
                <div className="stars">★★★★★</div>
                <span className="score">4.5 RATING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mike;
