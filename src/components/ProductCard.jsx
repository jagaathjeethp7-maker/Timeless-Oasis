import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
        <div className="product-card__overlay">
          <a href={product.buyLink} target="_blank" rel="noopener noreferrer" className="product-card__buy-btn">
            <ExternalLink size={16} />
            View Product
          </a>
        </div>
        {product.isNew && <span className="product-card__badge">New</span>}
      </div>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">
            <Tag size={11} />
            {product.category}
          </span>
          <span className="product-card__style">{product.style}</span>
        </div>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <a href={product.buyLink} target="_blank" rel="noopener noreferrer" className="product-card__link">
            Shop Now <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
