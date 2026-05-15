import image1 from '../assets/image2.jpg'
import image2 from '../assets/image4.jpg'
import image3 from '../assets/image5.jpg'

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <p className="section-tag">Our Projects</p>

        <h2>Our Recent Installations</h2>

        <p className="projects-description">
          Real solutions. Real results. We deliver reliable solar and backup
          energy systems built for long-term performance and energy security.
        </p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img
              src={image1}
              alt="5kW Solar System"
              className="project-image"
            />

            <div className="project-content">
              <h3>5kW Solar System</h3>
              <p>Kempton Park</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
              src={image2}
              alt="10kW Hybrid System"
              className="project-image"
            />

            <div className="project-content">
              <h3>10kW Hybrid System</h3>
              <p>Small Business Setup</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img
              src={image3}
              alt="Backup Power Installation"
              className="project-image"
            />

            <div className="project-content">
              <h3>Backup Power Installation</h3>
              <p>Residential Home</p>
            </div>
          </div>
        </div>

        <div className="projects-bottom-text">
          <p>
            Whether for homes or businesses, every installation is designed
            for efficiency, reliability, and long-term savings.
          </p>
        </div>
      </div>
    </section>
  );
}