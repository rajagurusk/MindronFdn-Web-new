  
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
         At <strong>Mindron Foundation</strong>, every initiative begins with a simple belief: when minds are nurtured, communities flourish. Founded with the goal of ensuring that everyone has access to high-quality education and personal development, we combine innovative tools, compassionate outreach, and strong partnerships to create real, measurable change.
        </p>
        <p>
         Mindron Foundation works at the intersection of social impact, technology, and education. From visual learning tools like mind maps to on-ground programs in schools and communities, our efforts are designed to help students think clearly, learn confidently, and dream boldly. To make sure that our solutions are workable,  language-friendly, and grounded in local realities, we collaborate with educators, NGOs, and volunteers
        </p>
        <p>
        Children in low-income schools, first-generation students, and young people who frequently lack structured academic support are the targets of our programs because they are underprivileged and under-resourced. Through free workshops, digital resources, and mentoring, we aim to bridge learning gaps and build the skills needed for both exams and life.
        </p>
        <p>
          A diverse group of educators, technologists, and community advocates work together at Mindron Foundation with the common goal of transforming information into knowledge into understanding and potential into progress. By working together, we are creating a future in which each student has the resources, direction, and self-assurance to create their own success story.
        </p>
      </section>
      
      {/* MISSION, ACHIEVEMENTS, VISION */}
      <section className="aboutus-mva">
        <div className="aboutus-grid">
          <article className="aboutus-card">
            <h3>Our Mission</h3>
            <p>
Empower underprivileged communities by increasing access to education, health care, and sustainable livelihoods in every region we serve.
          </p>
          </article>
          <article className="aboutus-card">
            <h3>Our Achievements</h3>
            <ul>
              <li>1000+ beneficiaries across programs</li>
              <li>50+ community health camps conducted</li>
              <li>100+ scholarships awarded annually</li>
            </ul>
          </article>
          <article className="aboutus-card">
            <h3>Our Vision</h3>
            <p>
A society where every individual, regardless of background, have access to the information, healthcare, and means of subsistence necessary to live with dignity and purpose.
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
              <p>At Mindron Foundation, we strive to turn compassion into action.</p>
              <p>Our initiatives are designed to create opportunity, uphold dignity, and deliver sustainable impact for the communities we serve.

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
              <p>At Mindron Foundation we focus on strengthening communities through education, healthcare, and livelihood initiatives.</p>
              <p>With transparency and collaboration at our core, we work to ensure our efforts lead to meaningful, measurable outcomes.</p>
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
              <p>Through operational excellence and strong community partnerships, we aim to drive sustainable, on-the-ground impact. </p>
              <p>Every program we implement is aligned with our mission to create lasting positive change.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
