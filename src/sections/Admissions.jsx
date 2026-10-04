import Reveal from "../components/animation/Reveal";
import { ArrowRight, Phone, Mail } from "lucide-react";
export default function Admissions() {
  return (
    <section className="admissions" id="admissions">
      <div className="container admission-inner">
        <Reveal>
          <p className="eyebrow">07 / ADMISSIONS 2027</p>
          <h2>
            Ready to see
            <br />
            <em>what Tulas feels like?</em>
          </h2>
          <p>
            Registrations are open for Classes IV–IX and XI. Start with an
            enquiry, then visit the campus and discover the fit for your child.
          </p>
          <div className="admission-actions">
            <a
              className="btn light"
              href="https://admission.tis.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Start an application <ArrowRight size={17} />
            </a>
            <a className="btn outline-light" href="tel:+919837983791">
              Call admissions <Phone size={16} />
            </a>
          </div>
        </Reveal>
        <div className="admission-meta">
          <span>
            <Phone size={15} /> +91 98379 83791
          </span>
          <span>
            <Mail size={15} /> info@tis.edu.in
          </span>
        </div>
      </div>
    </section>
  );
}
