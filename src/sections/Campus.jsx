import Reveal from "../components/animation/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
export default function Campus() {
  return (
    <section className="campus section" id="campus">
      <div className="container">
        <Reveal>
          <div className="campus-header">
            <div>
              <SectionLabel>05 / THE CAMPUS</SectionLabel>
              <h2>
                Space to grow
                <br />
                <span>into yourself.</span>
              </h2>
            </div>
            <p>
              A 22-acre campus in Dehradun brings classrooms, residences, sports
              fields, laboratories, libraries and spaces for reflection into one
              walkable environment.
            </p>
          </div>
        </Reveal>
        <div className="campus-gallery">
          <div className="gallery-main">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85"
              alt="Modern school building"
            />
            <span>22 ACRES · DEHRADUN</span>
          </div>
          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1000&q=85"
              alt="School library interior"
            />
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85"
              alt="Science laboratory"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
