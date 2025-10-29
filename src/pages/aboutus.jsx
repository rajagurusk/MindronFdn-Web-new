// src/pages/aboutus.jsx
import { useEffect, useRef, useState, useMemo } from "react";
import "./styles/aboutus.css";
import Footer from "../components/footer.jsx";

export default function AboutUs() {
  const aboutRef = useRef(null);

  // Current visibility ratio of the section (0..1)
  const [ratio, setRatio] = useState(0);

  const fullText = `Mindron Foundation is dedicated to empowering communities by providing innovative and sustainable solutions in the diamond and jewelry industries. With a strong commitment to quality and excellence, we leverage advanced technology and extensive expertise to deliver reliable products and services. Our mission is to support our clients with cutting-edge synthetic diamond detection solutions, ensuring authenticity and trust in the market. At Mindron, we believe in continuous innovation, superior customer service, and fostering 
long-term partnerships built on transparency and integrity. We strive to create meaningful impact, helping businesses achieve their goals while contributing positively to society.`;

  // Tokens preserve spaces/newlines
  const tokens = useMemo(() => fullText.split(/(\s+)/), [fullText]);
  const totalWords = useMemo(
    () => tokens.filter((t) => t.trim().length > 0).length,
    [tokens]
  );

  // Fine-grained thresholds so ratio updates smoothly
  const thresholds = useMemo(
    () => Array.from({ length: 101 }, (_, i) => i / 100),
    []
  );

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Use the latest entry for this target
        const entry = entries[entries.length - 1];
        // entry.intersectionRatio ∈ [0..1] increases when scrolling down into view,
        // decreases when scrolling up out of view (reversible). [web:94]
        setRatio(entry.intersectionRatio);
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: thresholds,
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [thresholds]); // IntersectionObserver ratio/thresholds per MDN [web:7][web:94]

  // Map ratio -> revealed word count; larger divisor => slower progression
  const speedDivisor = 1.35; // tune 1.2–1.6 to taste
  const progress = Math.min(1, ratio / speedDivisor + ratio * (1 - 1 / speedDivisor));
  const revealCount = Math.floor(progress * totalWords);

  // Helper: ordinal index of actual words up to token i
  const wordOrdinalUpTo = (i) =>
    tokens.slice(0, i + 1).filter((t) => t.trim().length > 0).length - 1;

  const darkBackground = false;

  return (
    <main className="page">
      {/* Hero */}
      <section className="hero">
        <img
          className="hero-image"
          src="/images/aboutus1.jpg"
          alt="About Mindron Foundation"
        />
      </section>

      {/* Who We Are: reversible word-by-word reveal */}
      <section
        ref={aboutRef}
        className={`about-block container ${darkBackground ? "dark" : ""}`}
      >
        <h2 style={{ position: "relative", paddingTop: "10px", marginTop: "30px" }}>
          Who We Are
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "4px",
              width: "50px",
              backgroundColor: "#8db600",
              borderRadius: "2px",
            }}
          />
        </h2>

        <p className="who-text">
          {tokens.map((tok, i) => {
            const isWord = tok.trim().length > 0;
            const ordinal = isWord ? wordOrdinalUpTo(i) : -1;
            const revealed = isWord && ordinal < revealCount;

            const baseColor = darkBackground ? "#D1D5DB" : "#374151";
            const revealColor = darkBackground ? "#FFFFFF" : "#111827";

            return (
              <span
                key={i}
                className="who-word"
                style={{
                  color: revealed ? revealColor : baseColor,
                  fontWeight: revealed ? "bold" : 400,
                  opacity: revealed ? 1 : 0.95,
                  transition:
                    "font-weight 140ms linear, opacity 140ms linear, color 140ms linear",
                  whiteSpace: tok.includes("\n") ? "pre-wrap" : undefined,
                }}
              >
                {tok}
              </span>
            );
          })}
        </p>
      </section>

      {/* Mission, Vision, Achievements */}
      <section className="mva container">
        <div className="grid">
          <article className="card">
            <h3>Our Mission</h3>
            <p>
              Drive equitable access to opportunities by enabling learning, wellness, and
              livelihoods across underserved regions.
            </p>
          </article>

          <article className="card achievements">
            <h3>Our Achievements</h3>
            <ul className="bullets">
              <li>10,000+ beneficiaries across programs</li>
              <li>200+ community health camps conducted</li>
              <li>100+ scholarships awarded annually</li>
            </ul>
          </article>

          <article className="card">
            <h3>Our Vision</h3>
            <p>
              A world where every individual has the resources and support to thrive with
              dignity and purpose.
            </p>
          </article>
        </div>
      </section>

      {/* Leader’s Message */}
      <section className="leaders container">
        <h2>Leader’s Message</h2>

        <article className="media">
          <div className="media-image">
            <img src="/images/leader-ceo.jpg" alt="CEO portrait" />
          </div>
          <div className="media-body">
            <h3>CEO’s Message</h3>
            <p className="name">Name Surname</p>
            <p className="role">Chief Executive Officer</p>
            <p>
              Our mission is driven by compassion and measurable outcomes, ensuring each
              initiative uplifts communities with dignity and opportunity.
            </p>
            <p>
              Collaboration and accountability guide every program we deliver for lasting,
              people‑first impact.
            </p>
          </div>
        </article>

        <article className="media">
          <div className="media-image">
            <img src="/images/leader-director.jpg" alt="Director portrait" />
          </div>
          <div className="media-body">
            <h3>Director’s Message</h3>
            <p className="name">Name Surname</p>
            <p className="role">Program Director</p>
            <p>
              We focus on education, healthcare, and livelihoods, building capacity with
              transparent execution and community stewardship.
            </p>
            <p>
              Thank you to partners and volunteers whose support turns plans into
              real‑world outcomes.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}
