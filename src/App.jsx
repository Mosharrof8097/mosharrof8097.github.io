import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  House, User, Briefcase, FlaskConical, FolderOpen,
  Trophy, Zap, BookText, Mail, Menu, X, ChevronLeft,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Research from "./components/sections/Research";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Skills from "./components/sections/Skills";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

const sections = {
  hero: Hero, about: About, experience: Experience, research: Research, projects: Projects,
  achievements: Achievements, skills: Skills, blog: Blog, contact: Contact,
};

const sectionLabels = {
  hero: "Home", about: "About", experience: "Experience", research: "Research", projects: "Projects",
  achievements: "Achievements", skills: "Skills", blog: "Blog", contact: "Contact",
};

const navIcons = {
  hero: House, about: User, experience: Briefcase, research: FlaskConical, projects: FolderOpen,
  achievements: Trophy, skills: Zap, blog: BookText, contact: Mail,
};

export default function App() {
  const [active, setActive] = useState("hero");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [fullWidth, setFullWidth] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [openBlogId, setOpenBlogId] = useState(null);

  const handleOpenBlogPost = (id) => {
    setOpenBlogId(id);
    setActive("blog");
    if (!isMobile) { setFullWidth(true); setSidebarExpanded(false); }
    setMobileOpen(false);
  };

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSelect = (id) => {
    setActive(id);
    setMobileOpen(false);
    if (!isMobile) {
      setFullWidth(true);
      setSidebarExpanded(false);
    }
  };

  const handleToggle = () => {
    if (fullWidth) {
      setFullWidth(false);
      setSidebarExpanded(true);
    } else {
      setSidebarExpanded(v => !v);
    }
  };

  const sidebarW = sidebarExpanded ? 220 : 64;
  const ActiveSection = sections[active];

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">

      {/* ── DESKTOP sidebar ── */}
      {!isMobile && (
        <AnimatePresence>
          {!fullWidth && (
            <motion.div
              key="sidebar"
              initial={{ width: sidebarW, opacity: 1 }}
              animate={{ width: sidebarW, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex-shrink-0 overflow-hidden"
            >
              <Sidebar
                active={active}
                onSelect={handleSelect}
                expanded={sidebarExpanded}
                onToggle={handleToggle}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* ── MOBILE drawer overlay ── */}
      {isMobile && (
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/40 z-40"
              />
              {/* Drawer */}
              <motion.div
                key="drawer"
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-2xl flex flex-col"
              >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
                  <span className="font-bold text-blue-600 text-sm tracking-wider uppercase">MH Portfolio</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                {/* Nav items */}
                <nav className="flex-1 py-3 overflow-y-auto">
                  {Object.keys(sections).map(id => {
                    const Icon = navIcons[id];
                    const isActive = active === id;
                    return (
                      <button
                        key={id}
                        onClick={() => handleSelect(id)}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors relative ${
                          isActive ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        {isActive && <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-600 rounded-r" />}
                        <Icon size={17} strokeWidth={isActive ? 2.2 : 1.8} className="flex-shrink-0" />
                        <span className="text-sm font-medium">{sectionLabels[id]}</span>
                      </button>
                    );
                  })}
                </nav>
                {/* Bottom profile */}
                <div className="border-t border-gray-100 px-5 py-4">
                  <p className="text-xs font-semibold text-gray-700">Md Mosharrof Hossain</p>
                  <p className="text-xs text-gray-400">CSE · Mymensingh Engineering College</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* ── MAIN content ── */}
      <main className="flex-1 min-h-screen overflow-y-auto bg-white relative">

        {/* Mobile top bar */}
        {isMobile && (
          <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3 bg-white/95 backdrop-blur border-b border-gray-100">
            <button
              onClick={() => setMobileOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Menu size={18} />
            </button>
            <span className="text-sm font-bold text-gray-800">{sectionLabels[active]}</span>
            <div className="w-9" />
          </div>
        )}

        {/* Desktop full-width top bar */}
        {!isMobile && fullWidth && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-40 flex items-center justify-between px-8 py-3 bg-white/95 backdrop-blur border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggle}
                className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm font-semibold text-gray-700">{sectionLabels[active]}</span>
            </div>
            <nav className="flex gap-1 flex-wrap">
              {Object.keys(sections).map(id => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active === id ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {sectionLabels[id]}
                </button>
              ))}
            </nav>
          </motion.div>
        )}

        {/* Section + Right Panel wrapper */}
        <div className="flex flex-1 min-h-0">
          {/* Section content */}
          <div className="flex-1 overflow-y-auto min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveSection
                  onNavigate={handleSelect}
                  externalFilter={active === "projects" ? projectFilter : undefined}
                  openPostId={active === "blog" ? openBlogId : undefined}
                  onPostClose={() => setOpenBlogId(null)}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right panel — desktop only, not in mobile */}
          {!isMobile && active !== "hero" && (
            <RightPanel
              active={active}
              projectFilter={projectFilter}
              onFilterChange={setProjectFilter}
              onNavigate={handleSelect}
              onOpenBlogPost={handleOpenBlogPost}
            />
          )}
        </div>
      </main>
    </div>
  );
}
