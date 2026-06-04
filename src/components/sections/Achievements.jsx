import { motion } from "framer-motion";

const achievementData = [
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
            className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-blue-100 transition-all"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              {item.photo && (
                <div className="w-full sm:w-48 flex-shrink-0 bg-gray-50 overflow-hidden">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-40 sm:h-full object-cover"
                    onError={e => { e.target.parentElement.style.display = "none"; }}
                  />
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
                <p className="text-blue-600 text-xs font-medium mb-2">{item.org}</p>
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
    </div>
  );
}
