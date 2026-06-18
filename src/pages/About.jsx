import React from "react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>The Journey of Phoenix Corbett.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container story-grid">
          <div className="story-content">
            <SectionTitle
              title="About Corbett Phoenix –"
              subtitle="Where Comfort Meets Wilderness"
              align="left"
            />
            <p>
              Phoenix Corbet was born out of a dream to create a peaceful
              retreat in the lap of nature. Located in Awala Khot, Kotabagh, our
              property is a perfect blend of eco-conscious living, warm
              hospitality, and Kumaoni culture. We’re a family-run hotel that
              believes in offering authentic experiences — whether that means
              sharing home-cooked meals made from local produce, helping you
              spot wildlife on a guided walk, or simply giving you the perfect
              quiet corner to read your favorite book.
            </p>
            <br />
            <p>
              We’re not just a place to stay — we’re a story, a community, and a
              doorway to explore one of the most beautiful regions in India. At
              Phoenix Corbet, our mission is to make every guest feel at home
              while discovering the unexplored side of Uttarakhand.
            </p>
          </div>
          <div className="story-image">
            <img
              src="/Images/nainital.jpg"
              alt="Resort Story"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container mv-grid">
          <div className="mv-card">
            <h3>Our Philosophy</h3>
            <p>
              We believe in slow, soulful travel. In hand-picked herbs from our
              gardens, locally-sourced ingredients, wooden furniture built by
              local artisans, and welcoming every guest not just as a
              visitor—but as family.
            </p>
          </div>
          <div className="mv-card">
            <h3>About Corbett Phoenix </h3>
            <p>
              At Corbett Phoenix, we believe the mountains have a language—and
              we’re here to help you listen. Built with a deep respect for the
              land, the local community, and the timeless spirit of Uttarakhand,
              our hotel stands as a tribute to everything we love about nature
              and simple living. Founded by a local family who fell in love with
              this untouched piece of paradise, Phoenix Corbet was designed to
              give travelers a place to pause, breathe, and feel truly alive.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Values </h3>
            <p>
              1. Sustainability: We prioritize local resources and eco-friendly
              practices.
            </p>
            <p>2. Hospitality: We treat every guest like family.</p>
            <p>
              3. Experience: We aim to provide moments that turn into lasting
              memories.
            </p>
            <p>
              4. Whether you’re watching the stars by the bonfire or sipping
              chai with the sound of birds around, Phoenix Corbet is where your
              mountain story begins.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <SectionTitle title="The Hands Behind Phoenix" subtitle="Our Team" />
          <div className="team-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="team-card">
                <img
                  src={`https://picsum.photos/seed/team${item}/400/500`}
                  alt="Team Member"
                  referrerPolicy="no-referrer"
                />
                <div className="team-info">
                  <h4>Team Member Name</h4>
                  <span>Position</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
