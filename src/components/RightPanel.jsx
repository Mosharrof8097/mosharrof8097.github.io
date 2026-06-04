import { motion, AnimatePresence } from "framer-motion";
import { profile, research, projects, blog, skills, certifications, achievements } from "../data/content";

// ── per-section panel components ──────────────────────────────

function HeroPanel() {
  return (
    <div className="space-y-5">
      {/* Availability */}
      <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <p className="text-xs font-bold text-green-700">Available Now</p>
        </div>
        <p className="text-xs text-green-600 leading-relaxed">Open to freelance projects, research collaborations & PhD opportunities.</p>
      </div>

      {/* Quick stats */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Stats</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: "2",    l: "Publications" },
            { v: "7+",   l: "Projects" },
            { v: "3+",   l: "Countries" },
            { v: "Top 15", l: "Ulkasemi" },
          ].map(s => (
            <div key={s.l} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <p className="text-lg font-extrabold text-blue-600">{s.v}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Connect</p>
        <div className="space-y-2">
          {[
            { label: "GitHub",    href: profile.github,            icon: "⌨" },
            { label: "LinkedIn",  href: profile.linkedin,          icon: "in" },
            { label: "WhatsApp",  href: profile.whatsapp,          icon: "WA" },
            { label: "Email",     href: `mailto:${profile.email}`, icon: "@" },
          ].map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <span className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center text-xs font-bold text-gray-500 group-hover:text-blue-600 transition-colors flex-shrink-0">
                {l.icon}
              </span>
              <span className="text-xs text-gray-600 group-hover:text-blue-600 font-medium transition-colors">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="space-y-5">
      {/* Profile card */}
      <div className="p-4 rounded-2xl border border-gray-100 text-center">
        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl overflow-hidden ring-2 ring-blue-100">
          <img src={profile.photo} alt="Mosharrof"
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
          />
          <div className="w-full h-full bg-blue-100 text-blue-600 font-bold text-xl items-center justify-center hidden">M</div>
        </div>
        <p className="text-sm font-bold text-gray-900">{profile.name}</p>
        <p className="text-xs text-blue-600 mt-0.5">{profile.title}</p>
        <p className="text-xs text-gray-400 mt-1">📍 {profile.location}</p>
      </div>

      {/* Quick contact */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Contact</p>
        <div className="space-y-2">
          <a href={`mailto:${profile.email}`}
            className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
            <span className="text-sm">✉️</span>
            <span className="text-xs text-gray-500 group-hover:text-blue-600 truncate transition-colors">{profile.email}</span>
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group">
            <span className="text-sm">📱</span>
            <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors">{profile.phone}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
            <span className="text-sm">💼</span>
            <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Certifications count */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Certifications</p>
        <div className="space-y-2">
          {certifications.map(c => (
            <div key={c.name} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
              <span className="w-5 h-5 bg-green-100 text-green-600 rounded-md flex items-center justify-center text-xs flex-shrink-0">✓</span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-700 truncate">{c.name}</p>
                {c.score && <p className="text-xs text-green-600">{c.score}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResearchPanel() {
  return (
    <div className="space-y-5">
      {/* Paper status */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Papers</p>
        <div className="space-y-3">
          {research.map((p, i) => (
            <div key={i} className="p-3 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${
                  p.status === "Accepted"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : "bg-yellow-50 text-yellow-700 border-yellow-200"
                }`}>
                  {p.status}
                </span>
                <span className="text-xs text-gray-400">{p.year}</span>
              </div>
              <p className="text-xs text-gray-700 font-medium leading-snug line-clamp-2">{p.title}</p>
              <p className="text-xs text-blue-500 mt-1 truncate">{p.venue.split("—")[0].trim()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research interests */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Interests</p>
        <div className="flex flex-wrap gap-1.5">
          {["AI Systems","Deep Learning","VLSI","FPGA","Time Series","Computer Vision",
            "Explainable AI","Hardware Acceleration","Renewable Energy AI"].map(t => (
            <span key={t} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PhD goal */}
      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
        <p className="text-xs font-bold text-blue-800 mb-1">🎯 Long-term Goal</p>
        <p className="text-xs text-blue-600 leading-relaxed">Pursuing PhD in AI Systems & Hardware Acceleration.</p>
      </div>
    </div>
  );
}

function ProjectsPanel({ onFilterChange, activeFilter }) {
  const categories = ["All", "Flutter", "Web", "AI"];
  const counts = {
    All: projects.length,
    Flutter: projects.filter(p => p.category === "Flutter").length,
    Web: projects.filter(p => p.category === "Web").length,
    AI: projects.filter(p => p.category === "AI").length,
  };

  // aggregate all techs
  const techCount = {};
  projects.forEach(p => p.tech.forEach(t => { techCount[t] = (techCount[t] || 0) + 1; }));
  const topTechs = Object.entries(techCount).sort((a,b) => b[1]-a[1]).slice(0, 10);

  return (
    <div className="space-y-5">
      {/* Filter */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Filter by Category</p>
        <div className="space-y-1.5">
          {categories.map(cat => (
            <button key={cat} onClick={() => onFilterChange(cat)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}>
              <span>{cat}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${activeFilter === cat ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"}`}>
                {counts[cat]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tech stack summary */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack Used</p>
        <div className="flex flex-wrap gap-1.5">
          {topTechs.map(([tech, count]) => (
            <span key={tech} className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-100 font-mono">
              {tech}
              <span className="text-blue-400 text-xs">{count > 1 ? `×${count}` : ""}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Client countries */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Client Countries</p>
        <div className="flex gap-2 flex-wrap">
          {["🇧🇩 Bangladesh","🇸🇪 Sweden","🇯🇵 Japan"].map(c => (
            <span key={c} className="text-xs px-2.5 py-1.5 bg-gray-50 text-gray-600 rounded-xl border border-gray-100">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AchievementsPanel() {
  const categories = ["Award", "Research", "Publication", "Academic", "Certification"];
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">By Category</p>
        <div className="space-y-2">
          {[
            { cat: "Award",         count: 2, color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
            { cat: "Research",      count: 1, color: "bg-blue-50 text-blue-700 border-blue-200" },
            { cat: "Publication",   count: 1, color: "bg-purple-50 text-purple-700 border-purple-200" },
            { cat: "Academic",      count: 1, color: "bg-green-50 text-green-700 border-green-200" },
            { cat: "Certification", count: 1, color: "bg-teal-50 text-teal-700 border-teal-200" },
          ].map(item => (
            <div key={item.cat} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg border ${item.color}`}>{item.cat}</span>
              <span className="text-xs font-bold text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
        <p className="text-xs font-bold text-amber-800 mb-1">🏆 Biggest Win</p>
        <p className="text-xs text-amber-700 leading-relaxed">1 of 15 global winners at Ulkasemi Seminar (645+ participants).</p>
      </div>
    </div>
  );
}

function SkillsPanel() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Categories</p>
        <div className="space-y-2">
          {Object.entries(skills).map(([cat, { icon, items }]) => (
            <div key={cat} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-base">{icon}</span>
                <span className="text-xs font-medium text-gray-700">{cat.split(" ")[0]}</span>
              </div>
              <span className="text-xs text-gray-400">{items.length} skills</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Currently Learning</p>
        <div className="flex flex-wrap gap-1.5">
          {["FPGA Dev","Neural Arch Search","LLM Fine-tuning","RISC-V ISA"].map(s => (
            <span key={s} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPanel({ onOpenPost }) {
  const allTags = [...new Set(blog.flatMap(p => p.tags))];
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Recent Posts</p>
        <div className="space-y-2">
          {blog.map(post => (
            <div key={post.id}
              onClick={() => post.content && onOpenPost(post.id)}
              className={`p-3 rounded-xl border border-gray-100 transition-all ${
                post.content ? "hover:border-blue-200 hover:bg-blue-50 cursor-pointer" : "opacity-60"
              }`}>
              <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2">{post.title}</p>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-xs text-gray-400">{post.date}</span>
                {post.content
                  ? <span className="text-xs text-blue-500 font-medium">Read →</span>
                  : <span className="text-xs text-gray-300">Soon</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tags</p>
        <div className="flex flex-wrap gap-1.5">
          {allTags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded-lg border border-gray-100">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="space-y-5">
      <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
        <p className="text-xs font-bold text-blue-800 mb-1">⚡ Response Time</p>
        <p className="text-xs text-blue-600">Usually replies within 24 hours.</p>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Open To</p>
        <div className="space-y-1.5">
          {["Flutter freelance projects","AI/ML research collaborations","PhD supervision inquiries","Speaking at student events"].map(item => (
            <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
              <span className="text-blue-400 text-xs">→</span>
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Direct Links</p>
        <div className="space-y-2">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-xs text-gray-600 hover:text-blue-600">
            ✉️ &nbsp;{profile.email}
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all text-xs text-gray-600 hover:text-green-600">
            📱 &nbsp;{profile.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main RightPanel ────────────────────────────────────────────

const panelMap = {
  hero:         { title: "Overview",     Comp: HeroPanel },
  about:        { title: "Profile",      Comp: AboutPanel },
  research:     { title: "Research",     Comp: ResearchPanel },
  projects:     { title: "Projects",     Comp: ProjectsPanel },
  achievements: { title: "Achievements", Comp: AchievementsPanel },
  skills:       { title: "Skills",       Comp: SkillsPanel },
  blog:         { title: "Blog",         Comp: BlogPanel },
  contact:      { title: "Contact",      Comp: ContactPanel },
};

export default function RightPanel({ active, onFilterChange, projectFilter, onNavigate, onOpenBlogPost }) {
  const panel = panelMap[active] || panelMap.hero;
  const { title, Comp } = panel;

  return (
    <aside className="hidden xl:flex flex-col w-64 flex-shrink-0 border-l border-gray-100 bg-white sticky top-0 h-screen overflow-y-auto">
      <div className="px-5 py-5 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</p>
      </div>
      <div className="flex-1 px-5 py-5 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Comp
              onFilterChange={onFilterChange}
              activeFilter={projectFilter}
              onOpenPost={onOpenBlogPost}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
}
