import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer.jsx";
import "./styles/home.css";

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Subscribe form handler
  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!email) {
      setMessage('Please enter an email.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);  // "Subscribed successfully"
        setEmail('');              // Clear input on success
      } else {
        setMessage(data.error || 'Subscription failed.');
      }
    } catch (error) {
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="home-container">
      {/* HERO */}
      <div className="home-hero-img">
        <img src="/images/hero.jpg" alt="Hero Banner" />
      </div>

      {/* Who We Are */}
      <section className="home-about">
        <div className="home-about-text">
          <h2>
            <span className="about-underline" />
            Who We Are
          </h2>
          <p>
            At <strong>Mindron Foundation</strong>, compassion and curiosity come together to unlock human potential. Founded to support learners and communities with worthwhile opportunities, paving the way for knowledge, technology, and care work hand in hand to change lives.
          </p>
          <p>
            Our work is driven by excellence, transparency, and empathy. To ensure that no child's potential is limited by circumstance, We collaborate with schools, NGOs, and local partners to bring workshops, digital resources, and skill-building programs to underprivileged communities.
          </p>
          <p>
          Fundamentally, we think that one strong mind can elevate a whole community. When thoughtful technology meets genuine care, learning becomes more than just marks and exams—it becomes a bridge to long-term opportunity, dignity, and self-assurance.
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
            <span className="home-stat-number">50+</span>
            <span className="home-stat-label">public health initiatives</span>
          </div>
          <div className="home-stat-box">
            <img src="/images/stats2.jpg" alt="Health Camps" />
            <span className="home-stat-number">5</span>
            <span className="home-stat-label">annual health camps</span>
          </div>
          <div className="home-stat-box">
            <img src="/images/stats3.jpg" alt="Volunteers" />
            <span className="home-stat-number">300+</span>
            <span className="home-stat-label">volunteers</span>
          </div>
          <div className="home-stat-box">
            <img src="/images/stats4.jpg" alt="Donors" />
            <span className="home-stat-number">77+</span>
            <span className="home-stat-label">active donors</span>
          </div>
        </div>
        <div className="home-stat-center">
          <p>
            Every contribution, big or small, makes a difference.<br />
            Together, we can save lives and build a healthier tomorrow.
          </p>
   
   
   
          <button
            className="home-donate-btn"
            onClick={() => navigate("/donate")}
          >
            Donate
          </button>
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

     {/* LATEST UPDATES + SUBSCRIBE FORM */}
<section className="latest-update-container">
  <h2 className="latest-update-title">Latest Updates</h2>
  <div className="latest-update-box">
    <div className="coming-soon-msg">
      <span role="img" aria-label="Bell" style={{ fontSize: 24, marginRight: 9 }}>🔔</span>
      <span style={{ fontWeight: 700, fontSize: "1.4em" }}>Coming Soon</span>
    </div>
    <div className="subscribe-desc">
      Stay tuned! Exciting updates will be posted here.<br />
      Want to be notified? Subscribe now to keep up with our latest developments.
    </div>
    <form className="home-subscribe-row" onSubmit={handleSubscribeSubmit}>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="home-send-btn">Subscribe</button>
    </form>
    {message && <p className="subscribe-message">{message}</p>}
  </div>
</section>


      <Footer />
    </div>
  );
}
