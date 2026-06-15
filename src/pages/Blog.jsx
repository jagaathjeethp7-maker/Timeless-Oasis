import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "../data/products";
import "./Blog.css";

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="blog">
      {/* Header */}
      <div className="blog__header">
        <div className="blog__header-bg">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=75" alt="Blog" />
          <div className="blog__header-overlay" />
        </div>
        <div className="container blog__header-content">
          <motion.p
            className="blog__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Style & Inspiration
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Oasis Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Decor guides, style tips, and room inspiration for every taste
          </motion.p>
        </div>
      </div>

      <div className="container blog__body">
        {/* Featured Post */}
        <motion.div
          className="blog__featured"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="blog__featured-img">
            <img src={featured.image} alt={featured.title} />
          </div>
          <div className="blog__featured-content">
            <span className="blog__tag"><Tag size={12} />{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="blog__meta">
              <span>{featured.date}</span>
              <span className="blog__meta-dot" />
              <span><Clock size={13} /> {featured.readTime}</span>
            </div>
            <a href="#" className="btn-primary blog__read-btn">
              Read Article <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Other Posts */}
        <div className="blog__grid">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              className="blog__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="blog__card-img">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog__card-category">{post.category}</span>
              </div>
              <div className="blog__card-body">
                <div className="blog__meta">
                  <span>{post.date}</span>
                  <span className="blog__meta-dot" />
                  <span><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="blog__card-link">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          className="blog__newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="blog__newsletter-content">
            <h3>Never Miss an Inspiration</h3>
            <p>Get the latest style guides, decor tips, and curated finds delivered to your inbox.</p>
          </div>
          <form className="blog__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
