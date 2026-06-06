import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

export default function About() {
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
        <div className="absolute right-0 top-0 w-72 h-72 bg-cisco-blue/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-cisco-blue/10 border border-cisco-blue/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-cisco-blue" />
              <span className="text-cisco-blue text-xs font-mono font-medium tracking-wider uppercase">About Us</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-5">
              Building Nigeria's Digital Future, One School at a Time
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Landmark Tech Academy is a purpose-driven ICT training institution committed to closing the digital skills gap in Nigerian primary and secondary education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-cisco-blue" />
                <span className="text-cisco-blue text-xs font-mono font-medium uppercase tracking-widest">Our Mission</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-cisco-navy mb-6 leading-tight">
                Empowering Every Student with the Digital Skills of Tomorrow
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                At Landmark Tech Academy, our mission is to democratize access to quality ICT education by taking world-class digital training directly to schools — making it accessible, structured, and measurable for every student regardless of background or location.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                We believe that digital literacy is no longer optional — it is foundational. In a world increasingly shaped by technology, students who lack basic digital skills are at a structural disadvantage. We exist to change that.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Through disciplined program design, certified instructors, and deep school partnerships, we deliver ICT training that produces real competency — not just exposure.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Vision", icon: "🔭", text: "To be Nigeria's leading school-embedded ICT training institution, recognized for producing digitally competent graduates at the foundation level." },
                { label: "Mission", icon: "🎯", text: "To deliver structured, accessible, and measurable digital skills training to primary and secondary school students across Nigeria through a proven school partnership model." },
                { label: "Core Value", icon: "⭐", text: "Excellence, accountability, and practical impact — every program we deliver must produce demonstrable results for students, schools, and their communities." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-11 h-11 rounded-lg bg-cisco-blue/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-display font-bold text-cisco-blue text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Comprehensive ICT Training for Schools"
            subtitle="Our offering spans eight core programs, each designed to build specific and applicable digital skills."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "💻", title: "Digital Literacy", desc: "Foundational skills for primary school students — device use, internet safety, and digital citizenship." },
              { icon: "🌐", title: "Web Development", desc: "HTML, CSS, and JavaScript training for secondary students ready to build real websites." },
              { icon: "🎨", title: "Graphics Design", desc: "Professional design tools and visual communication principles for creative students." },
              { icon: "🐍", title: "Programming", desc: "Python fundamentals — logic, syntax, and project-based learning to build computational thinking." },
              { icon: "🎬", title: "Video Editing", desc: "End-to-end video production workflow, from footage capture to polished digital content." },
              { icon: "🤖", title: "AI Awareness", desc: "Accessible introduction to artificial intelligence — what it is, how it works, and ethical considerations." },
              { icon: "📡", title: "IoT Introduction", desc: "Understanding connected devices and the Internet of Things ecosystem shaping modern infrastructure." },
              { icon: "⌨️", title: "Computer Skills", desc: "Core computing essentials — productivity software, typing, file management, and professional basics." },
            ].map((item) => (
              <div key={item.title} className="card-hover bg-white rounded-xl border border-gray-100 p-5 hover:border-cisco-blue/20">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-cisco-navy text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Partnership Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-cisco-blue" />
              <span className="text-cisco-blue text-xs font-mono font-medium uppercase tracking-widest">Our Approach</span>
              <span className="w-6 h-px bg-cisco-blue" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-cisco-navy mb-5 leading-tight">
              The School Partnership Model
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We don't operate a physical campus. Instead, we bring training directly to schools — embedding our programs within the existing academic structure for maximum reach and minimum disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Partnership Agreement", desc: "We work with school leadership to define scope, schedule, and program selection based on student levels and institutional goals." },
              { step: "02", title: "Curriculum Alignment", desc: "Our team customizes the training calendar to integrate seamlessly with the academic term, avoiding examination periods and special events." },
              { step: "03", title: "On-Site Delivery", desc: "Certified instructors are deployed to the school premises. Training is conducted in the school's ICT lab or a designated space." },
              { step: "04", title: "Assessment & Certification", desc: "Students are evaluated at program completion. Those who meet the standard receive official Landmark Tech Academy certificates." },
            ].map((item) => (
              <div key={item.step} className="relative p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-cisco-blue/20 hover:bg-gray-50 transition-all duration-200">
                <div className="font-mono text-4xl font-bold text-cisco-blue/15 mb-4">{item.step}</div>
                <h3 className="font-display font-semibold text-cisco-navy text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cisco Aligned */}
      <section className="py-16 bg-cisco-midnight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="w-16 h-16 rounded-xl bg-cisco-blue/15 flex items-center justify-center text-4xl flex-shrink-0">
              🌐
            </div>
            <div>
              <div className="text-cisco-blue text-xs font-mono font-medium uppercase tracking-widest mb-3">
                Cisco Ecosystem Alignment
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-4 leading-tight">
                Curriculum Informed by Global ICT Standards
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Landmark Tech Academy operates within the Cisco ecosystem of digital education principles. Our curricula are informed by Cisco Networking Academy frameworks, which define globally recognized standards for ICT education. While we are an independent institution and do not issue Cisco-certified credentials, our program design reflects the rigor, structure, and industry alignment that Cisco's educational model represents.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This means our students receive training built on internationally validated competency frameworks — giving them a head start when they pursue further technical certifications later in their education or careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cisco-blue to-cisco-darkblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Partner With Landmark Tech Academy
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Ready to bring structured ICT training to your school? Let's start the conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cisco-navy font-display font-bold text-sm rounded-md hover:bg-gray-100 transition-all duration-200"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
