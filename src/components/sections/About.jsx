import { motion } from "framer-motion";
import { profile, education, experience, certifications } from "../../data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4 },
});

export default function About() {
  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2 {...fadeUp(0)} className="text-3xl font-bold text-gray-900 mb-2">About Me</motion.h2>
      <motion.p {...fadeUp(0.05)} className="text-gray-400 text-sm mb-10">Background, experience & journey</motion.p>

      {/* Top: Photo + Bio */}
      <motion.div {...fadeUp(0.1)} className="flex gap-8 mb-12 flex-wrap">
        <div className="flex-shrink-0">
          <img
            src={profile.photo}
            alt="Mosharrof"
            className="w-36 h-44 object-cover rounded-2xl shadow-md"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="w-36 h-44 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-700 items-center justify-center text-white text-4xl font-bold shadow-md hidden">
            M
          </div>
        </div>
        <div className="flex-1 min-w-60">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
          <p className="text-blue-600 font-medium text-sm mb-4">{profile.title}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{profile.bio}</p>
          <div className="flex flex-wrap gap-2">
            {["Flutter Developer", "AI Researcher", "VLSI Enthusiast", "Founder @ AdmiroTech", "Aspiring PhD"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.section {...fadeUp(0.15)} className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Education</h3>
        {education.map((edu) => (
          <div key={edu.institution} className="flex gap-4 items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
              🎓
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">{edu.degree}</h4>
              <p className="text-blue-600 text-sm">{edu.institution}</p>
              <p className="text-gray-400 text-xs mt-1">{edu.period} · {edu.status}</p>
              <p className="text-gray-500 text-xs mt-1">Focus: {edu.focus}</p>
            </div>
          </div>
        ))}
      </motion.section>

      {/* Experience */}
      <motion.section {...fadeUp(0.2)} className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Experience</h3>
        <div className="space-y-3">
          {experience.map((exp, i) => (
            <div key={i} className="p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{exp.role}</h4>
                  <p className="text-blue-600 text-sm font-medium">{exp.org}</p>
                  <p className="text-gray-400 text-xs">{exp.type}</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-blue-400 mt-0.5">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section {...fadeUp(0.25)}>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-sm">✓</div>
              <div>
                <p className="text-xs font-semibold text-gray-800">{cert.name}</p>
                <p className="text-xs text-gray-400">{cert.issuer} · {cert.date}</p>
                {cert.score && <p className="text-xs text-green-600 font-medium">Score: {cert.score}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
