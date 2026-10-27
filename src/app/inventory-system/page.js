import Header from "@/components/Header/Header";
import InventoryConfigurator from "@/components/InventoryConfigurator/InventoryConfigurator";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Inventory & Warehouse System — Modular Package Configurator | MOSU",
  description:
    "Configure custom inventory and warehouse management features with transparent modular pricing. Select your core system and add-on modules to generate an instant estimate.",
};

export default function InventorySystemPage() {
  return (
    <>
      <Header />

      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          {/* Top Breadcrumb / Return Nav */}
          <div className={styles.breadcrumbs}>
            <Link href="/#pricing" className={styles.backLink}>
              <span aria-hidden="true">←</span> Back to Service Packages
            </Link>
          </div>

          {/* Page Heading */}
          <header className={styles.pageHeader}>
            <span className={styles.eyebrow}>Interactive Configurator</span>
            <h1 className={styles.pageTitle}>Inventory &amp; Warehouse System</h1>
            <p className={styles.pageSub}>
              Sistem dibuat custom, ringan, dan dirancang khusus agar alur stok di gudang tercatat rapi tanpa ribet. Biaya bersifat transparan dan fleksibel — pilih hanya modul yang benar-benar dibutuhkan operasional Anda.
            </p>
          </header>

          {/* Interactive Configurator */}
          <InventoryConfigurator />
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p>© {new Date().getFullYear()} Modern Solution (MOSU). All rights reserved.</p>
            <div className={styles.footerLinks}>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#projects">Projects</Link>
              <a href="https://wa.me/6287725064056" target="_blank" rel="noopener noreferrer">
                WhatsApp Studio ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
