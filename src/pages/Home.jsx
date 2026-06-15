import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import { products, testimonials } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const categories = [
  { name: "Living Room", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
  { name: "Bedroom", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80" },
  { name: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a35549b4c?w=500&q=80" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" },
  { name: "Wall Art", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80" },
  { name: "Outdoor", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80" },
];

const featured = products.filter((p) => p.isFeatured).slice(0, 6);

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
            alt="Beautiful home interior"
            className="hero__img"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <motion.p
            className="hero__eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Curated Home Decor
          </motion.p>
          <motion.h1
            className="hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Where Every Space
            <br />
            <em>Tells a Story</em>
          </motion.h1>
          <motion.p
            className="hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Discover handpicked pieces across every style — from serene minimalism
            to bold luxury. Your dream space is just a click away.
          </motion.p>
          <motion.div
            className="hero__actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link to="/shop" className="btn-primary">Explore Collection</Link>
            <Link to="/about" className="hero__learn">
              Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* Categories */}
      <section className="home-categories">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Shop by Room</h2>
            <p className="section-subtitle">Find the perfect piece for every corner of your home</p>
          </motion.div>
          <div className="home-categories__grid">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/shop?category=${cat.name}`} className="category-card">
                  <div className="category-card__img-wrap">
                    <img src={cat.image} alt={cat.name} loading="lazy" />
                    <div className="category-card__overlay" />
                  </div>
                  <span className="category-card__name">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products — only shown if there are featured products */}
      {featured.length > 0 && (
        <section className="home-featured">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Featured Finds</h2>
              <p className="section-subtitle">Our most-loved pieces, handpicked for you</p>
            </motion.div>
            <div className="home-featured__grid">
              {featured.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
            <motion.div
              className="home-featured__cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/shop" className="btn-outline">
                View All Products <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Banner */}
      <section className="home-banner">
        <div className="home-banner__bg">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt="Interior inspiration"
          />
          <div className="home-banner__overlay" />
        </div>
        <div className="home-banner__content container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Style Has No Rules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Mix minimalist calm with boho warmth. Layer luxury with vintage charm.
            At Timeless Oasis, your style is your own.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/blog" className="btn-primary">Get Inspired</Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What People Say</h2>
            <p className="section-subtitle">Real words from our community of decor lovers</p>
          </motion.div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Quote size={28} className="testimonial-card__quote-icon" />
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={t.name} className="testimonial-card__avatar" />
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__location">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
