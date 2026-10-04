import Reveal from "../components/animation/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
export default function Academics() {
  return (
    <section className="academics section" id="academics">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <SectionLabel>02 / ACADEMICS</SectionLabel>
            <h2>
              Rigour with room
              <br />
              <span>to think differently.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p>
              Our CBSE curriculum prioritises reasoning and analytical thinking,
              complemented by project-based, art-integrated and experiential
              learning.
            </p>
            <a
              className="text-link"
              href="https://tis.edu.in/academics/affilation/"
              target="_blank"
              rel="noreferrer"
            >
              Explore academics <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
        <div className="academic-cards">
          <Reveal>
            <article className="feature-card dark">
              <span className="card-no">01</span>
              <h3>
                Future-ready
                <br />
                classrooms
              </h3>
              <p>
                Digital classrooms, immersive technology and online assessment
                support a more connected learning experience.
              </p>
              <span className="card-arrow">
                <ArrowRight />
              </span>
            </article>
          </Reveal>
          <Reveal>
            <article className="feature-card image-card">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                alt="Students learning in a classroom"
              />
              <div>
                <span className="card-no">02</span>
                <h3>
                  Learning
                  <br />
                  beyond the textbook
                </h3>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article className="feature-card accent">
              <span className="card-no">03</span>
              <h3>
                Ambition,
                <br />
                supported early.
              </h3>
              <p>
                Olympiads, competitive-exam preparation and career guidance help
                students explore what comes next.
              </p>
              <span className="card-arrow">
                <ArrowRight />
              </span>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
