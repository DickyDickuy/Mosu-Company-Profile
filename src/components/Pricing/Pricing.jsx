"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Pricing.module.css";

const TIERS = {
  starter: {
    id: "starter",
    title: "Web Presence & Company Profile",
    desc: "An elegant, professional website crafted to establish instant credibility for your business.",
    pricePrefix: "Starting from",
    price: "Rp 3.500.000",
    features: [
      "Up to 5 Responsive Pages (Home, Profile, Services, Contact, Gallery)",
      "Modern, Mobile-Friendly & Fast-Loading Design",
      "Direct WhatsApp & Google Maps Integration",
      "Basic SEO Setup (Google Indexing & Search Console)",
      "Free (.com) Domain & High-Speed Hosting for 1 Year",
      "3-Month System Maintenance Warranty",
    ],
  },
  business: {
    id: "business",
    title: "Dynamic Business Web & Portal",
    desc: "A custom website with a full Content Management System (CMS) to expand market reach and drive conversions.",
    pricePrefix: "Starting from",
    price: "Rp 8.500.000",
    features: [
      "Unlimited Pages (Dynamic CMS Admin Panel)",
      "Exclusive, Interactive UI/UX Tailored to Brand Identity",
      "Quotation System / Product Catalog / Booking Module",
      "Ultra-Fast Performance & Advanced SEO Optimization",
      "High-Performance Cloud Server & Domain (1 Year)",
      "1-Year System Maintenance, Security & Routine Backups",
    ],
  },
};

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState("business");

  const currentTier = TIERS[selectedTier];
  const waMessage = `Hi MOSU, I'm interested in the ${currentTier.title} package (${currentTier.price}). Can we discuss my project?`;
  const waHref = `https://wa.me/6287725064056?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="pricing" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <div className={styles.sectionCenter}>
          <span className={styles.sectionEyebrow}>Investment &amp; Packages</span>
          <h2 className={styles.sectionTitle}>Transparent packages tailored for scale.</h2>
          <p className={styles.sectionSub}>
            Choose a production-grade package or configure a custom system designed specifically for your operations.
          </p>
        </div>

        <div className={styles.pricingGrid} role="radiogroup" aria-label="MOSU Service Packages">
          {/* Card 1: Web Presence & Company Profile */}
          <div
            className={`${styles.pricingCard} ${selectedTier === "starter" ? styles.pricingCardSelected : ""}`}
            onClick={() => setSelectedTier("starter")}
            role="radio"
            aria-checked={selectedTier === "starter"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                setSelectedTier("starter");
              }
            }}
          >
            <input
              type="radio"
              id="tier-starter"
              name="pricing-tier"
              value="starter"
              checked={selectedTier === "starter"}
              onChange={() => setSelectedTier("starter")}
              className={styles.radioInput}
              tabIndex={-1}
            />
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{TIERS.starter.title}</h3>
              <p className={styles.cardDesc}>{TIERS.starter.desc}</p>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.pricePrefix}>{TIERS.starter.pricePrefix}</span>
              <div className={styles.priceFigure}>{TIERS.starter.price}</div>
            </div>

            <ul className={styles.featuresList}>
              {TIERS.starter.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <svg
                    className={`${styles.checkIcon} ${styles.checkStarter}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cardFooter}>
              <span className={styles.selectIndicator}>
                {selectedTier === "starter" ? "Selected ✓" : "Click to select"}
              </span>
            </div>
          </div>

          {/* Card 2: Dynamic Business Web & Portal */}
          <div
            className={`${styles.pricingCard} ${selectedTier === "business" ? styles.pricingCardSelected : ""}`}
            onClick={() => setSelectedTier("business")}
            role="radio"
            aria-checked={selectedTier === "business"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                setSelectedTier("business");
              }
            }}
          >
            <input
              type="radio"
              id="tier-business"
              name="pricing-tier"
              value="business"
              checked={selectedTier === "business"}
              onChange={() => setSelectedTier("business")}
              className={styles.radioInput}
              tabIndex={-1}
            />
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{TIERS.business.title}</h3>
              <p className={styles.cardDesc}>{TIERS.business.desc}</p>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.pricePrefix}>{TIERS.business.pricePrefix}</span>
              <div className={styles.priceFigure}>{TIERS.business.price}</div>
            </div>

            <ul className={styles.featuresList}>
              {TIERS.business.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <svg
                    className={`${styles.checkIcon} ${styles.checkBusiness}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cardFooter}>
              <span className={styles.selectIndicator}>
                {selectedTier === "business" ? "Selected ✓" : "Click to select"}
              </span>
            </div>
          </div>

          {/* Card 3: Inventory & Warehouse System (Interactive Link to Configurator) */}
          <Link
            href="/inventory-system"
            className={`${styles.pricingCard} ${styles.actionCard}`}
            aria-label="Inventory and Warehouse System - Configure your custom package"
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Inventory &amp; Warehouse System</h3>
              <p className={styles.cardDesc}>
                A custom, lightweight system designed to streamline warehouse stock workflows. Transparent pricing with flexible add-ons.
              </p>
            </div>

            <div className={styles.priceContainer}>
              <div className={styles.priceFigure}>Negotiable*</div>
              <span className={styles.priceSubnote}>*Core system from Rp 9.000.000 + modular add-ons</span>
            </div>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <svg className={`${styles.checkIcon} ${styles.checkCustom}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Full Web Admin Dashboard (1 Warehouse / Location)</span>
              </li>
              <li className={styles.featureItem}>
                <svg className={`${styles.checkIcon} ${styles.checkCustom}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Master Data Barang (SKU, Category, Unit, Min Stock)</span>
              </li>
              <li className={styles.featureItem}>
                <svg className={`${styles.checkIcon} ${styles.checkCustom}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Real-Time Inbound &amp; Outbound Stock Logging</span>
              </li>
              <li className={styles.featureItem}>
                <svg className={`${styles.checkIcon} ${styles.checkCustom}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Automated Low-Stock Alerts on Dashboard</span>
              </li>
              <li className={styles.featureItem}>
                <svg className={`${styles.checkIcon} ${styles.checkCustom}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Movement History Reports &amp; Excel/PDF Export</span>
              </li>
              <li className={styles.featureItem}>
                <svg className={`${styles.checkIcon} ${styles.checkCustom}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>12 Selectable Add-On Modules Available</span>
              </li>
            </ul>

            <div className={styles.cardFooter}>
              <span className={styles.actionBtnPrompt}>
                Configure Package <span className={styles.arrow} aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Dynamic WhatsApp CTA Bar */}
        <div className={styles.ctaBar}>
          <div className={styles.ctaSummary}>
            <span className={styles.ctaSummaryLabel}>Selected Package:</span>
            <strong>{currentTier.title}</strong>
            <span className={styles.ctaPriceTag}>({currentTier.price})</span>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            aria-label={`Consult about ${currentTier.title} via WhatsApp (opens in new tab)`}
          >
            Consult via WhatsApp
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
