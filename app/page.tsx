import Image from "next/image";

import chairRed from "../assets/image1.webp";
import chairGreen from "../assets/image2.webp";
import packedChairs from "../assets/image3.webp";
import tableSet from "../assets/image4.webp";

const products = [
  {
    title: "Molded plastic chairs",
    description:
      "Comfortable arm chairs with strong plastic seats, textured backs, and sturdy metal legs.",
    image: chairRed,
    alt: "Red molded plastic chair with metal legs",
  },
  {
    title: "Color variety",
    description:
      "Bright, clean finishes available in practical colors for shops, homes, and bulk buyers.",
    image: chairGreen,
    alt: "Green molded plastic chair with textured back",
  },
  {
    title: "Packed supply",
    description:
      "Products can be wrapped and prepared neatly for wholesale dispatch and showroom handling.",
    image: packedChairs,
    alt: "Two plastic chairs wrapped in protective packaging",
  },
  {
    title: "Tables and chair sets",
    description:
      "Durable molded tables and chairs made for everyday use with matching color options.",
    image: tableSet,
    alt: "Plastic tables displayed with a molded plastic chair",
  },
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
            Penta Plastic
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
            <h1>Durable Plastic Furniture</h1>
            <p className="lead">
              Penta manufactures strong molded chairs, tables, and wholesale
              plastic furniture with clean finishing and reliable supply.
            </p>
            <div className="heroStats" aria-label="Penta product strengths">
              <span>Strong build</span>
              <span>Bulk orders</span>
              <span>Clean finish</span>
            </div>
            <div className="actions">
              <a className="button primary" href="#contact">
                Request a Quote
              </a>
              <a className="button secondary" href="#products">
                View Products
              </a>
            </div>
          </div>

          <div className="heroVisual" aria-label="Penta product showcase">
            <div className="heroPhoto heroPhotoMain">
              <Image
                src={chairRed}
                alt="Red molded plastic Penta chair"
                loading="eager"
                sizes="(max-width: 900px) 88vw, 430px"
              />
            </div>
            <div className="heroPhoto heroPhotoSmall">
              <Image
                src={tableSet}
                alt="Plastic tables and chair set"
                sizes="(max-width: 900px) 42vw, 210px"
              />
            </div>
            <div className="heroBadge">
              <span>Premium Molded Range</span>
              <strong>Chairs and tables ready for retail and wholesale.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="sectionHeader">
          <p className="eyebrow">What We Make</p>
          <h2>Practical products with a polished finish.</h2>
        </div>
        <div className="cards">
          {products.map((product) => (
            <article className="card" key={product.title}>
              <div className="cardImage">
                <Image
                  src={product.image}
                  alt={product.alt}
                  sizes="(max-width: 620px) 90vw, (max-width: 900px) 44vw, 260px"
                />
              </div>
              <h3>{product.title}</h3>
              <p>
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection" id="quality">
        <div className="qualityCopy">
          <p className="eyebrow">Why Penta</p>
          <h2>Made for repeat business.</h2>
          <p>
            From raw material selection to final finishing, Penta focuses on
            consistency, durability, and timely delivery for business buyers.
          </p>
        </div>
        <div className="qualityPanel">
          <Image
            src={packedChairs}
            alt="Packed Penta plastic chairs ready for supply"
            sizes="(max-width: 900px) 90vw, 520px"
          />
          <ul className="featureList">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Get In Touch</p>
        <h2>Need rotomolded plastic products for your business?</h2>
        <p>
          Address: 6629+RQV, Sialkot Rd, near muafiwala wala gala saeen rafique darbar, Nagri Ahmad Shah Wania Wala, Gujranwala
        </p>
        <p>
          Contact Penta to discuss product requirements, wholesale quantities,
          export needs, or custom manufacturing.
        </p>
        <a className="button primary" href="tel:03227206109">
          Contact Us at 0322 7206109
        </a>
      </section>
    </main>
  );
}
