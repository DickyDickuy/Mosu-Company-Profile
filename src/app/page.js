import styles from "./page.module.css";
import Image from "next/image";
import Header from "../components/Header/Header";
import Pricing from "../components/Pricing/Pricing";

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
            <strong> 20+ web platforms and cloud systems delivered</strong>, built with technical precision and proven results.
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
                <div className={styles.metricNumber}>20+</div>
                <div className={styles.metricLabel}>Projects Delivered</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumber}>99.9%</div>
                <div className={styles.metricLabel}>Server Uptime</div>
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
              {/* Flagship Project: PT Krakatau Baja Konstruksi (Full Width) */}
              <article className={`${styles.projectCard} ${styles.projectCardFeatured}`}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-bajakonstruksi.png"
                    alt="PT Krakatau Baja Konstruksi corporate website preview"
                    width={800}
                    height={450}
                    sizes="(max-width: 960px) 100vw, 800px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Enterprise Manufacturing</span>
                    <span className={styles.projectTag}>Company Profile</span>
                  </div>
                  <h3>PT Krakatau Baja Konstruksi</h3>
                  <p>
                    Corporate profile and product showcase for PT Krakatau Baja Konstruksi.
                    Built to present structural steel catalogs, modular building projects, and company news for industrial buyers.
                  </p>
                  <a
                    href="https://www.bajakonstruksi.co.id/compro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit PT Krakatau Baja Konstruksi company profile (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 2: Charlotte Vanilla House */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-charlotte-vanilla.png"
                    alt="Charlotte Vanilla House export platform website preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>B2B Export Platform</span>
                    <span className={styles.projectTag}>International Trade</span>
                  </div>
                  <h3>Charlotte Vanilla House</h3>
                  <p>
                    International export platform for PT Royal Nova Nusantara under the Charlotte Essence brand,
                    presenting grade-A Indonesian vanilla beans, technical specifications, and direct buyer inquiry flows.
                  </p>
                  <a
                    href="https://charlottevanillahouse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit charlottevanillahouse.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 3: PPTQ Muhammadiyah Ibnu Juraimi */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-ppsb.png"
                    alt="PPTQ Muhammadiyah Ibnu Juraimi student admission website preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Education Portal</span>
                    <span className={styles.projectTag}>Student Admissions</span>
                  </div>
                  <h3>PPTQ Muhammadiyah Ibnu Juraimi</h3>
                  <p>
                    Online student admissions (PPSB) and institutional portal for PPTQ Muhammadiyah Ibnu Juraimi,
                    structuring curriculum details, boarding metrics, and new student registration.
                  </p>
                  <a
                    href="https://ppsb.ibnujuraimi.ponpes.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit ppsb.ibnujuraimi.ponpes.id (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 4: Nomina Creative */}
              <article className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <Image
                    src="/project-nomina.png"
                    alt="Nomina Creative Agency and Event Organizer website preview"
                    width={550}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag}>Creative Agency</span>
                    <span className={styles.projectTag}>Event Production</span>
                  </div>
                  <h3>Nomina Creative</h3>
                  <p>
                    Official website for a multidisciplinary creative agency and event production studio.
                    Engineered a modern digital archive showcasing high-profile client productions, brand narratives, and end-to-end event execution.
                  </p>
                  <a
                    href="https://nomina-creative.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label="Visit nomina-creative.com (opens in a new tab)"
                  >
                    Explore website <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>

              {/* Project 5: PT Gio Putra Sinergi */}
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

              {/* Project 6: Hayrat Indonesia */}
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

              {/* Project 7: Empati Musik */}
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

              {/* Project 8: RANDY' Portfolio (Archived) */}
              <article className={`${styles.projectCard} ${styles.projectCardArchived}`}>
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
                    High-concept personal and executive portfolio for a CEO and Creative Visionary.
                    Crafted with bold typographic scale and high-impact digital storytelling.
                  </p>
                  <div className={styles.projectArchiveBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Delivered Archive</span>
                  </div>
                </div>
              </article>

              {/* Project 9: Charlotte Coco Sugar (Archived) */}
              <article className={`${styles.projectCard} ${styles.projectCardArchived}`}>
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
                  <h3>Charlotte Coco Sugar</h3>
                  <p>
                    Full-stack corporate platform for an organic coconut sugar exporter.
                    Spearheaded web development, domain infrastructure, and secure communication.
                  </p>
                  <div className={styles.projectArchiveBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Delivered Archive</span>
                  </div>
                </div>
              </article>

              {/* Project 10: Exion PW (Archived) */}
              <article className={`${styles.projectCard} ${styles.projectCardArchived}`}>
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
                  <div className={styles.projectArchiveBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Delivered Archive</span>
                  </div>
                </div>
              </article>

              {/* Project 11: PWC Zone (Archived) */}
              <article className={`${styles.projectCard} ${styles.projectCardArchived}`}>
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
                  <div className={styles.projectArchiveBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Delivered Archive</span>
                  </div>
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
                  Linux server deployment, Dokploy PaaS, domain &amp; DNS infrastructure, email systems, and security hardening for 99.9% uptime.
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

        {/* Tech Stack */}
        <section id="tech" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionCenter}>
              <span className={styles.sectionEyebrow}>Technology</span>
              <h2 className={styles.sectionTitle}>Tech Stack &amp; Tools.</h2>
              <p className={styles.sectionSub}>
                Battle-tested tools and frameworks we leverage to ship robust products.
              </p>
            </div>
            <ul className={styles.techGrid} aria-label="Technologies used">
              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.56 16.96l-6.14-8.08v8.08H9.8V7.04h1.56l6.16 8.12V7.04h1.64v9.92h-1.6z" />
                  </svg>
                </span>
                <span>Next.js</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="-11.5 -10.23 23 20.46" width="18" height="18" fill="none" aria-hidden="true">
                    <circle cx="0" cy="0" r="2.05" fill="#087EA4" />
                    <g stroke="#087EA4" strokeWidth="1">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                </span>
                <span>React</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF5D01" aria-hidden="true">
                    <path d="M8.36 20.16c-1.19-1.07-1.53-3.35-1.53-3.35s1.65.66 2.87.15c0 0-.25-.82-.25-.82a5.14 5.14 0 0 1-1.04-.62c-1.05-.84-1.47-2.25-1.47-2.25s1.4.48 2.67.13c0 0-.3-.79-.3-.79a5.56 5.56 0 0 1-1.04-.76C7.23 10.74 7 9.29 7 9.29s1.67.52 3.02.17L12 3.84l1.98 5.62c1.35.35 3.02-.17 3.02-.17s-.23 1.45-1.27 2.57c-.35.37-.7.63-1.04.76 0 0-.3.79-.3.79 1.27.35 2.67-.13 2.67-.13s-.42 1.41-1.47 2.25c-.33.26-.68.47-1.04.62 0 0-.25.82-.25.82 1.22.51 2.87-.15 2.87-.15s-.35 2.28-1.53 3.35c-1.47 1.33-3.65 1.84-3.65 1.84s-2.18-.51-3.65-1.84z" />
                  </svg>
                </span>
                <span>Astro</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#3178C6" aria-hidden="true">
                    <rect width="24" height="24" rx="4" fill="#3178C6" />
                    <path d="M12.5 13.5v-2h-3v-6h-2v6h-3v2h8zm6.5-1.5c-.5-.5-1.2-.8-2.2-.8-.7 0-1.2.2-1.6.5-.4.3-.6.7-.6 1.2 0 .4.2.8.5 1 .3.2.8.4 1.5.6.9.3 1.6.6 2 .9.5.4.7.9.7 1.6 0 .8-.3 1.5-1 2s-1.5.8-2.6.8c-.8 0-1.6-.2-2.3-.6-.7-.4-1.2-1-1.4-1.8l1.8-.8c.2.6.5 1 1 1.2.4.2 1 .3 1.6.3.7 0 1.3-.2 1.7-.5.4-.3.6-.7.6-1.2 0-.4-.1-.7-.4-.9-.3-.2-.8-.4-1.6-.7-.9-.3-1.6-.6-2-.9-.5-.4-.7-.9-.7-1.6 0-.8.3-1.5.9-2s1.4-.8 2.4-.8c.7 0 1.4.2 2 .5.6.3 1 .8 1.3 1.4l-1.7.9z" fill="#fff" />
                  </svg>
                </span>
                <span>TypeScript / JS</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                    <path d="M18.5 8.5C18.5 5 15.5 2 12 2C8.5 2 5.5 5 5.5 8.5C5.5 13.5 12 18 12 18" stroke="#24C8DB" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M5.5 15.5C5.5 19 8.5 22 12 22C15.5 22 18.5 19 18.5 15.5C18.5 10.5 12 6 12 6" stroke="#FFC131" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Tauri</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#339933" aria-hidden="true">
                    <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.7v8.6L12 21.7l7.5-4.4V8.7L12 4.3z" />
                  </svg>
                </span>
                <span>Node.js</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#FF2D20" aria-hidden="true">
                    <path d="M8.2 3.1L3 6.1v11.8l5.2 3 5.2-3V6.1l-5.2-3zm0 2.1l3.4 1.9v3.9L8.2 9.1 4.8 7.2l3.4-2zm-3.4 4.1l3.4 1.9v7.7l-3.4-1.9V9.3zm8.6 7.7V9.3l3.4-1.9v7.7l-3.4 1.9zm7.6-5.8l-3.4 1.9v3.9l3.4-1.9v-3.9z" />
                  </svg>
                </span>
                <span>Laravel</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                    <path d="M11.87 2c-3.1 0-2.9 1.34-2.9 1.34l.01 1.4h2.95v.42H6.04s-1.9.22-1.9 2.76c0 2.55 1.66 2.68 1.66 2.68h1v-1.42c0-1.63 1.39-1.54 1.39-1.54h2.89c1.55 0 1.5-1.44 1.5-1.44V3.42C12.58 2.06 11.87 2 11.87 2zm-1.62 1.04a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#3776AB" />
                    <path d="M12.13 22c3.1 0 2.9-1.34 2.9-1.34l-.01-1.4h-2.95v-.42h5.89s1.9-.22 1.9-2.76c0-2.55-1.66-2.68-1.66-2.68h-1v1.42c0 1.63-1.39 1.54-1.39 1.54h-2.89c-1.55 0-1.5 1.44-1.5 1.44v2.78c0 1.36.71 1.42.71 1.42zm1.62-1.04a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFD43B" />
                  </svg>
                </span>
                <span>Python</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#EA4B71" strokeWidth="2" aria-hidden="true">
                    <circle cx="6" cy="6" r="3" fill="#EA4B71" />
                    <circle cx="18" cy="6" r="3" fill="#EA4B71" />
                    <circle cx="6" cy="18" r="3" fill="#EA4B71" />
                    <circle cx="18" cy="18" r="3" fill="#EA4B71" />
                    <path d="M6 9v6M9 6h6M18 9v6M9 18h6" />
                  </svg>
                </span>
                <span>n8n</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#4169E1" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V16h-2v2.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11v-2l-4.22-.84C5.7 5.6 8.6 4 12 4c3.4 0 6.3 1.6 7.22 4.16L15 9v2l4.79-1.86c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z" />
                  </svg>
                </span>
                <span>PostgreSQL</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#47A248" aria-hidden="true">
                    <path d="M12 1.5s-.8 1.7-1.3 2.9c-2 4.8-4.7 8.3-4.7 12 0 4.1 2.8 6.6 6 6.6s6-2.5 6-6.6c0-3.7-2.7-7.2-4.7-12-.5-1.2-1.3-2.9-1.3-2.9zm.6 19.3v-8.4c0-.3-.3-.6-.6-.6s-.6.3-.6.6v8.4c-2.3-.4-4.2-2.1-4.2-4.9 0-2.8 2.2-5.7 3.8-9.5.4-.9.7-1.8 1-2.6.3.8.6 1.7 1 2.6 1.6 3.8 3.8 6.7 3.8 9.5 0 2.8-1.9 4.5-4.2 4.9z" />
                  </svg>
                </span>
                <span>MongoDB</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#2496ED" aria-hidden="true">
                    <path d="M13.98 11.08h1.8v1.8h-1.8zm-2.4 0h1.8v1.8h-1.8zm-2.4 0h1.8v1.8h-1.8zm-2.4 0h1.8v1.8h-1.8zm-2.4 0h1.8v1.8h-1.8zm4.8-2.4h1.8v1.8h-1.8zm2.4 0h1.8v1.8h-1.8zm-4.8 0h1.8v1.8h-1.8zm4.8-2.4h1.8v1.8h-1.8zM23.9 11.9c-.3-.2-1.5-.7-2.8-.2-.3-.5-.7-1-1.3-1.4l-.5-.3-.4.4c-.6.6-.9 1.4-.9 2.2 0 .3 0 .5.1.7-.5.3-1.4.5-2.2.5H1.9c-.4 1.7.1 3.5 1.2 4.8 1.4 1.6 3.6 2.5 6.4 2.5 7.6 0 12.3-4.6 12.3-10.2 0-.3 0-.6-.1-.9 1.1-.3 1.9-1.1 2.2-1.6v-.3l-.1-.2z" />
                  </svg>
                </span>
                <span>Docker</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                <span>Dokploy</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </span>
                <span>Linux &amp; Cloud VPS</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#F38020" aria-hidden="true">
                    <path d="M18.3 10.2c-.3-2.4-2.3-4.2-4.8-4.2-2.1 0-3.9 1.4-4.5 3.3C8.6 9.1 8.1 9 7.6 9 5.6 9 4 10.6 4 12.6c0 .3 0 .5.1.8C2.3 14 1 15.6 1 17.5 1 19.9 3 22 5.5 22h13.2c2.4 0 4.3-1.9 4.3-4.3 0-2.1-1.5-3.9-3.7-4.2v-3.3z" />
                  </svg>
                </span>
                <span>Cloudflare</span>
              </li>

              <li className={styles.techPill}>
                <span className={styles.techIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                    <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
                    <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
                    <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
                    <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
                    <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
                  </svg>
                </span>
                <span>Figma UI/UX</span>
              </li>
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutWrapper}>
              <span className={styles.sectionEyebrow}>About MOSU</span>
              <h2 className={styles.sectionTitle}>Crafted with engineering rigor and relentless focus.</h2>
              <div className={styles.aboutGrid}>
                <p>
                  Modern Solution (MOSU) was founded in August 2024 by 5 ambitious programmers
                  with multidisciplinary technical expertise. We launched from scratch,
                  relying entirely on engineering rigor, precision, and client satisfaction.
                </p>
                <p>
                  We have delivered 20+ projects across e-commerce, community platforms,
                  corporate web systems, and industrial infrastructure.
                  We turn ambitious product visions into production-grade digital realities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Service Packages */}
        <Pricing />

        {/* Contact / Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <h3>MOSU</h3>
                <p>
                  Modern Solution (MOSU): A tech venture delivering high-caliber engineering and design for forward-looking businesses.
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
                  <li><a href="#tech">Tech Stack</a></li>
                  <li><a href="#about">About MOSU</a></li>
                  <li><a href="#pricing">Pricing</a></li>
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
