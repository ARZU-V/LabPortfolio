import SectionLabel from "../components/SectionLabel";
import Pic from "../assets/my_pic.jpg"
function Hero() {
  return (
    <section className="hero" id="profile">
      <div className="hero-content">

        <div className="section-label">
          <span>01</span>
          <span>//</span>
          <span>PROFILE</span>
        </div>

        <div className="hero-grid">

          {/* LEFT SIDE */}

          <div className="hero-copy">

            <p className="hero-kicker">
              SOFTWARE ENGINEER
            </p>

            <h1>
              HELLO,
              <br />
              I'M <span>ARJIT_</span>
            </h1>

            <p className="hero-description">
              I build software, solve problems, and enjoy
              understanding how things work underneath.
            </p>

            <div className="hero-actions">

              <button
                type="button"
                className="hero-button primary"
              >
                [ VIEW MY WORK ]
              </button>

              <button
                type="button"
                className="hero-button secondary"
              >
                [ CONTACT ME ]
              </button>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="hero-image-wrapper">

            <div className="hero-image-frame">

              <div className="image-corner top-left" />
              <div className="image-corner top-right" />
              <div className="image-corner bottom-left" />
              <div className="image-corner bottom-right" />

      <img 
        src= {Pic}
        alt="My Pic Bro"
        style={{ width: '100%', maxWidth: '400px', cursor: 'pointer' }}
      />
    

            </div>

            <div className="hero-image-label">
              <span>USER_PROFILE</span>
              <span>IMG_001</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;