import { Badge } from "@/components/ui/badge";
import HomeLayout from "@/layouts/HomeLayout";
import BlogImage from "@/assets/images/blog.png";
import { useGetBlogs } from "@/lib/api";
import { useState, useEffect } from 'react';
import type { Blog } from "@/lib/data";
import { Link } from "react-router-dom";
import { truncate } from "@/lib/utils";

export default function Blog() {
  const [page, setPage] = useState(1);
  const pageSize = 9; // show 3x3 grid
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const { data, isLoading } = useGetBlogs(page, pageSize, debouncedSearch);
  const blogs = (data && (data.items ?? data)) || [];
  const total = data?.total ?? (Array.isArray(data) ? data.length : 0);
  const pageCount = data?.pageCount ?? Math.max(1, Math.ceil(total / pageSize));
  
  // debounce search input and reset page to 1 when a new search is applied
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);
  return (
    <HomeLayout bg="bg-[#FFF0D1]">
      <div className="pt-10">
        <section className="pt-28 md:pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-3 py-2 rounded-full bg-white text-gray-600 border border-gray-200"
            >
              <div className="h-4 w-4 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FFB804] rounded-full"></div>
              </div>
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-medium text-black mb-6 leading-tight">
              The world of tech moves fast. 
                <br /> We move faster.
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto tracking-[0.2px] font-normal">
              Our newsroom brings you the latest from the global technology stage—AI breakthroughs, digital transformation playbooks, and industry trends that shape tomorrow.
            </p>

            {/* Search section */}
            <div className="w-full my-6">
              <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
              <div className="relative max-w-2xl mx-auto">
                <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  {/* search icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="11" cy="11" r="5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <input
                  id="blog-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, topics, or tags"
                  className="w-full rounded-full bg-white border border-gray-200 py-3 pl-14 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white p-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isLoading && Array.from({ length: pageSize }).map((_, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-sm bg-white">
                  <div className="w-full h-48 bg-gray-200/70 animate-pulse" />
                  <div className="p-6">
                    <div className="h-3 bg-gray-200 rounded w-1/3 mb-3 animate-pulse" />
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-full mb-4 animate-pulse" />
                    <div className="h-8 bg-gray-200 rounded w-24 animate-pulse" />
                  </div>
                </div>
              ))}

              {!isLoading && (blogs as unknown[]).map((article: unknown, index: number) => {
                const a = article as Blog;
                return (
                <div key={index} className="overflow-hidden">
                  <img
                    src={a.thumbnail ?? BlogImage}
                    alt={a.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="py-6 text-left">
                    <div className="flex items-center mb-2">
                      {(a.tags ?? []).slice(0,2).map((tag: string) => (
                        <div key={tag} className="text-sm text-gray-500 mr-2 rounded-full px-2 py-1 border border-gray-300">
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">{a.title}</h3>
                    <p className="text-gray-600 mb-4 text-pretty">{truncate(a.summary)}</p>
                    <div className="flex items-center justify-between">
                      <Link to={`/blogs/${a.uuid}`} className="text-emerald-600 hover:text-emerald-700 p-0">Read More</Link>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="px-3 py-1 border rounded disabled:opacity-50" disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button>
              <div className="text-sm text-gray-600">Page {page} of {pageCount || 1}</div>
              <button className="px-3 py-1 border rounded disabled:opacity-50" disabled={page >= (pageCount || 1)} onClick={() => setPage(p => p + 1)}>Next</button>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
