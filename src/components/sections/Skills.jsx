import { motion } from "framer-motion";
import { skills } from "../../data/content";

export default function Skills() {
  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="text-gray-400 text-sm mb-10"
      >
        Technologies, tools, and domains I work with
      </motion.p>

      <div className="space-y-6">
        {Object.entries(skills).map(([category, { icon, items }], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">{icon}</span>
              <h3 className="font-semibold text-gray-800 text-sm">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning / Focus areas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🚀</span>
          <h3 className="font-semibold text-gray-800 text-sm">Currently Exploring</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "FPGA Development", "Neural Architecture Search",
            "Hardware-Software Co-design", "LLM Fine-tuning",
            "RISC-V ISA", "AI Accelerator Design",
          ].map(item => (
            <span key={item} className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-xl">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
