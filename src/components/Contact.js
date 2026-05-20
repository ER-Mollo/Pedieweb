import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">

        {/* LEFT TEXT */}
        <div className="cta-text">
          <h2>Ready to Take Control of Your Power?</h2>

          <p>
            Stop losing money and productivity due to unreliable electricity.
            Get a reliable solar solution built for your home or business.
          </p>

          <div className="cta-buttons">
            <a className="cta-btn green" href="#contact-form">
              Get a Quote Today
            </a>

            <a
              className="cta-btn white"
              href="https://wa.me/27798420219"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="cta-form" id="contact-form">

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
          >

            {/* ACCESS KEY */}
            <input
              type="hidden"
              name="access_key"
              value="c54903ea-ef38-42cd-92d2-84ee0d4b3ae0"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your energy needs..."
              rows="5"
              required
            />

            <button type="submit">
              Request Quote
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}