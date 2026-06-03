const products = [
  "Water storage solutions",
  "Industrial containers",
  "Material handling products",
  "Custom rotomolded components",
];

const strengths = [
  "Durable, weather-resistant builds",
  "Consistent quality control",
  "Bulk supply for wholesalers",
  "Export-ready packaging and support",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Penta home">
            Penta
          </a>
          <div className="navLinks">
            <a href="#products">Products</a>
            <a href="#quality">Quality</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroContent">
            <p className="eyebrow">Manufacturer • Exporter • Wholesaler</p>
            <h1>High-quality rotomolded plastic products built to last.</h1>
            <p className="lead">
              Penta delivers dependable plastic products for storage,
              industrial use, wholesale supply, and custom business needs.
            </p>
            <div className="actions">
              <a className="button primary" href="#contact">
                Request a Quote
              </a>
              <a className="button secondary" href="#products">
                View Products
              </a>
            </div>
          </div>

          <div className="heroCard" aria-label="Penta business highlights">
            <span>Premium Rotomolding</span>
            <strong>Reliable production for local and export markets.</strong>
            <p>
              Designed for strength, finished for consistency, and supplied with
              business-ready service.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="sectionHeader">
          <p className="eyebrow">What We Make</p>
          <h2>Products for demanding everyday use.</h2>
        </div>
        <div className="cards">
          {products.map((product) => (
            <article className="card" key={product}>
              <h3>{product}</h3>
              <p>
                Built with practical design, durable materials, and dependable
                manufacturing standards.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection" id="quality">
        <div>
          <p className="eyebrow">Why Penta</p>
          <h2>Quality you can trust at scale.</h2>
          <p>
            From raw material selection to final finishing, Penta focuses on
            consistency, durability, and timely delivery for business buyers.
          </p>
        </div>
        <ul className="featureList">
          {strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Get In Touch</p>
        <h2>Need rotomolded plastic products for your business?</h2>
        <p>
          Contact Penta to discuss product requirements, wholesale quantities,
          export needs, or custom manufacturing.
        </p>
        <a className="button primary" href="mailto:info@penta.com">
          Email Penta
        </a>
      </section>
    </main>
  );
}
