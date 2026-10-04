import { ArrowRight } from "lucide-react";
export default function Button({
  children,
  href = "#",
  variant = "primary",
  external = false,
}) {
  return (
    <a
      className={`btn ${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}
