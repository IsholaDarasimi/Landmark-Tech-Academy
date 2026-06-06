import { useState } from "react";
import { contact } from "../data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.organization.trim()) e.organization = "School / Organization is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm font-body text-cisco-navy bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-cisco-blue/30 ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-gray-200 focus:border-cisco-blue"
    }`;

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
              Contact Us
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-5">
            Let's Start a Conversation
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're a school administrator, education board official, or institutional partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-cisco-navy mb-2">Contact Details</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reach us directly through any of the channels below, or use the form to send us a message.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cisco-blue/8 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                    <div>
                      <div className="font-display font-semibold text-cisco-navy text-sm mb-2">Phone Numbers</div>
                      {contact.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="block text-sm text-cisco-blue hover:text-cisco-darkblue transition-colors duration-200 font-mono"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cisco-blue/8 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                    <div>
                      <div className="font-display font-semibold text-cisco-navy text-sm mb-2">Email Address</div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm text-cisco-blue hover:text-cisco-darkblue transition-colors duration-200 break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cisco-blue/8 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                    <div>
                      <div className="font-display font-semibold text-cisco-navy text-sm mb-2">Office Address</div>
                      <p className="text-gray-500 text-sm leading-relaxed">{contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cisco-blue/8 flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                    <div>
                      <div className="font-display font-semibold text-cisco-navy text-sm mb-2">Office Hours</div>
                      <div className="text-gray-500 text-sm space-y-0.5">
                        <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                        <p>Saturday: 9:00 AM – 2:00 PM</p>
                        <p className="text-gray-400">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center relative">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="font-display font-semibold text-gray-600 text-sm">Gbagada, Lagos</p>
                  <p className="text-gray-400 text-xs">Obanikoro Bus Stop</p>
                  <a
                    href="https://maps.google.com/?q=Ebinpejo+Street+Obanikoro+Gbagada+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 text-xs text-cisco-blue hover:underline"
                  >
                    Open in Maps →
                  </a>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-cisco-green/10 flex items-center justify-center text-3xl mx-auto mb-5">
                      ✅
                    </div>
                    <h3 className="font-display font-bold text-cisco-navy text-xl mb-3">Message Sent!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                      Thank you for reaching out. A member of our team will respond within 1–2 business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", organization: "", email: "", subject: "", message: "" }); }}
                      className="px-6 py-2.5 bg-cisco-blue text-white text-sm font-display font-semibold rounded-md hover:bg-cisco-accent transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display font-bold text-2xl text-cisco-navy mb-1">Send Us a Message</h2>
                      <p className="text-gray-500 text-sm">Fill in the details below and we'll get back to you promptly.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-display font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Amara Johnson"
                            className={inputClass("name")}
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-display font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                            School / Organization <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={form.organization}
                            onChange={handleChange}
                            placeholder="e.g. Lagos Model Academy"
                            className={inputClass("organization")}
                          />
                          {errors.organization && <p className="text-red-400 text-xs mt-1">{errors.organization}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-display font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@school.edu.ng"
                            className={inputClass("email")}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-display font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                            Subject
                          </label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={inputClass("subject") + " cursor-pointer"}
                          >
                            <option value="">Select a subject…</option>
                            <option value="partnership">School Partnership Inquiry</option>
                            <option value="programs">Program Information</option>
                            <option value="enrollment">Student Enrollment</option>
                            <option value="pricing">Pricing & Packages</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-display font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your school, the number of students, and what you're hoping to achieve…"
                          className={inputClass("message") + " resize-none"}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-cisco-blue hover:bg-cisco-accent text-white font-display font-bold text-sm rounded-lg transition-all duration-200 shadow-md shadow-cisco-blue/25 hover:shadow-cisco-accent/25"
                      >
                        Send Message
                      </button>

                      <p className="text-gray-400 text-xs text-center">
                        We typically respond within 1–2 business days. For urgent inquiries, please call us directly.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
