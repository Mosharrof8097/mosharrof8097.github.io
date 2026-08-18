import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const achievementData = [
  {
    id: -1,
    emoji: "🚀",
    title: "Open-Source Launch: Opportunity Finder Dashboard",
    org: "Personal Open-Source Project",
    date: "2026",
    category: "Publication",
    desc: "Built and open-sourced Opportunity Finder — an automated dashboard collecting remote jobs, professor research contacts & verified emails (AI, DL, VLSI), scholarships, and BD Govt notices, with automated GitHub Pages deployment.",
    photo: "/images/projects/opportunity_finder.png",
    tags: ["OpenSource", "Python", "Automation", "WebScraping", "GitHubActions", "AI"],
  },
  {
    id: 0,
    emoji: "⚡",
    title: "RISC-V Community Challenge — HaDes-V Bronze & Silver 2026 Badges",
    org: "The Linux Foundation × RISC-V International",
    date: "2026",
    category: "Award",
    desc: "Earned the RISC-V Community Challenge badges from The Linux Foundation & RISC-V International. Focused on hardware design, building a pipelined 32-bit RISC-V microcontroller core (HaDes-V), mastering efficient computing principles, and practical FPGA prototyping.",
    photo: "/images/certs/riscv_hadesv_badge_2026.png",
    tags: ["RISCV", "LinuxFoundation", "FPGA", "VLSI", "ComputerArchitecture", "OpenHardware"],
  },
  {
    id: 1,
    emoji: "🎓",
    title: "12-Week Research Trainee Program Completed & Appointed Research Assistant",
    org: "Learnix Research Lab",
    date: "15 Aug 2026",
    category: "Research",
    desc: "Successfully completed the 12-Week Research Trainee Program at Learnix Research Lab (Certificate ID: LRL-2026-001) covering Machine Learning (ML), Deep Learning (DL), Federated Learning (FL), and Research Methodology. Appointed as Research Assistant to continue advancing AI research.",
    photo: "/images/certs/learnix_trainee_cert.png",
    tags: ["Machine Learning", "Deep Learning", "Federated Learning", "Research Assistant", "Learnix"],
  },
  {
    id: 1,
    emoji: "🌟",
    title: "1 of 15 Global Winners — Ulkasemi Seminar",
    org: "Ulkasemi Pvt. Ltd.",
    date: "2025",
    category: "Award",
    desc: "Selected as 1 of only 15 winners out of 645+ participants worldwide at the Ulkasemi Seminar & Prize-Giving Ceremony, Ulkasemi Design Centre, Dhaka. Keynote by CEO Enayetur Rahman.",
    photo: "/images/blog/ulkasemi.jpg",
    tags: ["VLSI", "Semiconductor", "Global"],
  },
  {
    id: 2,
    emoji: "📄",
    title: "Paper Accepted — ICETAEE 2026",
    org: "NIT Raipur, India",
    date: "2026",
    category: "Research",
    desc: "First research paper accepted at an international conference: \"Hybrid LSTM-Transformer Framework for Multi-Horizon Solar Irradiance Forecasting\" — Paper ID: 92, organized by Dept. of Electrical Engineering, NIT Raipur.",
    photo: null,
    tags: ["Deep Learning", "Research", "International"],
  },
  {
    id: 3,
    emoji: "🏆",
    title: "Winner — ICT Olympiad Bangladesh Season 2",
    org: "ICT Olympiad Bangladesh · BUBT",
    date: "2025",
    category: "Award",
    desc: "Earned the Winner Certificate of Selection Round in ICT Olympiad Bangladesh Season 2 based on Successful Examination. Certificate No: 2025357775.",
    photo: "/images/blog/ict_cert.jpg",
    tags: ["ICT", "Competition", "Bangladesh"],
  },
  {
    id: 4,
    emoji: "✍️",
    title: "Featured in Alpha Science Lab Magazine 1.0",
    org: "Alpha Science Lab (ASL)",
    date: "2025",
    category: "Publication",
    desc: "Article featured in Alpha Science Lab Magazine 1.0: \"How AI Tools are Transforming the Way Students Learn Programming\" — shared to the MEC CSE community.",
    photo: null,
    tags: ["AI", "Education", "Writing"],
  },
  {
    id: 5,
    emoji: "🎓",
    title: "Design and Analysis of Algorithms (DAA) Completed",
    org: "Mymensingh Engineering College",
    date: "2026",
    category: "Academic",
    desc: "Successfully completed the Design and Analysis of Algorithms course at MEC — covering algorithm design paradigms, complexity analysis, graph algorithms, and dynamic programming.",
    photo: "/images/certs/daa_cert.jpg",
    tags: ["Algorithms", "CSE", "Academic"],
  },
  {
    id: 6,
    emoji: "🤖",
    title: "Generative AI for Educators — Score 100/100",
    org: "Google for Education × MIT",
    date: "Nov 2025",
    category: "Certification",
    desc: "Completed the Generative AI for Educators course from Google for Education in collaboration with MIT. Score: 100/100. Certificate ID: 435035787.",
    photo: null,
    tags: ["AI", "Google", "Certification"],
  },
];

const categoryColors = {
  Award: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Research: "bg-blue-50 text-blue-700 border-blue-200",
  Publication: "bg-purple-50 text-purple-700 border-purple-200",
  Academic: "bg-green-50 text-green-700 border-green-200",
  Certification: "bg-teal-50 text-teal-700 border-teal-200",
};

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        Achievements
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="text-gray-400 text-sm mb-10"
      >
        Awards, recognitions, certifications, and milestones
      </motion.p>

      <div className="space-y-4">
        {achievementData.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-blue-100 transition-all bg-white"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              {item.photo && (
                <div
                  onClick={() => setSelectedImage(item)}
                  className="w-full sm:w-56 flex-shrink-0 bg-gray-50 overflow-hidden cursor-pointer group relative flex items-center justify-center border-r border-gray-100"
                >
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-44 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={e => { e.target.parentElement.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                    🔍 View Certificate
                  </div>
                </div>
              )}

              {/* No photo — emoji placeholder */}
              {!item.photo && (
                <div className="w-full sm:w-20 flex-shrink-0 bg-gray-50 flex items-center justify-center text-4xl py-6 sm:py-0">
                  {item.emoji}
                </div>
              )}

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.photo && (
                      <span className="text-lg">{item.emoji}</span>
                    )}
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-lg border ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-blue-600 text-xs font-semibold mb-2">{item.org}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Certificate / Photo */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
              <div className="max-h-[80vh] flex items-center justify-center bg-black p-2">
                <img
                  src={selectedImage.photo}
                  alt={selectedImage.title}
                  className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-gray-900 text-white text-center border-t border-gray-800">
                <p className="text-sm font-semibold">{selectedImage.title}</p>
                <p className="text-xs text-blue-400 mt-1">{selectedImage.org} · {selectedImage.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
