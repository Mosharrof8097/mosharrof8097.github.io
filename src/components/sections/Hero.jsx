import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { profile } from "../../data/content";
import CVModal from "../CVModal";

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Hero({ onNavigate }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const current = profile.taglines[taglineIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTaglineIndex((i) => (i + 1) % profile.taglines.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, taglineIndex]);

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT */}
      <div className="flex flex-col justify-center px-10 py-16 max-w-2xl w-full">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm text-gray-500">Open to research collaborations & freelance projects</span>
        </motion.div>

        <div className="flex items-center gap-6 mb-6">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }} className="relative flex-shrink-0">
            <img src={profile.photo} alt="Md Mosharrof Hossain"
              className="w-20 h-20 rounded-2xl object-cover shadow-lg"
              onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center text-white text-2xl font-bold shadow-lg hidden">M</div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-gray-500 text-sm mt-1">{profile.location}</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-6">
          <div className="text-4xl font-bold text-gray-900 leading-tight min-h-[56px]">
            <span>{displayed}</span>
            <span className="inline-block w-0.5 h-9 bg-blue-600 ml-0.5 animate-pulse align-middle" />
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-gray-600 text-base leading-relaxed max-w-2xl mb-8">
          {profile.bio}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 mb-10">
          <button onClick={() => onNavigate("research")}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            View Research
          </button>
          <button onClick={() => onNavigate("projects")}
            className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">
            See Projects
          </button>
          <button onClick={() => setCvOpen(true)}
            className="px-5 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-6">
          {[
            { value: "2",      label: "Publications" },
            { value: "7+",     label: "Projects Built" },
            { value: "3+",     label: "Client Countries" },
            { value: "Top 15", label: "Global (Ulkasemi)" },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex gap-3 mt-10">
          {[
            { href: profile.github,            label: "GitHub",   Icon: GitHubIcon },
            { href: profile.linkedin,          label: "LinkedIn", Icon: LinkedInIcon },
            { href: profile.whatsapp,          label: "WhatsApp", Icon: WhatsAppIcon },
            { href: `mailto:${profile.email}`, label: "Email",    Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              title={label}
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all">
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — Photo panel */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden lg:flex flex-col items-center justify-center relative bg-gray-50 border-l border-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 80 }} className="relative z-10">

          <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
            <img src={profile.photo} alt={profile.name}
              className="w-full h-full object-cover object-top"
              onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }} />
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center text-white text-6xl font-bold hidden">M</div>
          </div>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-5 text-center">
            <p className="text-sm font-bold text-gray-800">{profile.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">Mymensingh Engineering College · CSE</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            className="flex gap-6 justify-center mt-6">
            {[
              { value: "2",  label: "Papers" },
              { value: "7+", label: "Projects" },
              { value: "3+", label: "Countries" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-extrabold text-blue-600">{s.value}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-50 rounded-tl-full opacity-60" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full opacity-40" />
      </motion.div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
