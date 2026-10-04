import { sports } from "../data/site";
export default function Sports() {
  return (
    <section className="sports">
      <div className="container">
        <div className="sports-top">
          <div>
            <p className="eyebrow">04 / SPORT</p>
            <h2>
              Discipline.
              <br />
              <em>Joy. Momentum.</em>
            </h2>
          </div>
          <p>
            At Tulas, sport is not just a facility. It is part of the
            foundation—16+ disciplines designed to build confidence, teamwork
            and resilience.
          </p>
        </div>
        <div className="sport-list">
          {sports.map((s, i) => (
            <span key={s}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
