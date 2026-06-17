import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, Search, ExternalLink } from "lucide-react";
import { products, categories, styles, beyondTheHome } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All");
  const [activeStyle, setActiveStyle] = useState("All Styles");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchStyle = activeStyle === "All Styles" || p.style === activeStyle;
      const matchSearch = search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchStyle && matchSearch;
    });
  }, [activeCategory, activeStyle, search]);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat !== "All") setSearchParams({ category: cat });
    else setSearchParams({});
  };

  return (
    <div className="shop">
      {/* Page Header */}
      <div className="shop__header">
        <div className="shop__header-bg">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=75" alt="Shop" />
          <div className="shop__header-overlay" />
        </div>
        <div className="container shop__header-content">
          <motion.p
            className="shop__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Browse & Discover
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {products.length} curated pieces across every style and room
          </motion.p>
        </div>
      </div>

      <div className="container shop__body">
        {/* Search & Filter Toggle */}
        <div className="shop__toolbar">
          <div className="shop__search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && <button onClick={() => setSearch("")}><X size={14} /></button>}
          </div>
          <div className="shop__results">
            <span>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
          </div>
          <button className="shop__filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Filters */}
        <motion.div
          className="shop__filters"
          initial={false}
          animate={{ height: filtersOpen ? "auto" : 0, opacity: filtersOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="shop__filters-inner">
            <div className="shop__filter-group">
              <p className="shop__filter-label">Category</p>
              <div className="shop__filter-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`shop__pill ${activeCategory === cat ? "shop__pill--active" : ""}`}
                    onClick={() => handleCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="shop__filter-group">
              <p className="shop__filter-label">Style</p>
              <div className="shop__filter-pills">
                {styles.map((s) => (
                  <button
                    key={s}
                    className={`shop__pill ${activeStyle === s ? "shop__pill--active" : ""}`}
                    onClick={() => setActiveStyle(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Quick Nav */}
        <div className="shop__cat-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`shop__cat-btn ${activeCategory === cat ? "shop__cat-btn--active" : ""}`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="shop__grid">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="shop__empty">
            <p>No products found. Try adjusting your filters.</p>
            <button
              className="btn-outline"
              onClick={() => {
                setActiveCategory("All");
                setActiveStyle("All Styles");
                setSearch("");
                setSearchParams({});
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Beyond the Home Section */}
      <div className="beyond">
        <div className="container">
          <motion.div
            className="beyond__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="beyond__eyebrow">Lifestyle Picks</p>
            <h2 className="beyond__title">Beyond the Home</h2>
            <p className="beyond__subtitle">
              Carefully selected lifestyle essentials that complement the way you live — beyond your four walls.
            </p>
          </motion.div>

          <div className="beyond__grid">
            {beyondTheHome.map((item, i) => (
              <motion.div
                key={item.id}
                className="beyond__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="beyond__card-image">
                  <img src={item.image} alt={item.name} />
                  <span className="beyond__tag">{item.tag}</span>
                </div>
                <div className="beyond__card-body">
                  <h3 className="beyond__card-name">{item.name}</h3>
                  <p className="beyond__card-desc">{item.description}</p>
                  <a
                    href={item.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="beyond__card-btn"
                  >
                    Shop Now <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
