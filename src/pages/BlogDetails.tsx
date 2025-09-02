import HomeLayout from "@/layouts/HomeLayout";
import { useGetBlog, useGetRelatedBlogs } from "@/lib/api";
import { useParams, Link } from "react-router-dom";
import BlogImage from "@/assets/images/blog.png";
import { truncate } from "@/lib/utils";
import type { Blog } from "@/lib/data";
import { routes } from "@/lib/route";
import toast from "react-hot-toast";

export default function BlogDetails() {
  const params = useParams();
  const blogId = params.id ?? null;
  const linkToShare = window.location.href;
  const {
    data: blogData,
    isLoading,
    isError,
    error,
  } = useGetBlog(blogId ?? "");
  const { data: relatedData, isLoading: relatedLoading } = useGetRelatedBlogs(
    blogId ?? ""
  );

  const relatedBlogs =
    (relatedData && (relatedData.items ?? relatedData)) || [];
  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToShare);
    toast.success("Link copied to clipboard!");

  };
  const shareOnSocial = (platform: string) => {
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          linkToShare
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          linkToShare
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          linkToShare
        )}`;
        break;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <HomeLayout bg="">
      <div className="pt-10">
        <section className="bg-white p-8 pt-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between">
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <div className="text-[#338B74] text-sm font-medium">
                    Author
                  </div>
                  <div className="text-lg">Techwave Africa</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#338B74] text-sm font-medium">
                    Published on
                  </div>
                  <div className="text-lg">
                    {blogData?.publishedAt
                      ? new Date(blogData.publishedAt).toLocaleDateString()
                      : "—"}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  id="copyButton"
                  onClick={copyToClipboard}
                  className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                >
                  Copy link
                </button>
                <button onClick={() => shareOnSocial("twitter")} className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.46 6c-.77.35-1.5.6-2.3.7a4.1 4.1 0 001.8-2.2 8.16 8.16 0 01-2.6 1 4.1 4.1 0 00-7 3.7 11.64 11.64 0 01-8.5-4.3 4.1 4.1 0 001.3 5.5 4 4 0 01-1.9-.6v.1a4.1 4.1 0 003.3 4 4.4 4.4 0 01-1.1.2 3.7 3.7 0 01-.8-.1 4.1 4.1 0 003.8 2.9A8.2 8.2 0 012 19.5a11.68 11.68 0 006.3 1.9c7.6 0 11.8-6.3 11.8-11.7v-.5c.8-.5 1.5-1.3 2-2.1z" />
                  </svg>
                </button>
                <button onClick={() => shareOnSocial("facebook")} className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 3.58 8.11 8.17 8.91v-6.29H8.6v-2.62h1.57v-2.01c0-1.55.92-2.39 2.31-2.39.67 0 1.37.11 1.37.11v1.5h-.77c-.76 0-1 .47-1 .95v1.15h2.06l-.33 2.62h-1.73V21c4.59-.8 8.17-4.5 8.17-8.91 0-5.52-4.48-10-10-10z" />
                  </svg>
                </button>
                <button onClick={() => shareOnSocial("linkedin")} className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zm-1.77-12.8c-1.13 0-1.9-.85-1.9-1.91 0-1.06.78-1.91 1.91-1.91s1.9.85 1.9 1.91c0 1.06-.77 1.91-1.9 1.91zm15.13 12.8h-3.52v-5.83c0-1.39-.03-3.18-1.93-3.18-1.93 0-2.23 1.51-2.23 3.06v5.95h-3.52V9h3.38v1.56h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.23 2.35 4.23 5.41v6.28z" />
                  </svg>
                </button>
              </div>
            </div>

            {isLoading ? (
              // loading shimmer
              <div className="mt-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
                <div className="w-full h-64 bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" />
                </div>
              </div>
            ) : isError ? (
              <div className="mt-8 text-red-600">
                {error instanceof Error ? error.message : "Failed to load blog"}
              </div>
            ) : (
              <>
                <div className="text-4xl font-medium mt-8">
                  {blogData?.title}
                </div>
                <div
                  className="text-gray-600 mt-4 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogData?.content ?? "" }}
                />
              </>
            )}
          </div>
        </section>
        <section className="bg-[#FFF4E5] p-16 mt-16">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center space-around">
            <div className="max-w-xl mx-auto text-left pb-10 text-black">
              <div className="text-5xl font-medium">From the blog</div>

              <div className="text-lg text-black mb-8 tracking-[0.2px] max-w-md mt-5">
                The latest industry news, interviews, technologies, and
                resources.
              </div>

              <Link
                to={routes.blog}
                className="bg-[#338B74] text-white rounded-2xl px-8 py-2 h-10 text-base font-semibold"
              >
                View All Blog
              </Link>
            </div>
            {/* Related blogs */}
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-3 mb-12">
              {relatedData == null &&
                relatedLoading &&
                // show 2 skeleton items while loading
                Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-gray-100 flex space-x-3 items-center p-4"
                  >
                    <div className="w-48 h-48 bg-gray-200 rounded-lg animate-pulse" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-3 animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-full mb-2 animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" />
                    </div>
                  </div>
                ))}

              {relatedData && relatedBlogs.length === 0 && (
                <div className="text-sm text-gray-600">
                  No related posts found.
                </div>
              )}

              {relatedData &&
                relatedBlogs.map((article: Blog) => (
                  <div
                    key={article.id ?? article.uuid}
                    className="overflow-hidden border border-gray-100 flex space-x-3 items-center"
                  >
                    <img
                      src={article.thumbnail ?? BlogImage}
                      alt={article.title}
                      className="w-48 h-48 object-cover rounded-lg"
                    />
                    <div className="text-left p-4">
                      <div className="flex items-center mb-2">
                        {(article.tags ?? []).slice(0, 2).map((tag: string) => (
                          <div
                            key={tag}
                            className="text-sm text-gray-500 mr-2 rounded-full px-2 py-1 border border-gray-300"
                          >
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-pretty">
                        {truncate(article.summary, 100)}
                      </p>
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/blogs/${article.uuid}`}
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
