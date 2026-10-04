import Reveal from "../components/animation/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { testimonials } from "../data/site";
export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <SectionLabel>06 / FROM OUR PARENTS</SectionLabel>
              <h2>
                What families
                <br />
                <span>remember.</span>
              </h2>
            </div>
            <p>
              Real experiences from parents are one of the clearest windows into
              school life.
            </p>
          </div>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map(([name, role, text], i) => (
            <Reveal key={name}>
              <article className={`testimonial ${i === 1 ? "featured" : ""}`}>
                <div className="stars">★★★★★</div>
                <p>“{text}”</p>
                <footer>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
