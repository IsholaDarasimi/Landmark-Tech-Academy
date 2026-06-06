import { Link } from "react-router-dom";
import { contact } from "../data";
import logo from "../assets/landmark.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cisco-midnight text-gray-400">
      {/* Top Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 lg:h-12 flex items-center">
                  <img
                    src={logo}
                    alt="Landmark Tech Academy"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 mb-5">
                Bridging the digital skills gap in Nigerian schools through structured, Cisco-aligned ICT training.
              </p>
              <div className="flex gap-3">
                {["in", "tw", "fb"].map((s) => (
                  <div key={s} className="w-8 h-8 rounded-md border border-white/10 hover:border-cisco-blue/50 hover:bg-cisco-blue/10 flex items-center justify-center cursor-pointer transition-all duration-200">
                    <span className="text-xs font-mono text-gray-500 hover:text-cisco-blue">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/programs", label: "Programs" },
                  { to: "/partners", label: "Partners" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-500 hover:text-cisco-blue transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-cisco-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
                Programs
              </h4>
              <ul className="space-y-3">
                {[
                  "Digital Literacy",
                  "Web Development",
                  "Graphics Design",
                  "Python Programming",
                  "AI Fundamentals",
                  "IoT Introduction",
                ].map((p) => (
                  <li key={p}>
                    <Link
                      to="/programs"
                      className="text-sm text-gray-500 hover:text-cisco-blue transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-cisco-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-cisco-blue mt-0.5">📍</span>
                  <span className="text-sm text-gray-500 leading-relaxed">
                    {contact.address}
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-cisco-blue text-xs uppercase tracking-wider font-mono">Phone</span>
                  {contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="text-sm text-gray-500 hover:text-cisco-blue transition-colors duration-200"
                    >
                      {p}
                    </a>
                  ))}
                </li>
                <li>
                  <span className="text-cisco-blue text-xs uppercase tracking-wider font-mono block mb-1">Email</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-gray-500 hover:text-cisco-blue transition-colors duration-200 break-all"
                  >
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {currentYear} Landmark Tech Academy. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Powered by Cisco Ecosystem Principles · Gbagada, Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
