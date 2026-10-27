"use client";

import { useState } from "react";
import Link from "next/link";
import { BASE_PRICE, CORE_FEATURES, ADDONS, formatRupiah } from "@/data/inventorySystem";
import styles from "./InventoryConfigurator.module.css";

export default function InventoryConfigurator() {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearSelection = () => {
    setSelectedAddons([]);
  };

  const selectedItems = ADDONS.filter((item) => selectedAddons.includes(item.id));
  const addonsTotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const grandTotal = BASE_PRICE + addonsTotal;

  // Pre-fill WhatsApp message with selected modules and total
  const buildWhatsAppMessage = () => {
    let msg = `Hi MOSU, I would like to request an official quote for the Inventory & Warehouse System.\n\n`;
    msg += `• Core System: ${formatRupiah(BASE_PRICE)}\n`;

    if (selectedItems.length > 0) {
      msg += `\nSelected Add-ons (${selectedItems.length}):\n`;
      selectedItems.forEach((item) => {
        msg += `- ${item.name}: +${formatRupiah(item.price)}\n`;
      });
    } else {
      msg += `\nSelected Add-ons: None (Core System Only)\n`;
    }

    msg += `\nEstimated Total: ${formatRupiah(grandTotal)}\n\n`;
    msg += `Please let me know how we can proceed with a consultation.`;
    return msg;
  };

  const waHref = `https://wa.me/6287725064056?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  return (
    <div className={styles.configuratorLayout}>
      {/* Left Column: Core System & Addons Selection */}
      <div className={styles.leftColumn}>
        {/* Core System Package */}
        <section className={styles.coreCard} aria-labelledby="core-heading">
          <div className={styles.coreHeader}>
            <span className={styles.badgeIncluded}>Included by Default</span>
            <h2 id="core-heading" className={styles.coreTitle}>
              Paket Utama (Core System)
            </h2>
            <p className={styles.coreDesc}>
              The solid production foundation ready to deploy. Custom-built, lightweight, and engineered specifically for hassle-free warehouse flow.
            </p>
            <div className={styles.corePrice}>
              <span className={styles.corePriceFigure}>{formatRupiah(BASE_PRICE)}</span>
              <span className={styles.corePriceNote}>Base Investment</span>
            </div>
          </div>

          <div className={styles.coreFeatures}>
            <h3 className={styles.subhead}>Active Core Features:</h3>
            <ul className={styles.featureGrid}>
              {CORE_FEATURES.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          </div>
        </section>

        {/* Modular Add-ons */}
        <section className={styles.addonsSection} aria-labelledby="addons-heading">
          <div className={styles.addonsHeader}>
            <h2 id="addons-heading" className={styles.addonsTitle}>
              Modul Pilihan (Optional Add-ons)
            </h2>
            <p className={styles.addonsDesc}>
              Check the modules your business actually needs. Pricing is completely transparent and automatically recalculated.
            </p>
          </div>

          <div className={styles.addonsGrid}>
            {ADDONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <label
                  key={addon.id}
                  htmlFor={`addon-${addon.id}`}
                  className={`${styles.addonCard} ${isChecked ? styles.addonCardActive : ""}`}
                >
                  <div className={styles.checkboxWrapper}>
                    <input
                      type="checkbox"
                      id={`addon-${addon.id}`}
                      checked={isChecked}
                      onChange={() => toggleAddon(addon.id)}
                      className={styles.checkboxInput}
                    />
                    <div className={styles.customCheckbox} aria-hidden="true">
                      {isChecked && (
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className={styles.addonInfo}>
                    <div className={styles.addonTop}>
                      <span className={styles.addonName}>{addon.name}</span>
                      <span className={styles.addonPrice}>+{formatRupiah(addon.price)}</span>
                    </div>
                    <p className={styles.addonDesc}>{addon.description}</p>
                  </div>
                </label>
              );
            })}
          </div>
        </section>
      </div>

      {/* Right Column: Sticky Live Summary & WhatsApp Quote CTA */}
      <aside className={styles.summaryAside} aria-label="Order summary and live price estimation">
        <div className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>Live Cost Estimation</h3>

          <div className={styles.calculationRow}>
            <span>Core System (Base)</span>
            <span className={styles.calcValue}>{formatRupiah(BASE_PRICE)}</span>
          </div>

          <div className={styles.calculationRow}>
            <span>Selected Add-ons ({selectedItems.length})</span>
            <span className={styles.calcValue}>+{formatRupiah(addonsTotal)}</span>
          </div>

          {selectedItems.length > 0 && (
            <div className={styles.selectedAddonList}>
              {selectedItems.map((item) => (
                <div key={item.id} className={styles.selectedAddonItem}>
                  <span className={styles.selectedAddonName}>• {item.name}</span>
                  <span className={styles.selectedAddonPrice}>+{formatRupiah(item.price)}</span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.totalDivider} />

          <div className={styles.totalRow} aria-live="polite">
            <span className={styles.totalLabel}>Estimated Total</span>
            <span className={styles.totalPrice}>{formatRupiah(grandTotal)}</span>
          </div>

          <p className={styles.guaranteeNote}>
            Includes full deployment, server setup, and 1-Year Bug Warranty.
          </p>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.submitBtn}
            aria-label="Send quote request to MOSU via WhatsApp (opens in new tab)"
          >
            Send Quote via WhatsApp
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

          {selectedItems.length > 0 && (
            <button
              type="button"
              onClick={clearSelection}
              className={styles.resetBtn}
            >
              Reset Selected Add-ons
            </button>
          )}

          <div className={styles.backLinkWrap}>
            <Link href="/#pricing" className={styles.backLink}>
              ← Back to all packages
            </Link>
          </div>
        </div>
      </aside>

      {/* Floating Bottom Bar on Mobile */}
      <div className={styles.mobileBar}>
        <div className={styles.mobileBarInfo}>
          <span className={styles.mobileBarCount}>
            {selectedItems.length > 0 ? `${selectedItems.length} add-ons selected` : "Core system only"}
          </span>
          <span className={styles.mobileBarTotal}>{formatRupiah(grandTotal)}</span>
        </div>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileBarBtn}
        >
          Send WhatsApp Quote ↗
        </a>
      </div>
    </div>
  );
}
