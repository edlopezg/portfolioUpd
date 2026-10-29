import { FadeIn, RevealDivider } from "../motion/Reveal";
import { motion } from "framer-motion";
import { useSettings } from "../../context/Settings";
import "./Skills.css";

export default function Skills() {
  const { t } = useSettings();
  const skills = t.skills;

  return (
    <section className="section scroll-margin" id="skills">
      <div className="container">
        <div className="section-header">
          <FadeIn>
            <span className="badge">{skills.badge}</span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="heading-lg">{skills.heading}</h2>
          </FadeIn>
        </div>

        <div className="skills-list">
          {skills.groups.map((group, i) => (
            <div key={group.title}>
              <RevealDivider delay={i * 0.05} />
              <FadeIn delay={i * 0.05} y={14}>
                <div className="skill-row">
                  <span className="skill-number">{group.number}</span>
                  <h3 className="skill-title">{group.title}</h3>
                  <div className="skill-tags">
                    {group.tags.map((tag, j) => (
                      <motion.span
                        className="skill-tag"
                        key={tag}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: j * 0.04 }}
                        whileHover={{ y: -3 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
          <div className="divider" />
        </div>
      </div>
    </section>
  );
}
