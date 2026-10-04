import { Play } from "lucide-react";
import Reveal from "../components/animation/Reveal";
import Button from "../components/ui/Button";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2200&q=85"
          alt="Students walking through a school campus"
        />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <Reveal>
          <p className="eyebrow">THE MODERN GURUKUL · DEHRADUN</p>
          <h1>
            Where learning
            <br />
            <em>becomes a way of life.</em>
          </h1>
          <p className="hero-copy">
            A CBSE boarding and day school where academic rigour, character,
            sport and discovery grow together.
          </p>
          <div className="hero-actions">
            <Button href="#admissions">Explore admissions</Button>
            <Button href="#campus" variant="ghost">
              <span className="play">
                <Play size={13} fill="currentColor" />
              </span>{" "}
              Discover the campus
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="hero-note">
        EST. 2012 <span /> DEHRADUN, INDIA
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
}
