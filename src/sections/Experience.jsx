import Care from "../assets/care.png"
import IIIT from "../assets/iiit.png"
import Meshery from "../assets/meshery.png"
function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">

        {/* Section Header */}

        <div className="section-label">
          <span>03</span>
          <span>//</span>
          <span>EXPERIENCE</span>
        </div>

        <div className="experience-heading">
          <p className="experience-kicker">
            WORK + BUILDING
          </p>

          <h2>
            THINGS I'VE
            <br />
            <span>WORKED ON_</span>
          </h2>
        </div>


        {/* =================================================
            CARE INSURANCE
        ================================================= */}

        <article className="experience-card">

          <div className="experience-card-top">

            <div className="experience-identity">

              <div className="experience-logo">
                <img
                  src={Care}
                  alt="Care Insurance"
                />
              </div>

              <div>
                <p className="experience-role">
                  ENGINEER INTERN
                </p>

                <h3>
                  CARE INSURANCE
                </h3>
              </div>

            </div>

            <div className="experience-date">
              MAY 2026 — PRESENT
            </div>

          </div>


          <div className="experience-body">

            <p>
              Engineered a Node.js orchestration layer connecting
              four insurance platforms through REST and SFTP
              across multiple business verticals.
            </p>

            <p>
              Built partner self-onboarding and tracking tools,
              automated policy ingestion and improved document
              delivery workflows.
            </p>

          </div>


          <div className="experience-metrics">

            <div>
              <strong>4</strong>
              <span>PLATFORMS</span>
            </div>

            <div>
              <strong>8+</strong>
              <span>VERTICALS</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>MONTHLY TRANSACTIONS</span>
            </div>

            <div>
              <strong>&lt;30m</strong>
              <span>PROCESSING TIME</span>
            </div>

          </div>

        </article>


        {/* =================================================
            IIIT DHARWAD
        ================================================= */}

        <article className="experience-card">

          <div className="experience-card-top">

            <div className="experience-identity">

              <div className="experience-logo">
                <img
                  src={IIIT}
                  alt="IIIT Dharwad"
                />
              </div>

              <div>
                <p className="experience-role">
                  RESEARCH INTERN
                </p>

                <h3>
                  IIIT DHARWAD
                </h3>
              </div>

            </div>

            <div className="experience-date">
              JAN 2025 — APR 2025
            </div>

          </div>


          <div className="experience-body">

            <p>
              Benchmarked six quantized LLMs on Android devices
              under an 8 GB RAM constraint.
            </p>

            <p>
              Compared INT4, INT8 and FP16 configurations across
              latency, throughput, power consumption and
              translation quality.
            </p>

          </div>


          <div className="experience-metrics">

            <div>
              <strong>6</strong>
              <span>LLMs</span>
            </div>

            <div>
              <strong>1–3B</strong>
              <span>PARAMETERS</span>
            </div>

            <div>
              <strong>8GB</strong>
              <span>RAM LIMIT</span>
            </div>

            <div>
              <strong>INT4 / 8 / 16</strong>
              <span>CONFIGURATIONS</span>
            </div>

          </div>

        </article>


        {/* =================================================
            OPEN SOURCE
        ================================================= */}

        <article className="experience-card open-source-card">

          <div className="experience-card-top">

            <div className="experience-identity">

              <div className="experience-logo">
                <img
                  src={Meshery}
                  alt="Meshery"
                />
              </div>

              <div>
                <p className="experience-role">
                  OPEN SOURCE / COMMUNITY
                </p>

                <h3>
                  MESHERY ECOSYSTEM
                </h3>
              </div>

            </div>

            <div className="experience-date">
              JAN 2026 — APR 2026
            </div>

          </div>


          <div className="experience-body">

            <p>
              Contributed to the Meshery ecosystem while learning
              how to work inside an existing open-source codebase.
            </p>

            <p>
              Worked across React, JavaScript and Go, mainly around
              UI improvements, mobile responsiveness, embedded
              media, documentation and AI discovery.
            </p>

          </div>


          <div className="experience-tags">

            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>GO</span>
            <span>UI</span>
            <span>RESPONSIVENESS</span>
            <span>OPEN SOURCE</span>

          </div>


          <div className="open-source-note">

            <span className="open-source-dot" />

            <p>
              Also explored a personal Go project currently
              under consideration.
            </p>

          </div>

        </article>

      </div>
    </section>
  );
}

export default Experience;