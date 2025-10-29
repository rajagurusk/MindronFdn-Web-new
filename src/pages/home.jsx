import React from "react";
import Footer from "../components/footer.jsx";
import "./styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO */}
      <div className="home-hero-img">
        <img src="/images/hero.jpg" alt="Hero Banner" />
      </div>

      {/* ABOUT US */}
      <section className="home-about">
        <div className="home-about-text">
          <h2>
            <span className="about-underline" />
            About Us
          </h2>
          <p>
            At <strong>Foundation Mind</strong>, we believe that compassion is the foundation of health, and together, we work to create change for those in need.
          </p>
          <p>
            You can sustain a vibrant impact—whether it's providing medical treatment, extending nutrition, or supporting well-being programs for women and children.
          </p>
          <p>
            Our foundation is built on the belief that giving unlocks potential and inspires change. With every person genuinely involved, miracles begin to happen!
          </p>
        </div>
        <div className="home-about-photo">
          <img src="/images/founder.jpg" alt="Foundation Leader" />
        </div>
      </section>

      {/* SUPPORT STATS */}
      <section className="home-stats">
        <h4>Your Support Matters More Than Ever</h4>
        <p>
          Every day, countless individuals struggle to access basic health services. With your support, the Mindron Foundation can reach more families, provide critical assistance, and create lasting change in communities that need it most.
        </p>
        <div className="home-stats-row">
          <div className="home-stat-box">
            <img src="/images/stats1.jpg" alt="Public Health" />
            <span className="home-stat-number">1,000+</span>
            <span className="home-stat-label">public health initiatives</span>
          </div>
          <div className="home-stat-box">
            <img src="/images/stats2.jpg" alt="Health Camps" />
            <span className="home-stat-number">5</span>
            <span className="home-stat-label">annual health camps</span>
          </div>
          <div className="home-stat-box">
            <img src="/images/stats3.jpg" alt="Volunteers" />
            <span className="home-stat-number">300</span>
            <span className="home-stat-label">volunteers</span>
          </div>
          <div className="home-stat-box">
            <img src="/images/stats4.jpg" alt="Donors" />
            <span className="home-stat-number">50+</span>
            <span className="home-stat-label">active donors</span>
          </div>
        </div>
        <div className="home-stat-center">
          <p>Every contribution, big or small, makes a difference.<br />
             Together, we can save lives and build a healthier tomorrow.</p>
          <button className="home-donate-btn">Donate</button>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="home-success">
        <h4>Success Stories</h4>
        <div className="home-success-row">
          <div className="home-story-box">
            <img src="/images/story1.jpg" alt="Story 1" />
            <h5>Empowering Women</h5>
            <p>From health access to strong voices and hope, our dedicated work transformed Sita's life and gives her family new strength.</p>
            <button>Learn More</button>
          </div>
          <div className="home-story-box">
            <img src="/images/story2.jpg" alt="Story 2" />
            <h5>Changing Generations</h5>
            <p>Priya and Maya's journey shows how continued support in youth programs builds brighter futures with confidence and care.</p>
            <button>Learn More</button>
          </div>
          <div className="home-story-box">
            <img src="/images/story3.jpg" alt="Story 3" />
            <h5>Healthy Living</h5>
            <p>With support, Mr. Ram found better wellness. Our health camps support seniors in living healthy and engaged lives.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="home-updates">
        <h4>Latest Updates</h4>
        <div className="home-update-row">
          <div className="home-update-circle">
            <span>New health camp launch in Pune.</span>
          </div>
          <div className="home-update-circle">
            <span>Volunteer drive starts November 5th.</span>
          </div>
          <div className="home-update-circle">
            <span>Diabetes awareness talk on World Diabetes Day.</span>
          </div>
          <div className="home-update-circle">
            <span>Thank you donors: over ₹5 lakh raised!</span>
          </div>
        </div>
        <form className="home-subscribe">
          <label>
            Subscribe now to keep up with our latest developments 
            <input type="email" placeholder="Enter Your Email" />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
