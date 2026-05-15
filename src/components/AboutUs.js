import image1 from "../assets/image4.jpg";
import image2 from "../assets/image1.jpeg";
import image3 from "../assets/installation.jpeg";

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <p className="tag">About Us</p>

        <div className="about-grid">
          {/* TEXT SIDE */}
          <div className="about-content">
            <h2>Powering South Africa Through Renewable Energy</h2>
            <p className="about-text">
              Pedipedi Energy is a South African-based renewable energy company
              focused on delivering reliable, cost-effective, and sustainable
              power solutions for residential, commercial, and industrial clients.
            </p>

            <p className="about-text">
              Founded and led by Douglas Mangaba, the company is driven by a
              mission to empower communities and businesses through clean energy
              independence.
            </p>

            <p className="about-text">
              With strong expertise in solar systems, project management, and
              business development, Pedipedi Energy is positioned as a
              forward-thinking energy partner.
            </p>

            <div className="about-box">
              <h3>Our Vision</h3>
              <p>
                To become a leading renewable energy provider across South Africa
                and beyond.
              </p>
            </div>

            <div className="about-box">
              <h3>Our Mission</h3>
              <ul>
                <li>Deliver high-quality solar solutions</li>
                <li>Reduce grid dependency</li>
                <li>Improve energy security</li>
                <li>Promote sustainability</li>
              </ul>
            </div>
          </div>

          {/* IMAGE SIDE (REAL IMAGES) */}
          <div className="about-images">
            <img
              src={image1}
              alt="Solar Installation"
              className="image-card large-image"
            />

            <div className="small-images">
              <img
                src={image2}
                alt="Pedipedi Energy Team"
                className="image-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}