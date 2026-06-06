import { useState } from "react";
import { programs } from "../data";
import ProgramCard from "../components/ProgramCard";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const levels = ["All", "Foundation", "Beginner", "Intermediate", "Awareness"];

export default function Programs() {
  const [activeLevel, setActiveLevel] = useState("All");

  const filtered =
    activeLevel === "All"
      ? programs
      : programs.filter((p) => p.level === activeLevel);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Page Hero */}
      <section className="bg-cisco-midnight relative overflow-hidden py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(4,159,217,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(4,159,217,0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-cisco-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cisco-blue/10 border border-cisco-blue/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cisco-blue" />
            <span className="text-cisco-blue text-xs font-mono font-medium tracking-wider uppercase">
              Our Programs
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-5 max-w-3xl mx-auto">
            Eight Programs. One Mission: Digital Excellence.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Structured, hands-on ICT training designed to build genuine digital competency in students from primary through secondary school.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-5 py-2 rounded-full text-sm font-display font-medium transition-all duration-200 ${
                  activeLevel === level
                    ? "bg-cisco-blue text-white shadow-md shadow-cisco-blue/25"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-cisco-blue/40 hover:text-cisco-blue"
                }`}
              >
                {level}
                {level !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({programs.filter((p) => p.level === level).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No programs found for this level.
            </div>
          )}
        </div>
      </section>

      {/* Program Delivery Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="Program Delivery at Your School"
            subtitle="Every program is delivered on-site at your institution, tailored to your students' level, and aligned with your academic calendar."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📅", title: "Flexible Scheduling", desc: "Programs run across a defined term period, scheduled around your school calendar and examination windows." },
              { icon: "👥", title: "Class Size", desc: "Optimized cohorts of 20–30 students ensure individual attention and practical lab time for every participant." },
              { icon: "📜", title: "Certification", desc: "Successful students receive an official Landmark Tech Academy Certificate of Digital Competency at program completion." },
              { icon: "🔧", title: "Equipment", desc: "We assess your school's infrastructure and work with what you have, or advise on minimum requirements for each program." },
              { icon: "📊", title: "Progress Reporting", desc: "School management receives structured progress reports at midpoint and program completion." },
              { icon: "🤝", title: "Ongoing Partnership", desc: "Partner schools get priority access to new programs, refresher modules, and institutional pricing." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cisco-blue/8 flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-cisco-navy text-sm mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-cisco-blue to-cisco-darkblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Interested in a Program for Your School?
          </h2>
          <p className="text-blue-200 mb-8">
            Reach out to us to discuss program selection, scheduling, and how we can tailor our training to your students.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cisco-navy font-display font-bold text-sm rounded-md hover:bg-gray-100 transition-all duration-200"
            >
              Contact Us →
            </Link>
            <Link
              to="/partners"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-display font-semibold text-sm rounded-md hover:bg-white/20 transition-all duration-200"
            >
              View Partner Schools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
