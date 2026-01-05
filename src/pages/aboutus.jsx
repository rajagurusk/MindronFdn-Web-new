  
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
          At <strong>Mindron Foundation</strong>, every initiative begins with a simple belief: when minds are nurtured, communities flourish. Established to make quality learning and personal growth accessible to all, we combine innovative tools, compassionate outreach, and strong partnerships to create real, measurable change.
        </p>
        <p>
         Mindron Foundation works at the intersection of education, technology, and social impact. From visual learning tools like mind maps to on-ground programs in schools and communities, our efforts are designed to help students think clearly, learn confidently, and dream boldly. We collaborate with educators, NGOs, and volunteers to ensure that our solutions are practical, language-friendly, and rooted in local realities.
        </p>
        <p>
         Our programs focus on underserved and under-resourced learners—children in low-income schools, first-generation students, and young people who often lack structured academic support. Through free workshops, digital resources, and mentoring, we aim to bridge learning gaps and build the skills needed for both exams and life.
        </p>
        <p>
          Behind Mindron Foundation is a diverse team of educators, technologists, and community champions united by a shared purpose: to turn information into understanding and potential into progress. Together, we are building a future where every learner has the tools, guidance, and confidence to design their own success story.
        </p>
      </section>
      
      {/* MISSION, ACHIEVEMENTS, VISION */}
      <section className="aboutus-mva">
        <div className="aboutus-grid">
          <article className="aboutus-card">
            <h3>Our Mission</h3>
            <p>
              Empower underserved communities by expanding access to learning, wellness, and sustainable livelihoods in every region we serve.
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
              A world where every individual, regardless of background, has the knowledge, health, and livelihood support needed to live with dignity and purpose.
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
              <h3>President's Message</h3>
              <p className="name">Ankit Sharma</p>
              <p className="role">President</p>
              <p>At Mindron Foundation, our mission is to turn compassion into measurable change.</p>
              <p>Every initiative we support is designed to protect dignity, expand opportunity, and leave a lasting, positive mark on the communities we serve.

</p>
            </div>
          </div>
          <div className="aboutus-leader-card">
            <div className="aboutus-leader-img">
              <img src="/images/leader-director.jpg" alt="Director" />
            </div>
            <div>
              <h3>Chairperson's Message</h3>
              <p className="name">Sujin Krishnan</p>
              <p className="role">Chairperson</p>
              <p>Mindron Foundation focuses on education, healthcare, and livelihoods so communities can grow stronger from within.</p>
              <p>With transparent execution and community partnerships, we turn ideas into real outcomes for people who need them most.</p>
            </div>
          </div>
          <div className="aboutus-leader-card">
            <div className="aboutus-leader-img">
              <img src="/images/leader-manager.jpg" alt="Program Manager" />
            </div>
            <div>
              <h3>Chairperson's Message</h3>
              <p className="name">Rohit Vijay Bhanushali</p>
              <p className="role">Chairperson</p>
              <p>Our priority is operational excellence and effective program delivery, so every effort contributes directly to mission success.</p>
              <p> By working closely with stakeholders and communities, we drive meaningful, on-the-ground impact through collaboration and leadership.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
