import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@pedipedienergy.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

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
              Get a Free Quote Today
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
          <form onSubmit={handleSubmit}>
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

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Request Free Quote"}
            </button>

            {success && (
              <p className="success-msg">
                ✅ Thank you! We will contact you soon.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}