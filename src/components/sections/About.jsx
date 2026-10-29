import { FadeIn } from "../motion/Reveal";
import { useSettings } from "../../context/Settings";
import "./About.css";

export default function About() {
  const { t, profile } = useSettings();
  const about = t.about;

  return (
    <section className="section scroll-margin" id="about">
      <div className="container about-wrap">
        <FadeIn>
          <span className="badge">{about.badge}</span>
        </FadeIn>

        <div className="about-content">
          <FadeIn delay={0.1}>
            <div className="about-photo-wrap">
              <div className="about-photo-frame">
                <img src={profile.aboutPhoto} alt={profile.name} className="about-photo" />
              </div>
              <div className="about-details">
                <div className="about-detail">
                  <span>{about.basedIn}</span>
                  <strong>{t.profile.location}</strong>
                </div>
                <div className="about-detail">
                  <span>{about.email}</span>
                  <strong>{profile.email}</strong>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="about-right">
              <h2 className="heading-lg">{about.heading}</h2>
              <p className="about-body">{about.body}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
