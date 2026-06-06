import { Link } from "react-router-dom";
import { programs, stats, whyChooseUs, partnerSchools } from "../data";
import ProgramCard from "../components/ProgramCard";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* ── HERO ── */}
      <section className="relative bg-mesh min-h-[92vh] flex items-center overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(4,159,217,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(4,159,217,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-cisco-blue/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-cisco-accent/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-cisco-blue/10 border border-cisco-blue/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-cisco-blue animate-pulse" />
                <span className="text-cisco-blue text-xs font-mono font-medium tracking-wider uppercase">
                  Cisco-Aligned ICT Training
                </span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Equipping{" "}
                <span className="text-gradient">Tomorrow's</span>{" "}
                Digital Leaders — Today
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                Landmark Tech Academy delivers structured, world-class ICT training to primary and secondary schools across Nigeria. We partner with institutions to build genuine digital competency in students.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/programs"
                  className="px-7 py-3.5 bg-cisco-blue hover:bg-cisco-accent text-white font-display font-semibold text-sm rounded-md transition-all duration-200 shadow-lg shadow-cisco-blue/30 hover:shadow-cisco-accent/30"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-display font-semibold text-sm rounded-md transition-all duration-200"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-cisco-blue/30 transition-all duration-300"
                >
                  <div className="font-display font-bold text-4xl text-cisco-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}

              {/* Cisco badge */}
              <div className="col-span-2 bg-gradient-to-r from-cisco-blue/10 to-cisco-accent/5 border border-cisco-blue/20 rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-cisco-blue/20 flex items-center justify-center text-2xl flex-shrink-0">
                  🌐
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm mb-1">
                    Cisco Ecosystem Aligned
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    Curriculum built on Cisco Networking Academy frameworks and global best practices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-cisco-blue" />
                <span className="text-cisco-blue text-xs font-mono font-medium uppercase tracking-widest">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-cisco-navy mb-5 leading-tight">
                A Dedicated ICT Training Partner for Nigerian Schools
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Landmark Tech Academy is a specialized ICT training institution headquartered in Gbagada, Lagos. We work directly with primary and secondary schools, embedding technology education into the academic experience through structured, hands-on programs.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our approach is institutional — we partner with school management, align with academic calendars, and deploy certified trainers on-site. The result is measurable digital competency delivered at scale.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-cisco-blue font-display font-semibold text-sm hover:text-cisco-darkblue transition-colors duration-200 group"
              >
                Read Our Story
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                { icon: "🎓", title: "School-Embedded Training", desc: "We come to your school — no commute, no disruption." },
                { icon: "📊", title: "Curriculum-Aligned Programs", desc: "Our programs are designed to complement school timetables." },
                { icon: "🏆", title: "Certificate of Completion", desc: "Every student receives a formal certificate at program end." },
                { icon: "🔄", title: "Ongoing Support", desc: "Post-training follow-up and refresher modules available." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-cisco-blue/20 hover:bg-gray-50/50 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-cisco-blue/8 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-cisco-navy text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="py-20 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Programs"
            title="Structured Digital Skills Training"
            subtitle="Eight comprehensive programs designed to build real-world digital competency at every academic level."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {programs.slice(0, 4).map((program) => (
              <ProgramCard key={program.id} program={program} compact />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cisco-navy hover:bg-cisco-darkblue text-white font-display font-semibold text-sm rounded-md transition-all duration-200"
            >
              View All 8 Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Landmark Tech"
            title="Built for Institutional Excellence"
            subtitle="We don't just deliver courses — we build long-term digital capacity in partner institutions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="card-hover group p-6 rounded-xl border border-gray-100 hover:border-cisco-blue/20 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-cisco-blue/6 flex items-center justify-center text-2xl mb-4 group-hover:bg-cisco-blue/10 transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-cisco-navy text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER SCHOOLS ── */}
      <section className="py-20 bg-cisco-midnight relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(4,159,217,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(4,159,217,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Partner Schools"
            title="Schools We Work With"
            subtitle="A growing network of primary and secondary institutions partnering with us to deliver digital excellence."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {partnerSchools.map((school) => (
              <div
                key={school.id}
                className="card-hover flex items-center gap-4 bg-white/5 border border-white/10 hover:border-cisco-blue/30 rounded-xl p-5"
              >
                <div className="w-14 h-14 rounded-xl border bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="w-full h-full object-contain p-1"
                />
              </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">{school.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{school.type} · {school.location}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-cisco-blue hover:text-cisco-accent font-display font-semibold text-sm transition-colors duration-200"
            >
              See All Partner Schools →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-cisco-blue via-cisco-darkblue to-cisco-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5 leading-tight">
            Ready to Bring Digital Training to Your School?
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Join our growing network of partner institutions. We handle the curriculum, the trainers, and the assessments — you focus on your students' future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cisco-navy font-display font-bold text-sm rounded-md hover:bg-gray-100 transition-all duration-200 shadow-xl"
            >
              Contact Us Today
            </Link>
            <Link
              to="/programs"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-semibold text-sm rounded-md transition-all duration-200"
            >
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
