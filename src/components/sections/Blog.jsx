import { useState } from "react";
import { motion } from "framer-motion";
import { blog } from "../../data/content";
import BlogPost from "../BlogPost";

export default function Blog({ openPostId, onPostClose }) {
  const [selected, setSelected] = useState(
    openPostId ? blog.find(p => p.id === openPostId) || null : null
  );

  // sync when openPostId changes from right panel
  useState(() => {
    if (openPostId) {
      const post = blog.find(p => p.id === openPostId);
      if (post) setSelected(post);
    }
  });

  const handleBack = () => {
    setSelected(null);
    onPostClose?.();
  };

  if (selected) {
    return <BlogPost post={selected} onBack={handleBack} />;
  }

  return (
    <div className="max-w-4xl px-10 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        Blog & Articles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
        className="text-gray-400 text-sm mb-10"
      >
        Learning journeys, hardware notes, and technical writing
      </motion.p>

      <div className="space-y-4">
        {blog.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => post.content && setSelected(post)}
            className={`rounded-2xl border overflow-hidden transition-all group ${
              post.content
                ? "cursor-pointer hover:shadow-md hover:border-blue-200"
                : "cursor-default"
            } ${post.featured ? "border-blue-100" : "border-gray-100"}`}
          >
            <div className="flex gap-0 flex-col sm:flex-row">
              {/* Cover image */}
              {post.cover && (
                <div className="w-full sm:w-44 flex-shrink-0 overflow-hidden bg-gray-100 h-44 sm:h-auto">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={e => { e.target.parentElement.style.display = "none"; }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    {post.featured && (
                      <span className="text-xs font-semibold px-2 py-0.5 bg-blue-600 text-white rounded-md">Featured</span>
                    )}
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  {post.content ? (
                    <span className="text-xs text-blue-500 font-medium group-hover:underline flex items-center gap-1">
                      Read Post
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-xs text-gray-300 bg-gray-100 px-2 py-1 rounded-lg">Coming Soon</span>
                  )}
                </div>

                <h3 className="font-bold text-base text-gray-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.summary}</p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="mt-8 p-4 rounded-2xl border border-dashed border-gray-200 text-center"
      >
        <p className="text-gray-400 text-sm">More articles coming soon.</p>
        <p className="text-gray-400 text-xs mt-1">
          Follow on{" "}
          <a href="https://www.linkedin.com/in/md-mosharrof-hossain-1541772b9/" target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            LinkedIn
          </a>{" "}
          for updates.
        </p>
      </motion.div>
    </div>
  );
}
