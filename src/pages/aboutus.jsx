import React from "react";
import Footer from "../components/footer.jsx";
import "./styles/aboutus.css";

export default function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* HERO */}
      <div className="aboutus-hero-img">
        <img src="/images/aboutus-hero.jpg" alt="About Hero" />
      </div>
      
      {/* WHO WE ARE SECTION */}
      <section className="aboutus-whoarewe">
        <h1>About Us</h1>
        <p>
          At <strong>Mindron Foundation</strong>, we believe that compassion is the most powerful form of luxury—a force capable of transforming lives and inspiring hope. Founded with a heartfelt vision to uplift underserved communities, we stand committed to bringing dignity, care, and opportunity to every individual we serve.
        </p>
        <p>
          Our mission is simple yet profound: to blend human kindness with purposeful action. Through thoughtful initiatives and sustainable programs, we strive to build a world where generosity meets grace, and every act of giving carries meaning.
        </p>
        <p>
          We focus on creating long-term, sustainable impact—whether it’s empowering women to become independent change-makers, nurturing the dreams of young students through education, or extending compassionate healthcare to those in need. Every effort we make is guided by empathy, integrity, and excellence, ensuring that our work not only touches lives today but also builds a brighter tomorrow.
        </p>
        <p>
          At the heart of our foundation lies a belief that giving should feel beautiful. Because when generosity is guided by intention and compassion is expressed through action, it creates ripples of change that reach far beyond boundaries. Together, we are not just helping communities—we are helping humanity rediscover the true meaning of care.
        </p>
      </section>
      
      {/* MISSION, ACHIEVEMENTS, VISION */}
      <section className="aboutus-mva">
        <div className="aboutus-grid">
          <article className="aboutus-card">
            <h3>Our Mission</h3>
            <p>
              Drive equitable access to opportunities by enabling learning, wellness, and livelihoods across underserved regions.
            </p>
          </article>
          <article className="aboutus-card">
            <h3>Our Achievements</h3>
            <ul>
              <li>10,000+ beneficiaries across programs</li>
              <li>200+ community health camps conducted</li>
              <li>100+ scholarships awarded annually</li>
            </ul>
          </article>
          <article className="aboutus-card">
            <h3>Our Vision</h3>
            <p>
              A world where every individual has the resources and support to thrive with dignity and purpose.
            </p>
          </article>
        </div>
      </section>
      
      {/* LEADER’S MESSAGE - updated for 3 boxes */}
      <section className="aboutus-leaders">
        <h2>Leader’s Message</h2>
        <div className="aboutus-leader-row">
          <div className="aboutus-leader-card">
            <div className="aboutus-leader-img">
              <img src="/images/leader-ceo.jpg" alt="CEO" />
            </div>
            <div>
              <h3>CEO’s Message</h3>
              <p className="name">Ankit Sharma</p>
              <p className="role">Chief Executive Officer</p>
              <p>Our mission is driven by compassion and measurable outcomes, ensuring each initiative uplifts communities with dignity and opportunity.</p>
              <p>Collaboration and accountability guide every program we deliver for lasting, people‑first impact.</p>
            </div>
          </div>
          <div className="aboutus-leader-card">
            <div className="aboutus-leader-img">
              <img src="/images/leader-director.jpg" alt="Director" />
            </div>
            <div>
              <h3>Director’s Message</h3>
              <p className="name">Sujin Krishnan</p>
              <p className="role">Director</p>
              <p>We focus on education, healthcare, and livelihoods, building capacity with transparent execution and community stewardship.</p>
              <p>Thank you to partners and volunteers whose support turns plans into real‑world outcomes.</p>
            </div>
          </div>
          <div className="aboutus-leader-card">
            <div className="aboutus-leader-img">
              <img src="/images/leader-manager.jpg" alt="Program Manager" />
            </div>
            <div>
              <h3>Director’s Message</h3>
              <p className="name">Rohit Vijay Bhanushali</p>
              <p className="role">Director</p>
              <p>Focused on operational excellence, program delivery, and stakeholder engagement to ensure mission success.</p>
              <p>Committed to driving community impact through on-the-ground leadership and collaboration.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
