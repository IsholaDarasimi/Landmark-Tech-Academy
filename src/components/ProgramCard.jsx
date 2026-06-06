import { Link } from "react-router-dom";

export default function ProgramCard({ program, compact = false }) {
  return (
    <div className="card-hover group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-cisco-blue/30">
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${program.color}`} />

      <div className={compact ? "p-5" : "p-6"}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div
            className={`${
              compact ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl"
            } rounded-lg bg-gradient-to-br ${program.color} bg-opacity-10 flex items-center justify-center shadow-sm`}
            style={{ background: "rgba(4,159,217,0.08)" }}
          >
            {program.icon}
          </div>
          <span className="text-xs font-mono font-medium text-cisco-blue bg-cisco-blue/8 border border-cisco-blue/20 px-2 py-1 rounded-md">
            {program.level}
          </span>
        </div>

        <h3 className={`font-display font-semibold text-cisco-navy ${compact ? "text-base" : "text-lg"} mb-2 leading-tight group-hover:text-cisco-blue transition-colors duration-200`}>
          {program.title}
        </h3>

        {!compact && (
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            {program.description}
          </p>
        )}

        {/* Audience badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-gray-400 font-mono">For:</span>
          <span className="text-xs text-gray-600 font-medium">{program.audience}</span>
        </div>

        {/* Topics */}
        {!compact && (
          <div className="flex flex-wrap gap-2 mb-5">
            {program.topics.map((topic) => (
              <span
                key={topic}
                className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-display font-semibold text-cisco-blue hover:text-cisco-accent transition-colors duration-200 group/link"
        >
          Enquire About Program
          <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </div>
  );
}
