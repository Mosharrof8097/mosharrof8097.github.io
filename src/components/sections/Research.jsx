import { motion } from "framer-motion";
import { research } from "../../data/content";

const statusColor = {
  Accepted: "bg-green-50 text-green-700 border-green-200",
  "Under Review": "bg-yellow-50 text-yellow-700 border-yellow-200",
  Published: "bg-blue-50 text-blue-700 border-blue-200",
};

export default function Research() {
  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        Research & Publications
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="text-gray-400 text-sm mb-10"
      >
        Deep learning, AI systems, and applied research for real-world impact
      </motion.p>

      <div className="space-y-8">
        {research.map((paper, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${statusColor[paper.status]}`}>
                    {paper.status}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">{paper.type}</span>
                  <span className="text-xs text-gray-400">{paper.year}</span>
                </div>
                {paper.paperId && (
                  <span className="text-xs text-gray-400 font-mono">{paper.paperId}</span>
                )}
              </div>

              <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">{paper.title}</h3>
              <p className="text-blue-600 text-sm font-medium mb-3">{paper.venue}</p>

              {paper.coAuthors.length > 0 && (
                <p className="text-xs text-gray-500 mb-3">Co-authors: {paper.coAuthors.join(", ")}</p>
              )}

              <p className="text-gray-600 text-sm leading-relaxed mb-4">{paper.abstract}</p>

              <div className="flex flex-wrap gap-2">
                {paper.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md">#{tag}</span>
                ))}
              </div>
            </div>

            {paper.figures && paper.figures.length > 0 && (
              <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Research Figures</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {paper.figures.map(fig => (
                    <div key={fig.label} className="group">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mb-1">
                        <img
                          src={fig.path} alt={fig.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={e => { e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-300 text-2xl">📊</div>`; }}
                        />
                      </div>
                      <p className="text-xs text-gray-400 text-center">{fig.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {paper.status === "Accepted" && (
              <div className="mx-6 mb-6 p-3 bg-green-50 rounded-xl border border-green-100 flex items-center gap-3">
                <span className="text-lg">🎉</span>
                <div>
                  <p className="text-xs font-semibold text-green-800">Paper Accepted at ICETAEE 2026</p>
                  <p className="text-xs text-green-600">NIT Raipur, India · Department of Electrical Engineering</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100"
      >
        <h3 className="font-bold text-gray-900 mb-3">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {["AI Systems","Deep Learning","Time Series Forecasting","Computer Vision","VLSI Design",
            "Hardware Acceleration","FPGA Design","Renewable Energy AI","Explainable AI","Neural Architecture Search",
          ].map(interest => (
            <span key={interest} className="text-xs px-3 py-1.5 bg-white text-blue-700 rounded-lg border border-blue-200 font-medium">
              {interest}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Looking to pursue PhD research at the intersection of AI systems and hardware acceleration.
        </p>
      </motion.div>
    </div>
  );
}
