import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, RevealDivider } from "../motion/Reveal";
import { useSettings } from "../../context/Settings";
import "./Experience.css";

export default function Experience() {
  const { t } = useSettings();
  const exp = t.experience;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section scroll-margin" id="experience">
      <div className="container">
        <div className="section-header">
          <FadeIn>
            <span className="badge">{exp.badge}</span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="heading-lg">{exp.heading}</h2>
          </FadeIn>
        </div>

        <div className="exp-list">
          {exp.jobs.map((job, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={job.company}>
                <RevealDivider delay={i * 0.04} />
                <FadeIn delay={i * 0.04} y={14}>
                  <article className={`exp-entry ${isOpen ? "exp-entry--open" : ""}`}>
                    <button
                      className="exp-toggle"
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <div className="exp-meta">
                        <span className="exp-company">{job.company}</span>
                        <span className="exp-dates">{job.dates}</span>
                      </div>
                      <div className="exp-role-row">
                        <h3 className="exp-role">
                          {job.role} <span className="exp-location">· {job.location}</span>
                        </h3>
                        <motion.span
                          className="exp-icon"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          +
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                          className="exp-highlights-wrap"
                        >
                          <ul className="exp-highlights">
                            {job.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                          {job.stack && (
                            <div className="exp-stack">
                              {job.stack.map((s) => (
                                <span key={s} className="exp-stack-tag">
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </FadeIn>
              </div>
            );
          })}
          <div className="divider" />
        </div>
      </div>
    </section>
  );
}
