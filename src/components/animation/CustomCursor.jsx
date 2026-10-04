import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => setActive(Boolean(e.target.closest("a,button")));
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, []);
  return (
    <motion.div
      className={`cursor ${active ? "active" : ""}`}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      aria-hidden="true"
    />
  );
}
