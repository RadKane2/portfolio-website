import type { Skill } from "../../data/skills";

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <article className="group h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:border-cyan-400/40">
          <Icon size={24} />
        </div>

        <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-400">
          {skill.context}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        {skill.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {skill.description}
      </p>
    </article>
  );
}

export default SkillCard;