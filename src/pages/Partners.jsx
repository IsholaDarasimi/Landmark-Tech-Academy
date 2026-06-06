import { Link } from "react-router-dom";
import { partnerSchools } from "../data";
import SectionHeader from "../components/SectionHeader";

const testimonials = [
  {
    quote: "The structured approach Landmark Tech brought to our school was impressive. Students who previously feared computers are now coding basic websites.",
    name: "Mrs. Adeyemi",
    role: "Head of ICT, Excel Heights Academy",
    initials: "AA",
  },
  {
    quote: "Their trainers were professional, punctual, and genuinely invested in our students' progress. We renewed the partnership for a second term immediately.",
    name: "Mr. Okafor",
    role: "Principal, Sunrise International School",
    initials: "MO",
  },
  {
    quote: "The digital literacy program transformed how our primary school students interact with technology. Parents have noticed the difference at home too.",
    name: "Mrs. Babatunde",
    role: "Director, Greenfield Primary School",
    initials: "FB",
  },
];

const partnerTypes = [
  { type: "Primary Schools", count: "4+", icon: "🏫" },
  { type: "Secondary Schools", count: "9+", icon: "🎓" },
  { type: "States Covered", count: "5", icon: "📍" },
  { type: "Students Trained", count: "7,000+", icon: "👩‍💻" },
];

export default function Partners() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cisco-blue/10 border border-cisco-blue/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cisco-blue" />
            <span className="text-cisco-blue text-xs font-mono font-medium tracking-wider uppercase">
              Our Partners
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-5">
            A Growing Network of Forward-Thinking Schools
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We work with primary and secondary schools that share our belief: every student deserves quality digital education delivered with professionalism and purpose.
          </p>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((item) => (
              <div key={item.type} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-display font-bold text-3xl text-cisco-blue mb-1">{item.count}</div>
                <div className="text-gray-500 text-sm">{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner School Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Partner Schools"
            title="Schools Currently In Partnership"
            subtitle="Each partnership is a long-term commitment to institutional digital transformation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {partnerSchools.map((school) => (
              <div
                key={school.id}
                className="card-hover bg-white border border-gray-100 hover:border-cisco-blue/20 rounded-xl p-6 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl border bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={school.logo}
                  alt={school.name}
                  className="w-full h-full object-contain p-1"
                />
              </div>
                  <div>
                    <h3 className="font-display font-semibold text-cisco-navy text-base leading-tight group-hover:text-cisco-blue transition-colors duration-200">
                      {school.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cisco-green" />
                      <span className="text-xs text-gray-400">Active Partner</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-cisco-blue bg-cisco-blue/8 border border-cisco-blue/15 px-2.5 py-1 rounded-md">
                    {school.type}
                  </span>
                  <span className="text-xs font-mono text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                    📍 {school.location}
                  </span>
                </div>
              </div>
            ))}

            {/* Placeholder cards */}
            {/* {[1, 2, 3].map((i) => (
              <div
                key={`placeholder-${i}`}
                className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[140px] hover:border-cisco-blue/30 transition-colors duration-200"
              >
                <div className="text-2xl mb-2">🏫</div>
                <p className="text-gray-400 text-sm font-display">Your School Here</p>
                <p className="text-gray-300 text-xs mt-1">Join our partner network</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Schools Say"
            title="Voices From Partner Institutions"
            subtitle="Direct feedback from the school administrators and educators we work with."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-hover bg-gray-50 border border-gray-100 hover:border-cisco-blue/20 rounded-xl p-6">
                <div className="text-cisco-blue text-4xl font-display leading-none mb-4">"</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cisco-blue/10 flex items-center justify-center font-display font-bold text-cisco-blue text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-cisco-navy text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Partner */}
      <section className="py-20 bg-cisco-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Join Our Network"
            title="How to Become a Partner School"
            subtitle="The partnership process is simple, fast, and designed to minimize burden on school administration."
            light
          />
          <div className="grid md:grid-cols-4 gap-5 mb-12">
            {[
              { step: "1", title: "Express Interest", desc: "Contact us via form, phone, or email. We'll schedule an introductory call within 48 hours." },
              { step: "2", title: "Needs Assessment", desc: "Our team assesses your school's student demographics, infrastructure, and ICT goals." },
              { step: "3", title: "Program Proposal", desc: "We present a tailored program proposal with recommended courses, timeline, and investment." },
              { step: "4", title: "Partnership Launch", desc: "Agreements signed, trainers deployed, and your students begin their digital journey." },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 border border-white/10 hover:border-cisco-blue/30 rounded-xl p-5 transition-all duration-200">
                <div className="w-8 h-8 rounded-md bg-cisco-blue flex items-center justify-center font-display font-bold text-white text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cisco-blue hover:bg-cisco-accent text-white font-display font-bold text-sm rounded-md transition-all duration-200 shadow-lg shadow-cisco-blue/30"
            >
              Start a Partnership Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
