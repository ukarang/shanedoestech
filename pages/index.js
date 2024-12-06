export default function Home() {
    return (
      <div>
        <header className="hero">
          <nav className="navbar">
            <div className="logo">Shane Does Tech</div>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="hero-content">
            <h1>Elevating Technology Solutions</h1>
            <p>Your partner in Kaizen-inspired technical mastery.</p>
            <a href="#services" className="btn-primary">Explore Services</a>
          </div>
        </header>
  
        <main>
          <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="grid">
              <div className="card">
                <h3>Website Design</h3>
                <p>Modern, responsive websites tailored to your needs.</p>
              </div>
              <div className="card">
                <h3>Salesforce Administration</h3>
                <p>Streamlined CRM solutions to enhance your workflow.</p>
              </div>
              <div className="card">
                <h3>Marketing Automation</h3>
                <p>Custom drip funnels built for efficiency.</p>
              </div>
              <div className="card">
                <h3>API Integrations</h3>
                <p>Automating your operations with seamless integrations.</p>
              </div>
            </div>
          </section>
        </main>
  
        <footer>
          <p>© 2024 Shane Does Tech. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  