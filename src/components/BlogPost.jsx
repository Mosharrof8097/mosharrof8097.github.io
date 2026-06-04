import { motion } from "framer-motion";

export default function BlogPost({ post, onBack }) {
  const { content } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl px-10 py-10"
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md">#{tag}</span>
          ))}
          <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-4">{post.title}</h1>
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-2xl object-cover max-h-64 shadow-sm"
            onError={e => { e.target.style.display = "none"; }}
          />
        )}
      </div>

      {/* Intro */}
      {content?.intro && (
        <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">{content.intro}</p>
      )}

      {/* Sections */}
      {content?.sections?.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </motion.div>
  );
}

function Section({ section }) {
  if (section.type === "image-grid") {
    const isPortrait = section.portrait;
    return (
      <div className="mb-8">
        {section.caption && (
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{section.caption}</p>
        )}
        <div className={`grid gap-3 ${isPortrait ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
          {section.images.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noopener noreferrer"
              className={`block overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                isPortrait ? "aspect-[3/4]" : "aspect-video"
              }`}>
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                onError={e => {
                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-300 text-sm">📷</div>`;
                }}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "glossary") {
    return (
      <div className="mb-8">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3 border-b border-blue-100 pb-2">
          {section.title}
        </h2>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {section.items.map(item => (
            <div key={item.abbr} className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="font-mono font-bold text-blue-600 text-sm w-20 flex-shrink-0">{item.abbr}</span>
              <span className="text-gray-600 text-sm">→ {item.full}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "subject") {
    return (
      <div className="mb-8 p-5 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{section.emoji}</span>
          <h2 className="font-bold text-gray-900">{section.title}</h2>
        </div>
        <p className="text-gray-500 text-sm mb-4">{section.desc}</p>
        <div className="space-y-2">
          {section.topics.map((t, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">{t.icon}</span>
              <div>
                <span className="font-semibold text-gray-800 text-sm">{t.label}</span>
                <span className="text-gray-500 text-sm"> — {t.detail}</span>
              </div>
            </div>
          ))}
        </div>
        {section.note && (
          <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs text-blue-700">💡 {section.note}</p>
          </div>
        )}
      </div>
    );
  }

  if (section.type === "project") {
    return (
      <div className="mb-8 p-5 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{section.emoji}</span>
          <h2 className="font-bold text-gray-900">{section.title}</h2>
        </div>
        <p className="text-gray-500 text-sm mb-4">{section.desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {section.ops.map((op, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-xl">
              <p className="text-xs font-semibold text-gray-700 mb-1">{op.cat}</p>
              {op.items.map(item => (
                <p key={item} className="text-xs text-gray-500">• {item}</p>
              ))}
            </div>
          ))}
        </div>
        {section.note && (
          <p className="text-sm text-gray-600 leading-relaxed mb-4">📌 {section.note}</p>
        )}
        {section.images?.map((src, i) => (
          <div key={i} className="mb-2 rounded-xl overflow-hidden bg-gray-100 aspect-video shadow-sm">
            <img
              src={src}
              alt={section.imageCaption}
              className="w-full h-full object-cover"
              onError={e => { e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-300 text-2xl">📷</div>`; }}
            />
            {section.imageCaption && (
              <p className="text-xs text-gray-400 text-center mt-1 pb-1">{section.imageCaption}</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "achievement") {
    return (
      <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{section.emoji}</span>
          <h2 className="font-bold text-gray-900">{section.title}</h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{section.desc}</p>
        {section.quote && (
          <p className="text-sm font-semibold text-blue-700 mb-4 italic">"{section.quote}"</p>
        )}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {section.images?.map((src, i) => (
            <div key={i}>
              <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={src}
                  alt={section.imageCaptions?.[i]}
                  className="w-full h-full object-cover"
                  onError={e => { e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-300 text-2xl">📷</div>`; }}
                />
              </div>
              {section.imageCaptions?.[i] && (
                <p className="text-xs text-gray-400 text-center mt-1">{section.imageCaptions[i]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
