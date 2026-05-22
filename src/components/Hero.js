import video from '../assets/solarvideo.mp4'
export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src={video} />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Power Your Home or Business Without Load Shedding</h1>
        <p>
          Reliable solar and backup energy solutions designed to reduce your electricity costs and keep you powered, day and night.
        </p>

        <div className="hero-buttons">
          <button className="btn green">Get a Quote</button>
          <a className="btn white" href="https://wa.me/27798420219">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}