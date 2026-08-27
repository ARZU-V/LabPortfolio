function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">

        <div className="section-label">
          <span>05</span>
          <span>//</span>
          <span>PROJECTS</span>
        </div>


        <div className="projects-heading">

          <p className="projects-kicker">
            BUILT / BROKEN / FIXED
          </p>

          <h2>
            THINGS I'VE
            <br />
            <span>BUILT_</span>
          </h2>

        </div>


        {/* =================================================
            FEATURED PROJECT
        ================================================= */}

        <article className="project-featured">

          <div className="project-featured-info">

            <div className="project-number">
              01 // CURRENT
            </div>

            <div className="project-status">
              <span />
              RUNNING
            </div>

            <h3>
              NODEFORGE_
            </h3>

            <p className="project-subtitle">
              PRIVATE SELF-HOSTED DEPLOYMENT PLATFORM
            </p>

            <p className="project-description">
              A private deployment platform running on my own
              homelab. Push code through a private portal and
              the system handles the build, containerization,
              deployment and service routing automatically.
            </p>

            <div className="project-flow">

              <span>GITHUB</span>
              <b>→</b>
              <span>BUILD</span>
              <b>→</b>
              <span>CONTAINER</span>
              <b>→</b>
              <span>DEPLOY</span>

            </div>

            <div className="project-tags">

              <span>GO</span>
              <span>PODMAN</span>
              <span>CADDY</span>
              <span>TAILSCALE</span>
              <span>CLOUDFLARE</span>
              <span>PROMETHEUS</span>
              <span>GRAFANA</span>
              <span>SSH</span>

            </div>

          </div>


          <div className="project-featured-visual">

            <div className="project-grid" />

            <div className="server-node">

              <div className="server-node-header">
                <span>HOME_NODE</span>
                <span>ONLINE</span>
              </div>

              <div className="server-node-body">

                <div className="server-rack">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="server-info">
                  <strong>PODMAN</strong>
                  <small>CONTAINER ENGINE</small>
                </div>

              </div>

              <div className="server-node-footer">
                <span>CPU 24%</span>
                <span>MEM 38%</span>
              </div>

            </div>

            <div className="connection connection-one" />
            <div className="connection connection-two" />

          </div>

        </article>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="project-grid-list">


          {/* GoCache */}

          <article className="project-card">

            <div className="project-card-top">
              <span>02</span>
              <span>GO</span>
            </div>

            <h3>
              GOCACHE
            </h3>

            <p>
              Thread-safe HTTP reverse proxy with LRU caching,
              bounded memory usage and concurrent request
              handling.
            </p>

            <div className="project-card-bottom">

              <div className="project-tags">
                <span>GO</span>
                <span>LRU</span>
                <span>PROMETHEUS</span>
                <span>GRAFANA</span>
              </div>

              <span className="project-arrow">
                ↗
              </span>

            </div>

          </article>


          {/* Cloud Edge */}

          <article className="project-card">

            <div className="project-card-top">
              <span>03</span>
              <span>AI / VR</span>
            </div>

            <h3>
              CLOUD-EDGE
              <br />
              VISION AI
            </h3>

            <p>
              Real-time vision system using a smartphone as
              a camera and an edge server for AI processing,
              controlled through VR.
            </p>

            <div className="project-card-bottom">

              <div className="project-tags">
                <span>PYTHON</span>
                <span>AI</span>
                <span>VR</span>
              </div>

              <span className="project-arrow">
                ↗
              </span>

            </div>

          </article>


          {/* Video Streaming */}

          <article className="project-card">

            <div className="project-card-top">
              <span>04</span>
              <span>BACKEND</span>
            </div>

            <h3>
              VIDEO
              <br />
              STREAMING
            </h3>

            <p>
              Cloud-deployed video streaming backend using
              HLS adaptive bitrate processing and FFmpeg with
              scalable media storage.
            </p>

            <div className="project-card-bottom">

              <div className="project-tags">
                <span>FFMPEG</span>
                <span>GCP</span>
                <span>MONGODB</span>
              </div>

              <span className="project-arrow">
                ↗
              </span>

            </div>

          </article>


          {/* NaukriWala */}

          <article className="project-card">

            <div className="project-card-top">
              <span>05</span>
              <span>AI / WEB</span>
            </div>

            <h3>
              NAUKRIWALA
            </h3>

            <p>
              Student ERP with AI-powered resume analysis and
              semantic job matching using vector search.
            </p>

            <div className="project-card-bottom">

              <div className="project-tags">
                <span>PYTHON</span>
                <span>FLASK</span>
                <span>VECTOR SEARCH</span>
              </div>

              <span className="project-arrow">
                ↗
              </span>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Projects;