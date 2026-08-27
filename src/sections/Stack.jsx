function Stack() {
  return (
    <section className="stack" id="stack">

      <div className="stack-content">

        <div className="section-label">
          <span>04</span>
          <span>//</span>
          <span>STACK</span>
        </div>


        <div className="stack-heading">

          <p className="stack-kicker">
            TOOLS OF THE TRADE
          </p>

          <h2>
            WHAT I
            <br />
            <span>WORK WITH_</span>
          </h2>

        </div>


        {/* Languages */}

        <div className="stack-group">

  <div className="stack-group-header">
    <span>01</span>
    <span>LANGUAGES</span>
  </div>

  <div className="stack-inline">

    <span>C++</span>
    <span>Go</span>
    <span>JavaScript</span>
    <span>TypeScript</span>
    <span>Python</span>

  </div>

</div>


        {/* Backend */}

        <div className="stack-group">

          <div className="stack-group-header">
            <span>02</span>
            <span>BACKEND / APIs</span>
          </div>

          <div className="stack-inline">

            <span>Node.js</span>
            <span>Express</span>
            <span>Gin</span>
            <span>REST APIs</span>
            <span>Kafka</span>

          </div>

        </div>


        {/* Frontend */}

        <div className="stack-group">

          <div className="stack-group-header">
            <span>03</span>
            <span>FRONTEND</span>
          </div>

          <div className="stack-inline">

            <span>React</span>
            <span>Next.js</span>
            <span>Tailwind CSS</span>

          </div>

        </div>


        {/* Cloud / Data */}

        <div className="stack-group">

          <div className="stack-group-header">
            <span>04</span>
            <span>CLOUD / DATA</span>
          </div>

          <div className="stack-inline">

            <span>AWS</span>
            <span>GCP</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Firebase</span>

          </div>

        </div>


        {/* Tooling */}

        <div className="stack-group">

          <div className="stack-group-header">
            <span>05</span>
            <span>TOOLING</span>
          </div>

          <div className="stack-inline">

            <span>Docker</span>
            <span>Linux</span>
            <span>Git</span>

          </div>

        </div>


        {/* Used in the wild */}

        <div className="stack-used">

          <div className="stack-used-header">
            <span>USED_IN_THE_WILD</span>
            <span>→</span>
          </div>

          <div className="stack-used-grid">

            <div className="stack-used-item">
              <strong>GO</strong>
              <span>P2P / CONCURRENT SYSTEMS</span>
            </div>

            <div className="stack-used-item">
              <strong>TYPESCRIPT</strong>
              <span>AI / SERVERLESS</span>
            </div>

            <div className="stack-used-item">
              <strong>NODE.JS</strong>
              <span>BACKEND / ORCHESTRATION</span>
            </div>

            <div className="stack-used-item">
              <strong>REACT</strong>
              <span>PRODUCT / DASHBOARDS</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stack;