import {
  FaPhoneAlt,
  FaLightbulb,
  FaTools,
  FaHandshake,
  FaMoneyBillWave,
  FaBatteryFull,
  FaChartLine,
  FaHome
} from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="process-section" id="how">
      <div className="process-container">
        {/* HOW IT WORKS */}
        <p className="section-tag">How It Works</p>
        <h2>Simple Process. Powerful Results.</h2>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-icon">
              <FaPhoneAlt />
            </div>
            <h3>Free Consultation</h3>
            <p>We assess your energy needs and usage</p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <FaLightbulb />
            </div>
            <h3>Custom System Design</h3>
            <p>Tailored solution for your home or business</p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <FaTools />
            </div>
            <h3>Professional Installation</h3>
            <p>Fast, safe, and efficient setup</p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <FaHandshake />
            </div>
            <h3>Ongoing Support</h3>
            <p>We’re with you long after installation</p>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <div className="results-section">
          <p className="section-tag">Results / ROI</p>
          <h2>What You Can Expect</h2>

          <div className="results-grid">
            <div className="result-card">
              <div className="result-icon">
                <FaMoneyBillWave />
              </div>
              <h3>Lower Electricity Bills</h3>
              <p>Significant savings on your monthly energy costs</p>
            </div>

            <div className="result-card">
              <div className="result-icon">
                <FaBatteryFull />
              </div>
              <h3>Load Shedding Protection</h3>
              <p>Stay powered during outages and grid failures</p>
            </div>

            <div className="result-card">
              <div className="result-icon">
                <FaChartLine />
              </div>
              <h3>Strong ROI</h3>
              <p>Return on investment within a few years</p>
            </div>

            <div className="result-card">
              <div className="result-icon">
                <FaHome />
              </div>
              <h3>Property Value Growth</h3>
              <p>Increase the long-term value of your property</p>
            </div>
          </div>

          <p className="results-bottom-text">
            Take control of your energy and stop relying on unpredictable
            power supply.
          </p>
        </div>
      </div>
    </section>
  );
}