import { FadeIn, RevealDivider } from "../motion/Reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSettings } from "../../context/Settings";
import "./Education.css";

function LanguageBar({ name, level, value, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="lang-item" ref={ref}>
      <div className="lang-row">
        <span className="lang-name">{name}</span>
        <span className="lang-meta">
          <span className="lang-level">{level}</span>
          <span className="lang-value">{value}%</span>
        </span>
      </div>
      <div className="lang-track">
        <motion.div
          className="lang-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Education() {
  const { t } = useSettings();
  const edu = t.education;

  return (
    <section className="section scroll-margin" id="education">
      <div className="container">
        <div className="section-header">
          <FadeIn>
            <span className="badge">{edu.badge}</span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="heading-lg">{edu.heading}</h2>
          </FadeIn>
        </div>

        <div className="edu-list">
          {edu.items.map((item, i) => (
            <div key={item.title}>
              <RevealDivider delay={i * 0.06} />
              <FadeIn delay={i * 0.06} y={14}>
                <div className="edu-item">
                  <h3 className="edu-title">{item.title}</h3>
                  <p className="edu-institution">{item.institution}</p>
                  <span className="edu-date">{item.date}</span>
                </div>
              </FadeIn>
            </div>
          ))}
          <div className="divider" />
        </div>

        <FadeIn delay={0.1}>
          <div className="languages">
            <h3 className="languages-heading">{edu.languagesHeading}</h3>
            <div className="languages-list">
              {edu.languages.map((lang, i) => (
                <LanguageBar key={lang.name} {...lang} delay={i * 0.12} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
