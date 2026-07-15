interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;