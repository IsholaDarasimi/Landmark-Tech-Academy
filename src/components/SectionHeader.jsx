export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-cisco-blue" />
          <span className="text-cisco-blue text-xs font-mono font-medium uppercase tracking-widest">
            {eyebrow}
          </span>
          <span className="w-6 h-px bg-cisco-blue" />
        </div>
      )}
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl leading-tight mb-4 ${
          light ? "text-white" : "text-cisco-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
