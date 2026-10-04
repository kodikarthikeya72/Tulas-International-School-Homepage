import { Mail, MapPin, Phone } from "lucide-react";
import { NAV } from "../../data/site";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">T</span>
            <span>
              TULA'S
              <br />
              <small>INTERNATIONAL SCHOOL</small>
            </span>
          </a>
          <p>
            CBSE boarding & day school
            <br />
            Dehradun, Uttarakhand
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`}>
              {l}
            </a>
          ))}
        </div>
        <div>
          <h4>Admissions</h4>
          <a href="https://admission.tis.edu.in/">Apply now</a>
          <a href="https://tis.edu.in/admission-procedure/">
            Admission process
          </a>
          <a href="https://tis.edu.in/faq/">FAQs</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+919837983791">
            <Phone size={14} /> +91 98379 83791
          </a>
          <a href="mailto:info@tis.edu.in">
            <Mail size={14} /> info@tis.edu.in
          </a>
          <span>
            <MapPin size={14} /> Dhoolkot, Selaqui, Dehradun
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Tulas International School. All rights reserved.</span>
        <span>Frontend assessment redesign.</span>
      </div>
    </footer>
  );
}
