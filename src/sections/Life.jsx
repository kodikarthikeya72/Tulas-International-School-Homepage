import Reveal from "../components/animation/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import { ArrowRight, Check } from "lucide-react";
export default function Life() {
  return (
    <section className="life section" id="life">
      <div className="container life-grid">
        <div className="life-image">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1500&q=85"
            alt="Students enjoying time together outdoors"
          />
          <span className="image-label">LIFE AT TIS</span>
        </div>
        <div className="life-copy">
          <Reveal>
            <SectionLabel>03 / BEYOND ACADEMICS</SectionLabel>
            <h2>
              Find your
              <br />
              <span>thing.</span>
            </h2>
            <p>
              From sport and music to clubs, societies and leadership, students
              have space to discover interests—and the responsibility to take
              them further.
            </p>
            <div className="check-list">
              {[
                "16+ sports and athletic disciplines",
                "Clubs, societies and student leadership",
                "Boarding life built around community",
              ].map((x) => (
                <div key={x}>
                  <span>
                    <Check size={14} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
            <a
              className="text-link"
              href="https://tis.edu.in/beyond-academics/clubs-and-societies/"
              target="_blank"
              rel="noreferrer"
            >
              Explore student life <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
