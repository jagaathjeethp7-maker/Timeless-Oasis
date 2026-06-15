import React from "react";
import { motion } from "framer-motion";
import { Heart, Eye, Compass, Sparkles } from "lucide-react";
import "./About.css";

const values = [
  {
    icon: <Eye size={28} />,
    title: "Curated with Intention",
    desc: "Every piece in our collection is handpicked with care. We search far and wide so you don't have to.",
  },
  {
    icon: <Heart size={28} />,
    title: "Every Style Welcome",
    desc: "Minimalist, maximalist, boho, luxury — we celebrate all aesthetics and believe beauty has no single definition.",
  },
  {
    icon: <Compass size={28} />,
    title: "Your Style, Your Journey",
    desc: "We're here to inspire and guide, not dictate. Your home should reflect you — uniquely and authentically.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Quality Over Quantity",
    desc: "We'd rather show you ten extraordinary pieces than a hundred forgettable ones. Intentional curation, always.",
  },
];

export default function About() {
  return (
    <div className="about">
      {/* Hero */}
      <div className="about__hero">
        <div className="about__hero-bg">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80" alt="About Timeless Oasis" />
          <div className="about__hero-overlay" />
        </div>
        <div className="container about__hero-content">
          <motion.p
            className="about__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A Space for Every Soul
          </motion.h1>
        </div>
      </div>

      {/* Story */}
      <section className="about__story container">
        <div className="about__story-grid">
          <motion.div
            className="about__story-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Why Timeless Oasis?</h2>
            <p>
              Timeless Oasis was born from a simple belief: your home should feel like a sanctuary.
              A place that breathes your personality, wraps you in comfort, and inspires you every
              single day.
            </p>
            <p>
              We started as passionate home decor enthusiasts who spent countless hours hunting
              for the perfect pieces — scouring the internet, visiting markets, and discovering
              hidden gems across every style and budget.
            </p>
            <p>
              So we built the place we always wished existed. A beautifully curated destination
              where you can browse minimalist calm, boho warmth, luxury elegance, and unique finds
              — all in one place, without the overwhelm.
            </p>
            <p>
              We don't sell anything directly. Instead, we do the hard work of discovering and
              vetting the best products, and then connect you straight to the source. Simple,
              honest, and always inspired.
            </p>
          </motion.div>
          <motion.div
            className="about__story-images"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
              alt="Beautiful interior"
              className="about__story-img about__story-img--main"
            />
            <img
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80"
              alt="Decor detail"
              className="about__story-img about__story-img--accent"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="about__values">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">The principles that guide every piece we curate</p>
          </motion.div>
          <div className="about__values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about__value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="about__value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about__stats">
        <div className="about__stats-bg">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=75" alt="Bedroom" />
          <div className="about__stats-overlay" />
        </div>
        <div className="container about__stats-content">
          {[
            { number: "500+", label: "Curated Products" },
            { number: "10+", label: "Style Categories" },
            { number: "4.9★", label: "Community Rating" },
            { number: "∞", label: "Inspiration" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="about__stat-number">{stat.number}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
