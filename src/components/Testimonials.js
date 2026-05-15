import {
  FaQuoteLeft,
  FaMoneyBillWave,
  FaChartPie,
  FaTools
} from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* TESTIMONIALS */}
        <p className="section-tag">Testimonials</p>

        <h2>What Our Clients Say</h2>

        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>

            <p>
              “Pedipedi Energy installed our system quickly and professionally.
              We haven’t experienced load shedding issues since!”
            </p>

            <h4>Residential Client</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>

            <p>
              “Reliable service and excellent support throughout the entire
              installation process — highly recommended.”
            </p>

            <h4>Business Owner</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>

            <p>
              “Their team helped us reduce electricity costs significantly while
              giving us complete backup during outages.”
            </p>

            <h4>Commercial Client</h4>
          </div>
        </div>

        {/* PRICING / OPTIONS */}
        <div className="pricing-section">
          <p className="section-tag">Pricing / Options</p>

          <h2>Flexible Options That Work for You</h2>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-icon">
                <FaMoneyBillWave />
              </div>
              <h3>Cash Installations</h3>
              <p>Affordable once-off installation options available</p>
            </div>

            <div className="pricing-card">
              <div className="pricing-icon">
                <FaChartPie />
              </div>
              <h3>Custom System Quotes</h3>
              <p>Tailored pricing based on your energy needs and usage</p>
            </div>

            <div className="pricing-card">
              <div className="pricing-icon">
                <FaTools />
              </div>
              <h3>Scalable Solutions</h3>
              <p>Expand your system as your home or business grows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}