import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, Users, Cpu, Award, X } from "lucide-react";
import { experience, workshops } from "../../data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4 },
});

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max-w-4xl px-6 sm:px-10 py-12">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-1 uppercase tracking-wider">
          <Briefcase size={16} />
          <span>Professional & Leadership Experience</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Experience & Workshops</h2>
        <p className="text-gray-400 text-sm mt-1">
          Conducting technical sessions, semiconductor research, and building tech solutions
        </p>
      </motion.div>

      {/* Featured Workshop Highlight */}
      <motion.section {...fadeUp(0.1)} className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Featured Conducting Workshop & Sessions
          </h3>
          <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
            Alpha Science Lab (ASL)
          </span>
        </div>

        {workshops.map((ws) => (
          <div
            key={ws.id}
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/20 to-gray-50/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm">
                  {ws.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                  <Calendar size={13} /> {ws.date}
                </span>
              </div>
              <span className="text-xs text-gray-500 font-medium flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                <Users size={13} strokeWidth={2} /> {ws.organizer}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-2">
              {ws.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {ws.description}
            </p>

            {/* Topics Covered */}
            <div className="mb-6 p-5 bg-white/80 backdrop-blur rounded-2xl border border-gray-100">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu size={14} className="text-blue-600" /> Key Topics & Modules Covered
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ws.topics.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote / Personal Reflection */}
            <div className="p-4 bg-blue-50/80 rounded-2xl border-l-4 border-blue-600 mb-6">
              <p className="text-xs text-blue-900 italic leading-relaxed">
                &ldquo;{ws.reflection}&rdquo;
              </p>
              <p className="text-xs font-semibold text-blue-700 mt-2 text-right">
                — {ws.speakerRole} 🇧🇩
              </p>
            </div>

            {/* Photo Gallery Grid */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                  <Award size={14} className="text-blue-600" /> Workshop Moments & Classroom Media
                </h4>
                <span className="text-xs text-gray-400">Click photo to view high-res</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ws.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(img)}
                    className="group cursor-pointer aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xs relative"
                  >
                    <img
                      src={img.path}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-2">📷 ${img.caption}</div>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                      <p className="text-[10px] font-medium text-white line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Thanks & Hashtags */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Special Thanks:</span> {ws.thanks}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ws.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 rounded-md font-mono transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.section>

      {/* Professional Roles & Org Timeline */}
      <motion.section {...fadeUp(0.2)}>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Work & Organizational Roles
        </h3>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <h4 className="text-base font-bold text-gray-900">{exp.role}</h4>
                  <p className="text-blue-600 text-sm font-semibold">{exp.org}</p>
                  <p className="text-gray-400 text-xs">{exp.type}</p>
                </div>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-xl whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mt-3">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-xs text-gray-600 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* High-res Image Lightbox Modal */}
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
              className="relative max-w-3xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
              <div className="max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={selectedImage.path}
                  alt={selectedImage.caption}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-4 bg-gray-900 text-white text-center">
                <p className="text-sm font-semibold">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
