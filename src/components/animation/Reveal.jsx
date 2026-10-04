import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
