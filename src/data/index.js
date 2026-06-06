import graceLogo from "../assets/partners/gracelogo.jpg";
import cedarsLogo from "../assets/partners/cedars.jpg";
import commandLogo from "../assets/partners/command.jpg";
import faithLogo from "../assets/partners/faith.png";
import zariaLogo from "../assets/partners/zaria.jpg";
import convenantLogo from "../assets/partners/convenant.jpg";

export const programs = [
  {
    id: 1,
    title: "Digital Literacy for Primary Schools",
    icon: "🖥️",
    level: "Foundation",
    audience: "Primary School Students",
    description:
      "Introducing young learners to foundational digital concepts — from understanding devices to safe internet practices — building confidence in the digital world.",
    topics: ["Device handling", "Internet safety", "Basic file management", "Digital citizenship"],
    color: "from-cisco-blue to-cisco-accent",
  },
  {
    id: 2,
    title: "Basic Computer Skills Training",
    icon: "⌨️",
    level: "Beginner",
    audience: "Primary & Secondary",
    description:
      "Hands-on training in essential computer operations: typing proficiency, productivity software, and file organization to prepare students for academic and professional environments.",
    topics: ["Typing & keyboard skills", "Microsoft Office basics", "File management", "Email communication"],
    color: "from-cisco-darkblue to-cisco-blue",
  },
  {
    id: 3,
    title: "Web Development Training",
    icon: "🌐",
    level: "Intermediate",
    audience: "Secondary School Students",
    description:
      "Structured curriculum covering HTML, CSS, and JavaScript fundamentals — empowering students to design and build their first live websites from scratch.",
    topics: ["HTML5 structure", "CSS3 styling", "JavaScript basics", "Responsive design"],
    color: "from-blue-700 to-cisco-blue",
  },
  {
    id: 4,
    title: "Graphics Design Training",
    icon: "🎨",
    level: "Intermediate",
    audience: "Secondary School Students",
    description:
      "Professional design principles using industry-standard tools. Students learn composition, color theory, branding, and produce portfolio-ready visual assets.",
    topics: ["Design principles", "Adobe & Canva tools", "Branding & identity", "Print & digital design"],
    color: "from-cisco-blue to-indigo-600",
  },
  {
    id: 5,
    title: "Video Editing Training",
    icon: "🎬",
    level: "Intermediate",
    audience: "Secondary School Students",
    description:
      "From raw footage to polished productions — students master timeline editing, audio mixing, color grading, and content publishing workflows.",
    topics: ["Timeline editing", "Audio engineering", "Color grading", "Export & publishing"],
    color: "from-slate-700 to-cisco-blue",
  },
  {
    id: 6,
    title: "Python Programming Introduction",
    icon: "🐍",
    level: "Intermediate",
    audience: "Secondary School Students",
    description:
      "An accessible entry into programming through Python — covering syntax, logic, data structures, and real-world mini-projects that develop computational thinking.",
    topics: ["Python syntax", "Variables & functions", "Loops & conditionals", "Mini-projects"],
    color: "from-cisco-darkblue to-teal-600",
  },
  {
    id: 7,
    title: "AI Fundamentals",
    icon: "🤖",
    level: "Awareness",
    audience: "Secondary School Students",
    description:
      "Demystifying artificial intelligence for the next generation — exploring how AI systems work, their real-world applications, and the ethical implications of intelligent technology.",
    topics: ["What is AI?", "Machine learning basics", "AI in daily life", "Ethics & responsibility"],
    color: "from-cisco-blue to-cyan-600",
  },
  {
    id: 8,
    title: "IoT Awareness & Introduction",
    icon: "📡",
    level: "Awareness",
    audience: "Secondary School Students",
    description:
      "Introducing the Internet of Things ecosystem — from smart devices to sensor networks — helping students understand the connected world shaping modern infrastructure.",
    topics: ["What is IoT?", "Smart devices", "Sensors & connectivity", "Real-world applications"],
    color: "from-cisco-darkblue to-cisco-accent",
  },
];

export const partnerSchools = [
  { id: 1, name: "Grace Schools", type: "Primary and Secondary", location: "Gbagada, Lagos", logo: graceLogo, },
  { id: 2,  name: "Cedars World Nursery and Primary school", type: "Primary School", location: "Surulere, Lagos", logo: cedarsLogo, },
  { id: 3, name: "Command Day School Bonny Camp", type: "Secondary School", location: "Victoria Island, Lagos", logo: commandLogo, },
  { id: 4, name: "Faith Academy Gowon", type: "Secondary School", location: "Egbeda, Lagos", logo: faithLogo, },
  { id: 5, name: "Nigeria Military School", type: "Secondary", location: "Zaria, Kaduna", logo: zariaLogo, },
  { id: 6, name: "Command Day Secondary School", type: "Secondary School", location: "Lungi Barracks, Abuja", logo: commandLogo,  },
  { id: 7, name: "Command Day Secondary School Orlu", type: "Secondary School", location: "Orlu, Imo State", logo: commandLogo,  },
  { id: 8, name: "Convenant University Secondary School", type: "Secondary School", location: "Ota, Ogun State", logo: convenantLogo, },
  { id: 9, name: "Faith Academy Canaanland", type: "Secondary School", location: "Ota, Ogun State", logo: faithLogo, },
];

export const stats = [
  { value: "13+", label: "Schools Partnered" },
  { value: "7,000+", label: "Students Trained" },
  { value: "8+", label: "Core Programs" },
  { value: "3+", label: "Years of Excellence" },
];

export const whyChooseUs = [
  {
    icon: "🏛️",
    title: "Cisco-Aligned Curriculum",
    description:
      "Our training framework is informed by Cisco Networking Academy principles, ensuring students receive industry-relevant, globally recognized skill sets.",
  },
  {
    icon: "🤝",
    title: "School Partnership Model",
    description:
      "We work directly with school administrations to integrate digital training into the academic calendar — zero disruption, maximum impact.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Instructors",
    description:
      "All programs are delivered by certified industry professionals with hands-on experience in their respective technology domains.",
  },
  {
    icon: "📋",
    title: "Structured Assessments",
    description:
      "Students receive formal evaluations and certificates of completion, providing measurable proof of digital competency.",
  },
  {
    icon: "📍",
    title: "Nigeria based",
    description:
      "Headquartered in Gbagada, Lagos, we deploy to partner schools across the country, bringing world-class training locally.",
  },
  {
    icon: "⚡",
    title: "Practical, Project-Based Learning",
    description:
      "Every program emphasizes hands-on projects over theory, ensuring students leave with real skills and tangible work samples.",
  },
];

export const contact = {
  phones: ["07025251955", "08164101855"],
  email: "landmarktechacademy@yahoo.com",
  address: "No 8, Ebinpejo Street, Obanikoro Bus Stop, Gbagada, Lagos",
};
