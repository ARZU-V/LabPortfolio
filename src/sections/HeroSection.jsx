import Pic from "../assets/my_pic.jpg";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero" id="profile">
      <div className="hero-content">

        {/* Section label */}

        <div className="section-label">
          <span>01</span>
          <span>//</span>
          <span>PROFILE</span>
        </div>


        <div className="hero-grid">

          {/* =========================================
              LEFT SIDE
          ========================================= */}

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


            {/* =========================================
                ACTIONS
            ========================================= */}

            <div className="hero-actions">

              <button
                type="button"
                className="hero-button primary"
                onClick={() => scrollToSection("projects")}
              >
                [ VIEW MY WORK ]
              </button>

              <button
                type="button"
                className="hero-button secondary"
                onClick={() => scrollToSection("contact")}
              >
                [ CONTACT ME ]
              </button>

            </div>

          </div>


          {/* =========================================
              RIGHT SIDE — IMAGE
          ========================================= */}

          <div className="hero-image-wrapper">

            <div className="hero-image-frame">

              {/* Corner decorations */}

              <div className="image-corner top-left" />
              <div className="image-corner top-right" />
              <div className="image-corner bottom-left" />
              <div className="image-corner bottom-right" />


              {/* Profile image */}

              <img
                src={Pic}
                alt="Arjit"
                className="hero-image"
              />

            </div>


            {/* Image metadata */}

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