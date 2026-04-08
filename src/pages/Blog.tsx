import HomeLayout from "@/layouts/HomeLayout";
import BlogImage from "@/assets/images/blog.png";
import { useGetBlogs } from "@/lib/api";
import { useState, useEffect } from "react";
import type { Blog } from "@/lib/data";
import { Link } from "react-router-dom";
import { truncate } from "@/lib/utils";

export default function Blog() {
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { data, isLoading } = useGetBlogs(page, pageSize, debouncedSearch);
  const blogs = (data && (data.items ?? data)) || [];
  const total = data?.total ?? (Array.isArray(data) ? data.length : 0);
  const pageCount = data?.pageCount ?? Math.max(1, Math.ceil(total / pageSize));

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <HomeLayout>
      <div className="pt-10">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[#338B74]/8 border border-[#338B74]/20 text-[#338B74] text-sm font-medium rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#338B74]" />
              Global Tech News
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-950 mb-6 leading-tight tracking-tight">
              The world of tech moves fast.
              <br />
              <span className="text-[#338B74]">We move faster.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              AI breakthroughs, digital transformation playbooks, and industry
              trends that shape tomorrow, from our newsroom to yours.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto">
              <label htmlFor="blog-search" className="sr-only">
                Search blog posts
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input
                  id="blog-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, topics, or tags..."
                  className="w-full rounded-full bg-white border border-gray-200 py-3 pl-11 pr-5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#338B74]/30 focus:border-[#338B74]/50 transition-all shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-gray-50 border-t border-gray-100 px-6 py-14">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading &&
                Array.from({ length: pageSize }).map((_, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden p-3">
                    <div className="w-full h-44 bg-gray-100 rounded-xl animate-pulse mb-4" />
                    <div className="px-2 space-y-2 pb-3">
                      <div className="h-2.5 bg-gray-100 rounded-full w-1/3 animate-pulse" />
                      <div className="h-4 bg-gray-100 rounded-full w-full animate-pulse" />
                      <div className="h-3 bg-gray-100 rounded-full w-4/5 animate-pulse" />
                      <div className="h-3 bg-gray-100 rounded-full w-3/5 animate-pulse" />
                    </div>
                  </div>
                ))}

              {!isLoading &&
                (blogs as unknown[]).map((article: unknown, index: number) => {
                  const a = article as Blog;
                  return (
                    <div
                      key={index}
                      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="p-3">
                        <img
                          src={a.thumbnail ?? BlogImage}
                          alt={a.title}
                          className="w-full h-44 object-cover rounded-xl"
                        />
                      </div>
                      <div className="px-5 pb-5">
                        {(a.tags ?? []).length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {(a.tags ?? []).slice(0, 2).map((tag: string) => (
                              <span
                                key={tag}
                                className="text-xs text-gray-500 bg-gray-100 rounded-full px-2.5 py-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug text-balance">
                          {a.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed text-pretty">
                          {truncate(a.summary)}
                        </p>
                        <Link
                          to={`/blogs/${a.uuid}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#338B74] hover:text-[#2a7562] transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <button
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:border-gray-300 hover:bg-gray-50 transition-all"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Previous
              </button>
              <span className="text-sm text-gray-500 px-2">
                Page {page} of {pageCount || 1}
              </span>
              <button
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:border-gray-300 hover:bg-gray-50 transition-all"
                disabled={page >= (pageCount || 1)}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
