import { motion, AnimatePresence } from "framer-motion";
import {
  House, User, FlaskConical, FolderOpen,
  Trophy, Zap, BookText, Mail, ChevronRight,
} from "lucide-react";
import { profile } from "../data/content";

const navItems = [
  { id: "hero",         label: "Home",         Icon: House },
  { id: "about",        label: "About",        Icon: User },
  { id: "research",     label: "Research",     Icon: FlaskConical },
  { id: "projects",     label: "Projects",     Icon: FolderOpen },
  { id: "achievements", label: "Achievements", Icon: Trophy },
  { id: "skills",       label: "Skills",       Icon: Zap },
  { id: "blog",         label: "Blog",         Icon: BookText },
  { id: "contact",      label: "Contact",      Icon: Mail },
];

export default function Sidebar({ active, onSelect, expanded, onToggle }) {
  return (
    <motion.aside
      animate={{ width: expanded ? 220 : 64 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-0 h-full bg-white border-r border-gray-100 z-50 flex flex-col shadow-sm overflow-hidden"
      style={{ minWidth: expanded ? 220 : 64 }}
    >
      {/* Logo / toggle */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
        <AnimatePresence>
          {expanded && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-sm font-bold text-blue-600 tracking-wider uppercase whitespace-nowrap"
            >
              MH
            </motion.span>
          )}
        </AnimatePresence>
        <button
          onClick={onToggle}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors ml-auto"
          aria-label="Toggle sidebar"
        >
          <ChevronRight
            size={16}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-3 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200 relative group
                ${isActive
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                }`}
            >
              {/* Active indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="activeBar"
                  className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-600 rounded-r"
                />
              )}

              {/* Icon */}
              <item.Icon
                size={17}
                className={`flex-shrink-0 transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                }`}
                strokeWidth={isActive ? 2.2 : 1.8}
              />

              {/* Label */}
              <AnimatePresence>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className={`text-sm font-medium whitespace-nowrap ${
                      isActive ? "text-blue-600" : ""
                    }`}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip (collapsed) */}
              {!expanded && (
                <div className="absolute left-full ml-3 px-2.5 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50 shadow-lg">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom profile */}
      <div className="border-t border-gray-100 p-3">
        <AnimatePresence>
          {expanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <img
                src={profile.photo}
                alt="Mosharrof"
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-xs font-bold items-center justify-center hidden flex-shrink-0">
                MH
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-gray-800 truncate">Mosharrof</p>
                <p className="text-xs text-gray-400 truncate">CSE · MEC</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <img
                src={profile.photo}
                alt="M"
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                className="w-7 h-7 rounded-full object-cover"
              />
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold items-center justify-center hidden">
                M
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
