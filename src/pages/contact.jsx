import "./styles/contact.css";
import Footer from "../components/footer.jsx";

function ContactHero({ src = "/images/contactus.jpg", alt = "Contact banner" }) {
  return (
    <section className="hero-image" aria-label={alt}>
      <img src={src} alt={alt} />
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-sketch">
        <header className="topbar">
          <div className="brand">
            <div className="logo-circle">MF</div>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a className="active" href="/contact">
              Contact
            </a>
          </nav>
        </header>

        <ContactHero />

        <section className="hq card">
          <div className="hq-left">
            <h2>Corporate Headquarter (Mumbai)</h2>
            <ul className="kv row-order">
              <li>
                <span className=" ">Contact no:</span>
                <span className="v">+91 98765 43210</span>
              </li>
              <li>
                <span className="k">Email:</span>
                <span className="v">info@mindronfoundation.org</span>
              </li>
              <li className="multiline">
                <span className="k">Address:</span>
                <span className="v">
                  3rd Floor, Mindron House, BKC, Mumbai 400051, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
          <div className="map-box">
            <iframe
              title="Mumbai map"
              src="https://maps.google.com/maps?q=BKC%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="row-pair">
          <div className="city card">
            <div className="city-head">
              <span className="index">1</span>
              <h3>Lucknow</h3>
            </div>
            <ul className="kv row-order">
              <li>
                <span className="k">Contact no:</span>
                <span className="v">+91 91234 56780</span>
              </li>
              <li className="multiline">
                <span className="k">Address:</span>
                <span className="v">Gomti Nagar, Lucknow 226010</span>
              </li>
            </ul>
            <div className="map-box small">
              <span>Map</span>
            </div>
          </div>

          <div className="city card">
            <div className="city-head">
              <span className="index">2</span>
              <h3>Hong Kong</h3>
            </div>
            <ul className="kv row-order">
              <li>
                <span className="k">Contact no:</span>
                <span className="v">+852 5551 2233</span>
              </li>
              <li className="multiline">
                <span className="k">Address:</span>
                <span className="v">Central, Hong Kong</span>
              </li>
            </ul>
            <div className="map-box small">
              <span>Map</span>
            </div>
          </div>
        </section>

        <section className="row-single">
          <div className="city card wide">
            <div className="city-head">
              <span className="index">3</span>
              <h3>USA – New York</h3>
            </div>
            <div className="city-grid">
              <ul className="kv row-order">
                <li>
                  <span className="k">Contact no:</span>
                  <span className="v">+1 (212) 555‑0183</span>
                </li>
                <li className="multiline">
                  <span className="k">Address:</span>
                  <span className="v">
                    5th Avenue, Manhattan, New York, NY 10001
                  </span>
                </li>
              </ul>
              <div className="map-box">
                <span>Map</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
