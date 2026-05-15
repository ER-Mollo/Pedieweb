import {
  FaSolarPanel,
  FaBatteryFull,
  FaBuilding,
  FaChartLine
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <p className="services-tag">Our Services</p>

        <h2>Energy Solutions for Every Need</h2>

        <p className="services-description">
          Whether you’re a homeowner or a growing business, we design systems
          that fit your usage, your budget, and your long-term energy goals.
        </p>

        {/* TOP SERVICES */}
        <div className="main-services-grid">
          <div className="service-box">
            <img
              src="/images/residential-solar.jpg"
              alt="Residential Solar"
              className="service-image"
            />

            <h3>Residential Solutions</h3>

            <ul>
              <li>Solar panel installations</li>
              <li>Inverter & battery backup systems</li>
              <li>System upgrades and maintenance</li>
            </ul>
          </div>

          <div className="service-box">
            <img
              src="/images/business-solar.jpg"
              alt="Business Solar"
              className="service-image"
            />

            <h3>Business Solutions</h3>

            <ul>
              <li>Energy cost reduction systems</li>
              <li>Hybrid solar solutions</li>
              <li>Backup power for uninterrupted operations</li>
            </ul>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="what-we-do">
          <h2>What We Do</h2>

          <div className="services-grid">
            <div className="service-card icon-card">
              <div className="service-icon">
                <FaSolarPanel />
              </div>
              <h3>Solar Energy Solutions</h3>
              <ul>
                <li>Residential solar installations</li>
                <li>Commercial & industrial solar systems</li>
                <li>Hybrid and off-grid solutions</li>
              </ul>
            </div>

            <div className="service-card icon-card">
              <div className="service-icon">
                <FaBatteryFull />
              </div>
              <h3>Energy Storage Systems</h3>
              <ul>
                <li>Battery backup systems</li>
                <li>Load shedding solutions</li>
                <li>Energy optimization</li>
              </ul>
            </div>

            <div className="service-card icon-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>Turnkey Energy Projects</h3>
              <ul>
                <li>System design & engineering</li>
                <li>Procurement & installation</li>
                <li>Project management & commissioning</li>
              </ul>
            </div>

            <div className="service-card icon-card">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>Energy Consulting</h3>
              <ul>
                <li>Energy audits</li>
                <li>Cost-saving strategies</li>
                <li>System upgrades & maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}