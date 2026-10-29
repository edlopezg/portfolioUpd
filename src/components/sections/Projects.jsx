import { FadeIn } from "../motion/Reveal";
import { motion } from "framer-motion";
import { useSettings } from "../../context/Settings";
import "./Projects.css";

export default function Projects() {
  const { t } = useSettings();
  const p = t.projects;

  return (
    <section className="section scroll-margin" id="projects">
      <div className="container">
        <div className="section-header">
          <FadeIn>
            <span className="badge">{p.badge}</span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="heading-lg">{p.heading}</h2>
          </FadeIn>
        </div>

        <div className="projects-grid">
          {p.items.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06} y={20}>
              <motion.a
                className="project-card"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <span className="project-arrow">↗</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <span className="project-link">{p.visit}</span>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
