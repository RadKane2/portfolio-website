import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  download?: boolean;
  external?: boolean;
}

function Button({
  children,
  href,
  variant = "primary",
  download = false,
  external = false,
}: ButtonProps) {
  const styles = {
    primary:
      "inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300",

    outline:
      "inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400",
  };

  return (
    <a
      href={href}
      className={styles[variant]}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Button;