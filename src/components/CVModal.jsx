import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { profile, education, experience, research, projects, skills, certifications, achievements } from "../data/content";

export default function CVModal({ open, onClose }) {
  const printRootRef = useRef(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handlePrint = () => {
    // Create a hidden print div directly in body
    const existing = document.getElementById("cv-print-root");
    if (existing) existing.remove();

    const printRoot = document.createElement("div");
    printRoot.id = "cv-print-root";
    printRoot.style.cssText = "display:none; background:white;";

    const source = document.getElementById("cv-printable");
    if (source) {
      printRoot.innerHTML = source.innerHTML;
    }

    document.body.appendChild(printRoot);
    printRootRef.current = printRoot;

    const cleanup = () => {
      printRoot.remove();
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);

    window.print();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
              <div>
                <h3 className="font-bold text-gray-900">CV Preview</h3>
                <p className="text-xs text-gray-400">Md Mosharrof Hossain — June 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download / Print PDF
                </button>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* CV content (scrollable) */}
            <div className="overflow-y-auto flex-1 bg-gray-50 p-6">
              <div
                id="cv-printable"
                className="bg-white rounded-xl shadow-sm p-8 text-sm font-[Inter] max-w-[700px] mx-auto"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {/* Header */}
                <div className="text-center border-b-2 border-blue-600 pb-4 mb-5">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-gray-500 text-xs mt-1">{profile.title}</p>
                  <div className="text-xs text-gray-400 mt-2 space-y-0.5">
                    <p>
                      {profile.location} &nbsp;·&nbsp;{" "}
                      <a href={`tel:${profile.phone}`} className="text-blue-600">{profile.phone}</a>
                      &nbsp;·&nbsp;
                      <a href={`mailto:${profile.email}`} className="text-blue-600">{profile.email}</a>
                    </p>
                    <p>
                      <a href={profile.linkedin} className="text-blue-600">LinkedIn</a>
                      &nbsp;·&nbsp;
                      <a href={profile.github} className="text-blue-600">GitHub</a>
                      &nbsp;·&nbsp;
                      <a href={profile.portfolio} className="text-blue-600">{profile.portfolio}</a>
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-5">
                  <p className="text-gray-600 text-xs leading-relaxed">{profile.bio}</p>
                </div>

                {/* Education */}
                <Section title="Education">
                  {education.map(edu => (
                    <div key={edu.institution} className="mb-2">
                      <Row left={<span className="font-semibold text-gray-900">{edu.degree}</span>} right={edu.period} />
                      <p className="text-blue-600 text-xs">{edu.institution}</p>
                      <p className="text-gray-500 text-xs">Focus: {edu.focus} · {edu.status}</p>
                    </div>
                  ))}
                </Section>

                {/* Experience */}
                <Section title="Research & Professional Experience">
                  {experience.map((exp, i) => (
                    <div key={i} className="mb-4">
                      <Row left={<span className="font-semibold text-gray-900">{exp.role}</span>} right={exp.period} />
                      <p className="text-blue-600 text-xs">{exp.org} · <span className="text-gray-400">{exp.type}</span></p>
                      <ul className="mt-1 ml-4 space-y-0.5">
                        {exp.points.map((pt, j) => <li key={j} className="text-gray-600 text-xs list-disc">{pt}</li>)}
                      </ul>
                    </div>
                  ))}
                </Section>

                {/* Publications */}
                <Section title="Publications">
                  {research.map((paper, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex items-start gap-2">
                        <p className="font-semibold text-gray-900 text-xs leading-snug flex-1">{paper.title}</p>
                        <span className={`text-xs px-2 py-0.5 rounded font-semibold whitespace-nowrap flex-shrink-0 ${paper.status === "Accepted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{paper.status}</span>
                      </div>
                      <p className="text-blue-600 text-xs">{paper.venue}</p>
                      {paper.coAuthors.length > 0 && <p className="text-gray-400 text-xs">Co-authors: {paper.coAuthors.join(", ")}</p>}
                    </div>
                  ))}
                </Section>

                {/* Projects */}
                <Section title="Selected Projects">
                  {projects.slice(0, 5).map(proj => (
                    <div key={proj.id} className="mb-3">
                      <Row left={<span className="font-semibold text-gray-900">{proj.name}</span>} right={proj.type} />
                      <p className="text-gray-600 text-xs leading-relaxed">{proj.tagline} — {proj.description.slice(0, 120)}...</p>
                      <p className="text-gray-400 text-xs italic mt-0.5">Tech: {proj.tech.join(", ")}</p>
                    </div>
                  ))}
                </Section>

                {/* Skills */}
                <Section title="Technical Skills" breakBefore={true}>
                  {Object.entries(skills).map(([cat, { items }]) => (
                    <div key={cat} className="flex gap-2 mb-1 items-start">
                      <span className="font-semibold text-gray-700 text-xs w-36 flex-shrink-0">{cat}:</span>
                      <span className="text-gray-600 text-xs">{items.join(", ")}</span>
                    </div>
                  ))}
                </Section>

                {/* Achievements */}
                <Section title="Achievements & Awards">
                  {achievements.map(a => (
                    <div key={a.title} className="flex gap-2 mb-1 items-start">
                      <span className="text-xs">{a.icon}</span>
                      <div>
                        <span className="font-semibold text-gray-900 text-xs">{a.title}</span>
                        <span className="text-gray-400 text-xs"> · {a.year}</span>
                        <p className="text-gray-500 text-xs">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </Section>

                {/* Certifications */}
                <Section title="Certifications">
                  {certifications.map(cert => (
                    <div key={cert.name} className="flex justify-between mb-1">
                      <span className="text-xs text-gray-700"><span className="font-semibold">{cert.name}</span> — {cert.issuer}</span>
                      <span className="text-xs text-gray-400">{cert.score ? `Score: ${cert.score} · ` : ""}{cert.date}</span>
                    </div>
                  ))}
                </Section>

                <p className="text-center text-xs text-gray-300 mt-6">Last updated: June 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children, breakBefore = false }) {
  return (
    <div className="mb-5" style={{ pageBreakInside: "avoid", breakBefore: breakBefore ? "page" : "auto" }}>
      <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b border-blue-100 pb-1 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Row({ left, right }) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex-1">{left}</div>
      <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{right}</span>
    </div>
  );
}
