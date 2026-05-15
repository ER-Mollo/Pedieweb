import { FaBolt, FaBatteryFull, FaTools, FaChartLine } from "react-icons/fa";

export default function ValueProp() {
  return (
    <section className="value-section">
      <div className="value-container">
        <h2>Why South Africans Choose Pedipedi Energy</h2>

        <p className="value-description">
          We don’t just install solar, we provide long-term energy solutions
          you can depend on for your home and business.
        </p>

        <div className="value-grid">
          <div className="value-card">
            <div className="icon-box">
              <FaBolt />
            </div>
            <h3>Up to 70% Cost Savings</h3>
            <p>
              Reduce your monthly electricity bills and improve long-term
              savings.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <FaBatteryFull />
            </div>
            <h3>Load Shedding Protection</h3>
            <p>
              Stay powered during outages with reliable backup and hybrid
              systems.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <FaTools />
            </div>
            <h3>Expert Installation</h3>
            <p>
              Professional setup with certified compliance and ongoing support.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <FaChartLine />
            </div>
            <h3>Custom Energy Systems</h3>
            <p>
              Tailored solutions designed specifically for your energy needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}