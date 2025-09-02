import BlogImage from "@/assets/images/blog.png";
import { Button } from "@/components/ui/button";
import { useGetBlogsAdmin, usePublishBlog, useUnPublishBlog } from "@/lib/api";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Link } from "react-router-dom";
import { routes } from "@/lib/route";
import { DeleteIcon, Edit3Icon, EllipsisVertical, EyeIcon, SendIcon } from "lucide-react";
import { useDeleteBlog } from "@/lib/api";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query';
import type { Blog } from "@/lib/data";

export default function DashboardBlogs() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), 400);
    return () => clearTimeout(t);
  }, [search]);

  const { data, isLoading, isError, error, refetch } = useGetBlogsAdmin(1, 6, debouncedSearch);

  // ensure we fetch when the debounced search term changes
  useEffect(() => {
    if (typeof refetch === 'function') refetch();
  }, [debouncedSearch, refetch]);
  const [openMenuFor, setOpenMenuFor] = useState<string | number | null>(null);
  const queryClient = useQueryClient();
  const deleteMutation = useDeleteBlog();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // publish/unpublish hooks
  const publishMutation = usePublishBlog();
  const unpublishMutation = useUnPublishBlog();
  const [mutatingId, setMutatingId] = useState<string | number | null>(null);

  // close popover when clicking outside or pressing Escape
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpenMenuFor(null);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenMenuFor(null);
    }

  document.addEventListener('mousedown', onDocClick);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
  // server may return paginated shape { items: Blog[] } or an array directly
  const blogs = (data && (data.items ?? data)) || [];

  return (
    <DashboardLayout>
      <div className="pt-24">
        <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-medium text-black">Blog Posts</h2>
            <p className="text-lg text-gray-600">
              View and manage all blog posts
            </p>
          </div>

          <div>
            <Button asChild size="sm" className="bg-[#338B74] text-white">
              <Link
                to={routes.createBlog}
                className="inline-flex items-center gap-2"
              >
                Create Blog
              </Link>
            </Button>
          </div>
        </div>

        <section className="bg-white p-8">
          <div className="max-w-6xl mx-auto mb-6">
            <div className="max-w-md mx-auto">
              <label htmlFor="dashboard-blog-search" className="sr-only">Search blogs</label>
              <div className="relative">
                <input
                  id="dashboard-blog-search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search posts, tags or content"
                  className="w-full rounded-full bg-gray-100 border border-gray-200 py-2 pl-4 pr-4 text-gray-700 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading &&
              // loading shimmer: 3 placeholder cards
              Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden shadow-sm bg-white"
                >
                  <div className="w-full h-48 bg-gray-200/70 animate-pulse" />
                  <div className="p-6">
                    <div className="h-3 bg-gray-200 rounded w-1/3 mb-3 animate-pulse" />
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-full mb-4 animate-pulse" />
                    <div className="flex items-center justify-between">
                      <div className="h-8 bg-gray-200 rounded w-24 animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                    </div>
                  </div>
                </div>
              ) )}

            {isError && (
              <div className="col-span-full p-6 text-center text-sm text-red-600">
                Failed to load blogs:{" "}
                {error instanceof Error ? error.message : "Unknown error"}
              </div>
            )}

            {!isLoading && !isError && blogs.length === 0 && (
              <div className="col-span-full p-6 text-center text-sm text-gray-600">
                No blog posts found.
              </div>
            )}

            {!isLoading &&
              !isError &&
              (blogs as Blog[]).map((b) => (
                <article
                  key={b.id ?? b.title}
                  className="rounded-lg overflow-hidden shadow-sm bg-white"
                >
                  <div className="relative">
                    <img
                      src={b.thumbnail ?? BlogImage}
                      alt={b.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-md p-1 shadow">
                      <button
                        onClick={() => setOpenMenuFor(prev => (prev === b.id ? null : (b.id ?? null)))}
                        aria-label="Actions"
                        className="p-1 cursor-pointer"
                      >
                        <EllipsisVertical className="h-4 w-4 text-[#FFB804]" />
                      </button>

                      {openMenuFor === b.id && (
                        <div ref={menuRef} className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
                          <button
                            className="w-full flex items-center cursor-pointer text-left px-3 py-2 hover:bg-gray-50"
                            onClick={() => {
                              // navigate to edit page (reuse create route for now)
                              navigate(`${routes.editBlogId}/${b.uuid}`);
                            }}
                          >
                            <Edit3Icon className="h-4 w-4 text-[#009684] mr-2" />
                            Edit
                          </button>
                          <button
                            className="w-full flex items-center cursor-pointer text-left px-3 py-2 hover:bg-gray-50"
                            onClick={() => {
                              // open preview in new tab - assume /blog/:id
                              window.open(`/blog/${b.uuid}`, "_blank");
                            }}
                          >
                            <EyeIcon className="h-4 w-4 text-[#246BFD] mr-2" />
                            Preview
                          </button>
                          <button
                            className="w-full flex items-center cursor-pointer text-left px-3 py-2 hover:bg-gray-50"
                            onClick={async () => {
                              if (!b.id) return;
                              const action = b.isPublished ? 'unpublish' : 'publish';
                              if (!confirm(`Are you sure you want to ${action} this post?`)) return;
                              setMutatingId(b.id);
                              try {
                                if (b.isPublished) {
                                  await unpublishMutation.mutateAsync(String(b.uuid));
                                } else {
                                  await publishMutation.mutateAsync(String(b.uuid));
                                }
                                queryClient.invalidateQueries({ queryKey: ['blogsAdmin'] });
                                queryClient.invalidateQueries({ queryKey: ['blogs'] });
                                setOpenMenuFor(null);
                              } catch (err) {
                                console.error(err);
                                alert('Failed to ' + action);
                              } finally {
                                setMutatingId(null);
                              }
                            }}
                            disabled={mutatingId === b.id}
                          >
                            <SendIcon className="h-4 w-4 text-[#4ADE80] mr-2" />
                            {mutatingId === b.id ? 'Processing...' : (b.isPublished ? 'Unpublish' : 'Publish')}
                          </button>
                          <button
                            className="w-full flex items-center cursor-pointer text-left px-3 py-2 hover:bg-gray-50"
                            onClick={async () => {
                              if (!b.id) return;
                              if (!confirm('Delete this post?')) return;
                              setMutatingId(b.id);
                              try {
                                await deleteMutation.mutateAsync(String(b.uuid));
                                setOpenMenuFor(null);
                              } catch (err) {
                                console.error(err);
                                alert('Failed to delete');
                              } finally {
                                setMutatingId(null);
                              }
                            }}
                            disabled={mutatingId === b.id}
                          >
                            <DeleteIcon className="h-4 w-4 text-red-500 mr-2" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {(b.tags ?? []).slice(0, 2).map((t: string) => (
                        <span
                          key={t}
                          className="text-xs text-gray-600 px-2 py-1 rounded-full border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {b.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {b.summary ?? b.content ?? ""}
                    </p>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
