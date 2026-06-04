import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/content";

const categoryColors = {
  Flutter: "bg-blue-50 text-blue-700 border-blue-200",
  Web:     "bg-violet-50 text-violet-700 border-violet-200",
  AI:      "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const typeColors = {
  "Client Project":   "bg-orange-50 text-orange-600",
  "Own Product":      "bg-blue-50 text-blue-600",
  "Freelance":        "bg-teal-50 text-teal-600",
  "Own Tool":         "bg-purple-50 text-purple-600",
  "Open Source":      "bg-green-50 text-green-600",
  "Product":          "bg-gray-50 text-gray-600",
  "Research Project": "bg-yellow-50 text-yellow-700",
};

const featuredAccent = {
  1: "from-blue-500 to-blue-700",
  2: "from-violet-500 to-purple-700",
  4: "from-emerald-500 to-teal-700",
};

export default function Projects({ externalFilter }) {
  const [localFilter, setLocalFilter] = useState("All");
  const filter = externalFilter ?? localFilter;
  const setFilter = (v) => setLocalFilter(v);
  const categories = ["All", "Flutter", "Web", "AI"];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  const featured = filtered.filter(p => p.featured);
  const regular  = filtered.filter(p => !p.featured);

  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="text-gray-400 text-sm mb-8"
      >
        {projects.length} projects across mobile, web, and AI
      </motion.p>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="flex gap-2 mb-8"
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
              filter === cat ? "bg-blue-600 text-white shadow-sm" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-60">
              {cat === "All" ? projects.length : projects.filter(p => p.category === cat).length}
            </span>
          </button>
        ))}
      </motion.div>

      {/* ── FEATURED (top 3) ── */}
      {featured.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Featured</p>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <AnimatePresence mode="popLayout">
            <div className="space-y-4">
              {featured.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.07 }}
                  className="group relative rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all bg-white"
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${featuredAccent[project.id] || "from-blue-500 to-blue-700"}`} />

                  <div className="flex gap-0 flex-col sm:flex-row">
                    {/* Icon panel */}
                    <div className={`hidden sm:flex w-16 flex-shrink-0 items-center justify-center bg-gradient-to-b ${featuredAccent[project.id] || "from-blue-500 to-blue-700"} bg-opacity-5`}>
                      <span className="text-2xl">
                        {project.category === "Flutter" ? "📱" : project.category === "Web" ? "🌐" : "🤖"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5 pl-6">
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-lg border ${categoryColors[project.category]}`}>
                            {project.category}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-lg font-medium ${typeColors[project.type]}`}>
                            {project.type}
                          </span>
                          {project.client && (
                            <span className="text-xs text-gray-400">🌍 {project.client}</span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 flex items-center gap-1">
                          ★ Featured
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-500 text-xs font-medium mb-2">{project.tagline}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

                      <div className="flex gap-4 flex-wrap items-end">
                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5 flex-1">
                          {project.highlights.map(h => (
                            <span key={h} className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-gray-50">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="ml-auto text-xs text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1">
                            ↗ GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      )}

      {/* ── OTHER PROJECTS ── */}
      {regular.length > 0 && (
        <div>
          {featured.length > 0 && (
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Other Projects</p>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
          )}
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {regular.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all bg-white group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${categoryColors[project.category]}`}>
                          {project.category}
                        </span>
                        {project.client && <span className="text-xs text-gray-400">🌍 {project.client}</span>}
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-lg font-medium flex-shrink-0 ml-2 ${typeColors[project.type]}`}>
                      {project.type}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mb-2">{project.tagline}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{project.description.slice(0, 120)}...</p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-50">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-gray-400">+{project.tech.length - 4}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
