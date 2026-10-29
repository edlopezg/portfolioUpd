import { motion } from "framer-motion";
import { useSettings } from "../../context/Settings";
import "./Hero.css";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { t, profile } = useSettings();
  const hero = t.hero;

  return (
    <section className="hero scroll-margin" id="hero">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />

      <div className="container hero-grid">
        <div className="hero-left">
          <motion.h1
            className="hero-headline"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
            }}
          >
            {hero.lines.map((line, i) => (
              <motion.span
                key={line + i}
                variants={{
                  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.75, ease: EASE }}
                className={hero.accent.includes(i) ? "hero-line-accent" : ""}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="hero-annotation-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            <span className="hero-line-rule" />
            <span className="hero-annotation">{hero.annotation}</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          whileHover={{ y: -6 }}
        >
          <div className="hero-photo-wrap">
            <motion.img
              src={profile.photo}
              alt={profile.name}
              className="hero-photo"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
            />
            <div className="hero-photo-shade" />
            <div className="hero-available">
              <span className="pulse-dot" />
              {hero.available}
            </div>
          </div>

          <div className="hero-card-body">
            <div className="hero-name">{profile.name}</div>
            <div className="hero-role">{t.profile.role}</div>
            <p className="hero-text">{hero.text}</p>

            <div className="hero-cv-row">
              <a className="cv-button cv-button--primary" href={profile.resumeEn} download>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {hero.downloadEn}
              </a>
              <a className="cv-button cv-button--ghost" href={profile.resumeEs} download>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {hero.downloadEs}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95 }}
      >
        <a href="#contact" className="cta-button">
          {hero.cta} <span className="cta-arrow">→</span>
        </a>
      </motion.div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="hint-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
