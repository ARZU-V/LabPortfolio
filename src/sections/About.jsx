function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">

        {/* Section heading */}

        <div className="section-label">
          <span>02</span>
          <span>//</span>
          <span>ABOUT</span>
        </div>


        {/* Main heading */}

        <div className="about-heading">
          <p className="about-kicker">
            ORIGIN → FORMATION
          </p>

          <h2>
            FROM CURIOSITY
            <br />
            TO <span>CREATION_</span>
          </h2>

          <p className="about-intro">
            The people and environments around me played a
            bigger role in shaping how I approach technology
            than any particular programming language ever did.
          </p>
        </div>


        {/* Timeline */}

        <div className="about-timeline">

          {/* Origin */}

          <article className="about-milestone">

            <div className="milestone-number">
              01
            </div>

            <div className="milestone-content">

              <div className="milestone-header">
                <span>ORIGIN</span>
                <small>LAKHIMPUR · UTTAR PRADESH</small>
              </div>

              <h3>
                WHERE IT
                <br />
                STARTED
              </h3>

              <p>
                Schooling in Lakhimpur, Uttar Pradesh.
                This was where the curiosity started before
                technology became something I actively wanted
                to explore.
              </p>

              <div className="origin-card">

                <div className="origin-scanline" />

                <div className="origin-card-content">
                  <span>LOCATION_001</span>

                  <strong>
                    LAKHIMPUR
                  </strong>

                  <small>
                    UTTAR PRADESH / INDIA
                  </small>
                </div>

              </div>

            </div>

          </article>


          {/* JEE */}

          <article className="about-milestone">

            <div className="milestone-number">
              02
            </div>

            <div className="milestone-content">

              <div className="milestone-header">
                <span>TURNING POINT</span>
                <small>JEE</small>
              </div>

              <h3>
                THE NEXT
                <br />
                STEP
              </h3>

              <p>
                Preparing for JEE eventually took me to
                IIIT Dharwad and opened the door to a much
                larger world of technology and people.
              </p>

              <div className="terminal-card">

                <div className="terminal-top">
                  <span>JEE_PROCESS</span>
                  <span>01</span>
                </div>

                <div className="terminal-body">
                  <span>&gt; preparing...</span>
                  <span>&gt; attempting...</span>
                  <span>&gt; result: <b>IIIT_DHARWAD</b></span>
                </div>

              </div>

            </div>

          </article>


          {/* IIIT */}

          <article className="about-milestone featured">

            <div className="milestone-number">
              03
            </div>

            <div className="milestone-content">

              <div className="milestone-header">
                <span>FORMATION</span>
                <small>IIIT DHARWAD</small>
              </div>

              <h3>
                WHERE THINGS
                <br />
                <span>CHANGED_</span>
              </h3>

              <p>
                IIIT Dharwad introduced me to genuine peers
                who were constantly building, experimenting,
                discussing ideas and pushing each other to
                learn more.
              </p>

              <p>
                I became exposed to everything from game
                development and AI to application development,
                frontend, backend and low-level systems.
              </p>

            </div>

          </article>

        </div>


        {/* Peer group */}

        <div className="about-peer">

          <div className="peer-marker">
            <span />
            <span />
            <span />
          </div>

          <div className="peer-content">

            <p className="peer-label">
              THE REAL CATALYST
            </p>

            <h3>
              GOOD PEOPLE
              <br />
              MAKE YOU <span>CURIOUS.</span>
            </h3>

            <p>
              Being around people who were genuinely excited
              about technology pushed me to explore areas I
              wouldn't have discovered on my own.
            </p>

            <p>
              I was part of clubs, helped manage events,
              built things with friends and, most importantly,
              enjoyed the process of figuring things out.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;