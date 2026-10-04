import Reveal from "../components/animation/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import { stats } from "../data/site";
export default function About() {
  return (
    <>
      <section className="intro section" id="about">
        <div className="container intro-grid">
          <Reveal>
            <SectionLabel>01 / THE TIS APPROACH</SectionLabel>
            <h2>
              More than a school.
              <br />
              <span>A place to belong.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="lead">
              Tulas International School brings together a strong CBSE
              curriculum, residential life and an unusually broad range of
              experiences. The aim is simple: help every student become capable,
              curious and confident.
            </p>
            <a className="text-link" href="#academics">
              Our approach <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
      <section className="stats-band">
        <div className="container stats">
          {stats.map(([n, t]) => (
            <Reveal key={n}>
              <div className="stat">
                <strong>{n}</strong>
                <span>{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
