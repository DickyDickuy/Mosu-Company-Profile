import styles from "./page.module.css";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className={`${styles.hero} ${styles.container}`}>
          <div className={styles.heroEyebrow}>MOSU • Modern Solution</div>
          <h1 className={styles.heroTitle}>
            Modern problems.<br />
            <span className={styles.heroAccent}>Modern solutions.</span>
          </h1>
          <p className={styles.heroSub}>
            We build high-impact web engineering, cloud infrastructure, and digital interfaces.
            <strong> 5 paid contracts delivered in 9 months</strong> — zero connections, purely driven by craft and results.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.btnPrimary}>
              Explore Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://wa.me/6287725064056" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Contact Studio
            </a>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className={styles.metricsSection} aria-label="Key Performance Metrics">
          <div className={styles.container}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>5+</div>
                <div className={styles.metricLabel}>Projects Delivered</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>2</div>
                <div className={styles.metricLabel}>Years Active</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>5</div>
                <div className={styles.metricLabel}>Engineers &amp; Designers</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>100%</div>
                <div className={styles.metricLabel}>On-Time Delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects (Above the fold proof) */}
        <section id="projects" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <span className={styles.sectionEyebrow}>Showcase</span>
              <h2 className={styles.sectionTitle}>Featured Projects.</h2>
              <p className={styles.sectionSub}>
                Proven solutions delivered to real-world clients with measurable impact.
              </p>
            </div>

            <div className={styles.projectsGrid}>
              {/* Project 1: Randy's Portfolio */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-randy.png"
                    alt="Randy CEO & Creative Visionary personal portfolio website preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Personal Portfolio</span>
                    <span className={styles.projectTag}>Creative Direction</span>
                  </div>
                  <h3>RANDY&apos; Portfolio</h3>
                  <p>
                    High-concept personal and executive portfolio for a CEO &amp; Creative Visionary.
                    Crafted with bold typographic scale and high-impact digital storytelling.
                  </p>
                  <a
                    href="https://randy.nominanetwork.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit randy.nominanetwork.tech (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 2: Charlotte Essence */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-charlotte.png"
                    alt="Charlotte Coconut Sugar corporate website preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>E-Commerce / Corporate</span>
                    <span className={styles.projectTag}>Next.js</span>
                  </div>
                  <h3>Charlotte Essence</h3>
                  <p>
                    Full-stack corporate platform for an organic coconut sugar exporter.
                    Spearheaded web development, domain infrastructure, and secure communication.
                  </p>
                  <a
                    href="https://charlottecocosugar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit charlottecocosugar.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 3: Empati Musik */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-empatimusik.png"
                    alt="Empati Musik platform preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Community Platform</span>
                    <span className={styles.projectTag}>UI/UX Design</span>
                  </div>
                  <h3>Empati Musik</h3>
                  <p>
                    Engaging music community portal delivered on schedule with streamlined navigation
                    and interactive media discovery.
                  </p>
                  <a
                    href="https://empati-musik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit empati-musik.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 4: Hayrat Indonesia */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-hayrat.png"
                    alt="Hayrat Indonesia foundation website preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Non-Profit Foundation</span>
                    <span className={styles.projectTag}>Web Redesign</span>
                  </div>
                  <h3>Hayrat Indonesia</h3>
                  <p>
                    Institutional web redesign for a humanitarian organization, reinforcing trust,
                    donor engagement, and mission transparency.
                  </p>
                  <a
                    href="https://hayrat-compro.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit Hayrat Indonesia web platform (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 5: Exion PW */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-exionpw.png"
                    alt="Exion PW gaming wiki and platform preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Gaming Wiki</span>
                    <span className={styles.projectTag}>Linux Server Ops</span>
                  </div>
                  <h3>Exion PW</h3>
                  <p>
                    Comprehensive gaming wiki and community hub featuring custom platform logic,
                    optimized database search, and high-availability Linux servers.
                  </p>
                  <a
                    href="https://exionpw.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit exionpw.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 6: PT Gio Putra Sinergi */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/gioputrasinergi.png"
                    alt="PT Gio Putra Sinergi industrial engineering website"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Industrial Engineering</span>
                    <span className={styles.projectTag}>Corporate Profile</span>
                  </div>
                  <h3>PT Gio Putra Sinergi</h3>
                  <p>
                    Official corporate platform for an industrial water technology leader,
                    presenting wastewater recycling and environmental engineering solutions.
                  </p>
                  <a
                    href="https://gioputrasinergi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit gioputrasinergi.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 7: PWC Zone */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-pwczone.png"
                    alt="PWC Zone gaming portal preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Gaming Community</span>
                    <span className={styles.projectTag}>Content Portal</span>
                  </div>
                  <h3>PWC Zone</h3>
                  <p>
                    Gaming portal with downloadable resources, game mechanics guides,
                    and member hubs designed for peak speed and seamless reader engagement.
                  </p>
                  <a
                    href="https://pwczone.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit pwczone.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <span className={styles.sectionEyebrow}>Capabilities</span>
              <h2 className={styles.sectionTitle}>Engineered for performance and scale.</h2>
              <p className={styles.sectionSub}>
                End-to-end digital engineering and design solutions tailored for growth.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>Web Development</h3>
                <p>
                  High-performance web applications, dynamic marketing sites, and full-stack platforms using Next.js, React, Node.js, and modern database architectures.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <h3>IT Support &amp; Server Ops</h3>
                <p>
                  Linux server deployment, domain &amp; DNS infrastructure, cPanel management, email systems, and security hardening for 99.9% uptime.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <h3>UI/UX &amp; Brand Design</h3>
                <p>
                  Intuitive interface design, structured design systems, brand identities, and responsive layouts crafted for delightful user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.aboutWrapper}>
              <span className={styles.sectionEyebrow}>About MOSU</span>
              <h2 className={styles.sectionTitle}>Crafted with engineering rigor and relentless focus.</h2>
              <div className={styles.aboutGrid}>
                <p>
                  Modern Solution (MOSU) was founded in August 2024 by 5 ambitious programmers
                  with multidisciplinary technical expertise. We launched from scratch —
                  relying entirely on engineering rigor, precision, and client satisfaction.
                </p>
                <p>
                  Within 9 months of our starting point, we secured and completed 5 paid client contracts across
                  e-commerce, community platforms, corporate web systems, and industrial infrastructure.
                  We turn ambitious product visions into production-grade digital realities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <span className={styles.sectionEyebrow}>Technology</span>
              <h2 className={styles.sectionTitle}>Tech Stack &amp; Tools.</h2>
              <p className={styles.sectionSub}>
                Battle-tested tools and frameworks we leverage to ship robust products.
              </p>
            </div>
            <ul className={styles.techGrid} aria-label="Technologies used">
              <li className={styles.techPill}>Next.js</li>
              <li className={styles.techPill}>React</li>
              <li className={styles.techPill}>Node.js</li>
              <li className={styles.techPill}>JavaScript / TypeScript</li>
              <li className={styles.techPill}>MongoDB</li>
              <li className={styles.techPill}>Python</li>
              <li className={styles.techPill}>PHP / WordPress</li>
              <li className={styles.techPill}>Linux &amp; Cloud VPS</li>
              <li className={styles.techPill}>cPanel &amp; DNS Ops</li>
              <li className={styles.techPill}>UI/UX Figma</li>
            </ul>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <h3>MOSU</h3>
                <p>
                  Modern Solution (MOSU) — A tech venture delivering high-caliber engineering and design for forward-looking businesses.
                </p>
                <div className={styles.footerSocial}>
                  <a
                    href="https://wa.me/6287725064056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerWaBtn}
                    aria-label="Chat on WhatsApp"
                  >
                    Direct WhatsApp: +62 877-2506-4056 ↗
                  </a>
                </div>
              </div>
              <div className={styles.footerNav}>
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#projects">Recent Projects</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About MOSU</a></li>
                  <li><a href="#tech">Tech Stack</a></li>
                  <li><a href="https://wa.me/6287725064056" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>© {new Date().getFullYear()} Modern Solution (MOSU). All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
