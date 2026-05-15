export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-container">

        <p className="section-tag">Leadership</p>
        <h2>Meet The Team</h2>

        {/* DOUGLAS */}
        <div className="team-card">
          <div className="team-image">
            <img src="/images/douglas.jpg" alt="Douglas Mangaba" />
          </div>

          <div className="team-content">
            <h3>Douglas Mangaba</h3>
            <p className="role">Founder & Director</p>

            <p>
              Douglas Mangaba is the Founder and Director of Pedipedi Energy,
              a South African renewable energy company focused on delivering
              high-performance solar and energy solutions to residential,
              commercial, and industrial clients.
            </p>

            <p>
              With strong experience in business development, project leadership,
              and technical coordination, he has built Pedipedi Energy into a
              forward-thinking energy company aligned with South Africa’s growing
              demand for reliable and sustainable power.
            </p>

            <p>
              His vision focuses on long-term energy security, cost savings,
              and empowering businesses and communities through clean energy
              independence.
            </p>
          </div>
        </div>

        {/* MAXWELL */}
        <div className="team-card reverse">
          <div className="team-image">
            <img src="/images/maxwell.jpg" alt="Alugumi Maxwell Mashau" />
          </div>

          <div className="team-content">
            <h3>Alugumi Maxwell Mashau</h3>
            <p className="role">Technical Director</p>

            <p>
              A highly experienced Electrical Engineering professional with
              over 30 years of industry expertise, specializing in renewable
              energy and sustainable power systems.
            </p>

            <p>
              He has worked with major institutions such as Sasol, City Power,
              and the Department of Water Affairs, gaining deep expertise in
              HV/MV systems, transformers, substations, and energy distribution.
            </p>

            <p>
              At Pedipedi Energy, he leads solar PV installations, hybrid systems,
              battery backup solutions, and energy efficiency projects while ensuring
              compliance and safety standards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}