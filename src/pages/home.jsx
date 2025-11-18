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

      {/* ABOUT US */}
      <section className="home-about">
        <div className="home-about-text">
          <h2>
            <span className="about-underline" />
            About Us
          </h2>
          <p>
            At <strong>Foundation Mind</strong>, we believe that compassion is the most powerful form of luxury. Founded with a vision to uplift underserved communities through dignity, care, and opportunity, our mission blends heartfelt service with refined execution.
          </p>
          <p>
            We focus on sustainable impact—whether it’s providing education to bright young minds, supporting women’s empowerment, or delivering healthcare with humanity. Every initiative is guided by empathy, transparency, and a commitment to excellence.
          </p>
          <p>
            Our foundation is built on the belief that giving should feel beautiful—because when generosity meets intention, it creates lasting change.
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
      <section className="home-updates">
        <h4 className="home-updates-title">Latest Updates</h4>
        <div className="home-updates-row">
          <div className="home-updates-card">
            <div className="updates-circle-img">
              <img src="/images/latest1.jpg" alt="Update 1" />
            </div>
            <div className="updates-desc">
              Mindron Foundation is a non-profit organization dedicated to improving healthcare access and wellness for communities in need
            </div>
          </div>
          <div className="home-updates-card">
            <div className="updates-circle-img">
              <img src="/images/latest2.jpg" alt="Update 2" />
            </div>
            <div className="updates-desc">
              Mindron Foundation is a non-profit organization dedicated to improving healthcare access and wellness for communities in need
            </div>
          </div>
          <div className="home-updates-card">
            <div className="updates-circle-img">
              <img src="/images/latest3.jpg" alt="Update 3" />
            </div>
            <div className="updates-desc">
              Mindron Foundation is a non-profit organization dedicated to improving healthcare access and wellness for communities in need
            </div>
          </div>
          <div className="home-updates-card">
            <div className="updates-circle-img">
              <img src="/images/latest4.jpg" alt="Update 4" />
            </div>
            <div className="updates-desc">
              Mindron Foundation is a non-profit organization dedicated to improving healthcare access and wellness for communities in need
            </div>
          </div>
        </div>
        <form className="home-subscribe-row" onSubmit={handleSubscribeSubmit}>
          <span className="subscribe-label">
            Subscribe now to keep up with our latest developments
          </span>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="home-send-btn">Send</button>
        </form>
        {message && <p className="subscribe-message">{message}</p>}
      </section>

      <Footer />
    </div>
  );
}
