import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="text-gray-400 text-sm mb-10"
      >
        Collaborations, freelance projects, research partnerships, or just to say hi
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-5"
        >
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">Connect with me</h3>
            <div className="space-y-3">
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  value: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: "📱",
                  label: "Phone / WhatsApp",
                  value: profile.phone,
                  href: profile.whatsapp,
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "md-mosharrof-hossain",
                  href: profile.linkedin,
                },
                {
                  icon: "⌨️",
                  label: "GitHub",
                  value: "Mosharrof8097",
                  href: profile.github,
                },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <span className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
            <p className="text-xs font-semibold text-blue-800 mb-1">Open to:</p>
            <ul className="space-y-1">
              {[
                "Flutter freelance & client projects",
                "AI/ML research collaborations",
                "PhD supervision inquiries",
                "Speaking at student events",
              ].map(item => (
                <li key={item} className="text-xs text-blue-700 flex gap-1.5">
                  <span>→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Name</label>
              <input
                type="text" required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 font-medium">Email</label>
              <input
                type="email" required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5 font-medium">Subject</label>
            <input
              type="text" required
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              placeholder="What's this about?"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5 font-medium">Message</label>
            <textarea
              required rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
              sent
                ? "bg-green-500 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md"
            }`}
          >
            {sent ? "✓ Opening email client..." : "Send Message →"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
