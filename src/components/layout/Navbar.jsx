import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "../../data/site";
export default function Navbar({ dark, setDark, menu, setMenu }) {
  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top">
            <span className="brand-mark">T</span>
            <span>
              TULA'S
              <br />
              <small>INTERNATIONAL SCHOOL</small>
            </span>
          </a>
          <div className="nav-links">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-cta" href="#admissions">
              Apply now <ArrowRight size={16} />
            </a>
            <button
              className="menu-btn"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-top">
              <a className="brand" href="#top" onClick={() => setMenu(false)}>
                <span className="brand-mark">T</span>
                <span>
                  TULA'S
                  <br />
                  <small>INTERNATIONAL SCHOOL</small>
                </span>
              </a>
              <button
                className="icon-btn"
                onClick={() => setMenu(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <div className="mobile-links">
              {NAV.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                  {label}
                  <ArrowRight size={18} />
                </a>
              ))}
            </div>
            <a
              className="mobile-apply"
              href="#admissions"
              onClick={() => setMenu(false)}
            >
              Start an enquiry <ArrowRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
