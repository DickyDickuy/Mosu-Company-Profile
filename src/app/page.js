import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLogo}>
          <div style={{ width: 120, height: 36, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <Image src="/Logo.png" alt="MOSU Logo" width={120} height={120} style={{ objectFit: 'cover' }} />
          </div>
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tech">Tech Stack</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Contact Us</a>
      </nav>

      <main>
        {/* Hero */}
        <section className={`${styles.hero} ${styles.container}`}>
          <h1>
            Modern Problems Require<br />
            <span className={styles.heroBlue}>Modern Solutions</span>
          </h1>
          <p className={styles.heroSub}>
            We are a student-driven tech venture that delivers professional
            web development, IT infrastructure, and design services. 5 paid
            contracts in 9 months — zero connections, all results.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.btnPrimary}>See Our Work</a>
            <a href="#contact" className={styles.btnOutline}>Get In Touch</a>
          </div>
        </section>

        {/* About */}
        <section id="about" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <h2 className={styles.sectionTitle}>About MOSU</h2>
                <p>
                  Modern Solution (MOSU) is a tech venture founded in August
                  2024 by 8 university students with diverse technical
                  backgrounds. We started with nothing — no clients, no
                  network, no funding.
                </p>
                <p>
                  Within 9 months, we secured and delivered 5 paid client
                  contracts through the quality of our work alone. We handle
                  everything from full-stack web development and server
                  administration to UI/UX design and social media management.
                </p>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>5+</div>
                  <div className={styles.statLabel}>Clients Served</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>2024</div>
                  <div className={styles.statLabel}>Since</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>8</div>
                  <div className={styles.statLabel}>Professionals</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Delivery Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <h2 className={styles.sectionTitle}>Our Services</h2>
              <p className={styles.sectionSub}>
                End-to-end digital solutions for businesses of all sizes.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚡</div>
                <h3>Web Development</h3>
                <p>
                  Full-stack websites from landing pages to complex CMS using
                  Next.js, React, MongoDB, WordPress, and PHP.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🖥️</div>
                <h3>IT Support & Server Ops</h3>
                <p>
                  Domain management, CPanel administration, and Linux server
                  configuration for high-availability systems.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🎨</div>
                <h3>UI/UX & Social Media</h3>
                <p>
                  Responsive interface design and brand visibility management
                  through strategic social media content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <h2 className={styles.sectionTitle}>Our Projects</h2>
              <p className={styles.sectionSub}>
                Real projects delivered to real clients with measurable results.
              </p>
            </div>


            <div className={styles.projectCard}>
              <Image
                src="/project-charlotte.png"
                alt="Charlotte Coconut Sugar - Corporate Website"
                width={550}
                height={280}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3>Charlotte Essence</h3>
                <p>
                  Full-stack corporate website for a coconut sugar brand. We led
                  the development of the web platform and managed domain
                  infrastructure and corporate email systems.
                </p>
                <a
                  href="https://charlottecocosugar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit charlottecocosugar.com →
                </a>
              </div>
            </div>

            <div className={styles.projectCard}>
              <Image
                src="/project-empatimusik.png"
                alt="Empati Musik - Music Platform"
                width={550}
                height={280}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3>Empati Musik</h3>
                <p>
                  Designed and launched a music community platform on a tight
                  deadline through solid frontend-backend team collaboration.
                  Delivered on time with a polished user experience.
                </p>
                <a
                  href="https://empati-musik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit empati-musik.com →
                </a>
              </div>
            </div>

            <div className={styles.projectCard}>
              <Image
                src="/project-hayrat.png"
                alt="Hayrat Indonesia - Organization Website"
                width={550}
                height={280}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3>Hayrat Indonesia</h3>
                <p>
                  Corporate website redesign for a nonprofit organization.
                  Delivered an authoritative, institutional web presence with a
                  professional identity aligned to the organization's mission.
                </p>
                <a
                  href="https://hayrat-compro.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit hayratindonesia.com →
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image
                src="/project-exionpw.png"
                alt="Exion PW - Gaming Wiki Platform"
                width={550}
                height={280}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3>Exion PW</h3>
                <p>
                  Large-scale gaming wiki platform built with custom WordPress
                  and PHP. We developed and deployed the platform and managed
                  Linux servers to ensure stability for an active gaming
                  community.
                </p>
                <a
                  href="https://exionpw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit exionpw.com →
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image
                src="/gioputrasinergi.png"
                alt="PT GIO PUTRA SINERGI"
                width={550}
                height={280}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3>GIO PUTRA SINERGI</h3>
                <p>
                  GIO PUTRA SINERGI has experienced in water technologies and know-how to treat various of water and waste waters and meet to the quality. We are currently implementing a new generation of water treatment technologies such as Water Recycle, Reuse Water Plant, and complex water treatment system.
                </p>
                <a
                  href="https://gioputrasinergi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit exionpw.com →
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <Image
                src="/project-pwczone.png"
                alt="PWC Zone - Gaming Community Portal"
                width={550}
                height={280}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3>PWC Zone</h3>
                <p>
                  A gaming community zone portal providing resources, guides,
                  and community features for gamers. Built and maintained with a
                  focus on performance and user engagement.
                </p>
                <a
                  href="https://pwczone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit pwczone.com →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <h2 className={styles.sectionTitle}>Tech Stack</h2>
              <p className={styles.sectionSub}>
                The technologies we work with daily.
              </p>
            </div>
            <div className={styles.techGrid}>
              <span className={styles.techPill}>Next.js</span>
              <span className={styles.techPill}>React</span>
              <span className={styles.techPill}>JavaScript</span>
              <span className={styles.techPill}>HTML & CSS</span>
              <span className={styles.techPill}>MongoDB</span>
              <span className={styles.techPill}>Python</span>
              <span className={styles.techPill}>PHP</span>
              <span className={styles.techPill}>WordPress</span>
              <span className={styles.techPill}>Linux</span>
              <span className={styles.techPill}>CPanel</span>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <h3>MOSU</h3>
                <p>
                  Modern Solution — a student-driven tech venture delivering
                  professional digital solutions for businesses.
                </p>
              </div>
              <div className={styles.footerNav}>
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#tech">Tech Stack</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              © {new Date().getFullYear()} Modern Solution (MOSU). All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
