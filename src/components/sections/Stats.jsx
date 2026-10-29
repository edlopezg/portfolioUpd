import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useSettings } from "../../context/Settings";
import "./Stats.css";

function Counter({ raw }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = raw.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : raw;
  const isDecimal = String(target).includes(".");
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) =>
    isDecimal ? v.toFixed(1) : String(Math.round(v))
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, mv, target]);

  return (
    <span ref={ref} className="stat-number">
      {match ? <motion.span>{display}</motion.span> : null}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useSettings();

  return (
    <section className="stats">
      <div className="container stats-grid">
        {t.stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Counter raw={s.number} />
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
