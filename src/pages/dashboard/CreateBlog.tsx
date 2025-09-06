import DashboardLayout from "@/layouts/DashboardLayout";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/lib/route";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useCreateBlog, useGetBlog, useUpdateBlog } from "@/lib/api";
import { useParams } from 'react-router-dom';
import type { CreateBlog as CreateBlogType } from "@/lib/data";
import SuccessModal from "@/components/SuccessModal";

export default function CreateBlog() {
    const navigate = useNavigate();
  const { register, handleSubmit, watch, reset, setValue } = useForm<
    CreateBlogType & { tagInput?: string }
  >({
    defaultValues: {
      title: "",
      summary: "",
      content: "",
      tags: ["ArtificialIntelligence", "AfricanStartups"],
      thumbnail: undefined as unknown as File,
    },
  });

  const [tagInput, setTagInput] = useState("");
  const watchedTags = watch("tags") || [
    "ArtificialIntelligence",
    "AfricanStartups",
  ];
  const createBlog = useCreateBlog();
  const params = useParams();
  const editId = params.id ?? null;
  const { data: blogData } = useGetBlog(editId ?? '');
  const updateBlog = useUpdateBlog(editId ?? '');
  const [submitting, setSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    msg: ""
  });

  function addTagFromInput() {
    const raw = tagInput.trim();
    if (!raw) return;
    const parts = raw
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);
    const currentTags: string[] = watchedTags || [];
    const next = [...currentTags];
    for (const p of parts) {
      if (p && !next.includes(p)) next.push(p);
    }
    setValue("tags", next);
    setTagInput("");
  }

  function removeTag(idx: number) {
    const currentTags: string[] = watchedTags || [];
    const next = currentTags.filter((_, i) => i !== idx);
    setValue("tags", next);
  }

  function onTagKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTagFromInput();
    } else if (e.key === "Backspace" && tagInput === "" && watchedTags.length) {
      // remove last tag
      e.preventDefault();
      removeTag(watchedTags.length - 1);
    }
  }
  const [content, setContent] = useState("");

  const watchedThumbnail = watch("thumbnail") as File | undefined;
  // type guard
  function isFileLike(x: unknown): x is File | Blob {
    return !!x && typeof x === "object" && "size" in (x as object);
  }

  // Sync preview URL when thumbnail changes
  useEffect(() => {
    let objectUrl: string | null = null;
    if (isFileLike(watchedThumbnail)) {
      objectUrl = URL.createObjectURL(watchedThumbnail as File | Blob);
      // revoke any previous preview stored in state
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return objectUrl;
      });
    } else {
      // clear preview if thumbnail removed
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    }

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [watchedThumbnail]);

  // when loading an existing blog for edit, populate form values
  useEffect(() => {
    if (!blogData) return;
    setValue('title', blogData.title ?? '');
    setValue('summary', blogData.summary ?? '');
    setValue('content', blogData.content ?? '');
    setContent(blogData.content ?? '');
    setValue('tags', blogData.tags ?? []);
    // show existing thumbnail URL when editing (backend returns path)
    if (!watchedThumbnail && blogData.thumbnail) {
      setPreviewUrl(blogData.thumbnail as unknown as string);
    }
  }, [blogData, setValue, watchedThumbnail]);

  useEffect(() => {
    setValue("content", content);
  }, [content, setValue]);

  // form submit
  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      const payload: CreateBlogType = {
        title: data.title,
        summary: data.summary,
        content: data.content,
        thumbnail: data.thumbnail as unknown as File,
        tags: data.tags || [],
      };
  if (editId) {
        await updateBlog.mutateAsync(payload);
        setSuccessMessage({
            title: 'Success',
            msg: 'Your blog post was updated successfully.'
        });
      } else {
        await createBlog.mutateAsync(payload);
        setSuccessMessage({
            title: 'Success',
            msg: 'Your blog post was created successfully.'
        });
      }
      reset();
      setContent("");
      setSuccessOpen(true);
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : String(err);
      alert(message || "Failed to create blog");
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 pt-24">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Create New Blog</h1>
            <p className="text-sm text-gray-600">
              View and manage all blog posts
            </p>
          </div>
          <div>
            <Button asChild size="sm" className="bg-[#338B74] text-white">
              <Link to={routes.dashboardBlogs} className="inline-flex items-center gap-2">
                Back to All Posts
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post Title
            </label>
            <input
              {...register("title", { required: true })}
              className="w-full mb-4 px-4 py-2 rounded border border-gray-200"
              placeholder="The Rise of AI in African Startups"
            />

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded h-36 flex items-center justify-center gap-8 mb-6">
              <div className="text-center text-sm text-gray-500">
                <div className="mb-2">Click the button to select your file</div>
                <div className="text-xs text-gray-400 mb-3">
                  jpeg, png & mp4 files under 5mb
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("thumbnail")}
                  className="hidden"
                  id="thumbnail-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    // only set form value here; preview URL is created in the effect below
                    if (file) {
                      setValue("thumbnail", file as unknown as File);
                    } else {
                      setValue("thumbnail", undefined as unknown as File);
                    }
                  }}
                />
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(
                        "thumbnail-input"
                      ) as HTMLInputElement | null;
                      el?.click();
                    }}
                  >
                    <span className="bg-yellow-100 px-3 py-1 rounded">
                      {previewUrl ? "Replace File" : "Choose File"}
                    </span>
                  </Button>
                  {previewUrl && (
                    <button
                      type="button"
                      className="text-sm text-red-600 underline"
                      onClick={() => {
                        // remove selected file
                        const prev = previewUrl;
                        if (prev) URL.revokeObjectURL(prev);
                        setPreviewUrl(null);
                        setValue("thumbnail", undefined as unknown as File);
                        // also clear native input value to allow re-selecting same file if needed
                        const el = document.getElementById(
                          "thumbnail-input"
                        ) as HTMLInputElement | null;
                        if (el) el.value = "";
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
              {previewUrl ? (
                <div className="mb-4">
                  {/* show preview - image or video */}
                  {watchedThumbnail && (
                    <img
                      src={previewUrl}
                      alt="thumbnail preview"
                      className="max-h-24 w-auto object-contain rounded"
                    />
                  )}
                </div>
              ): 
              blogData && <div className="mb-4">
                <img
                    src={blogData.thumbnail}
                    alt="thumbnail preview"
                    className="max-h-24 w-auto object-contain rounded"
                />
              </div>
              }
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paragraph Editor
            </label>
            <div className="mb-24">
              {/* Dynamically load react-quill on the client to avoid SSR issues */}
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                placeholder="Write your blog content here..."
                className="h-96 mb-4"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    [{ header: 1 }, { header: 2 }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ script: "sub" }, { script: "super" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],
                    [{ size: ["small", false, "large", "huge"] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ color: [] }, { background: [] }],
                    [{ font: [] }],
                    [{ align: [] }],
                    ["clean"],
                    ["link", "image"],
                  ],
                }}
              />
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Summary
            </label>
            <div className="mb-6">
              <textarea
                {...register("summary", { required: true })}
                placeholder="Write a short summary of your blog post..."
                className="flex-1 w-full px-3 py-2 rounded border border-gray-200"
              />
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="mb-6">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={onTagKeyDown}
                onBlur={() => addTagFromInput()}
                placeholder="Type a tag and press Enter"
                className="flex-1 w-full px-3 py-2 rounded border border-gray-200"
              />
              {watchedTags.map((t: string, i: number) => (
                <span
                  key={t}
                  className="mt-2 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm"
                >
                  <span className="select-none">{t}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(i)}
                    aria-label={`Remove ${t}`}
                    className="text-amber-700/70 hover:text-amber-900 ml-1 cursor-pointer"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center">
              <Button
                type="submit"
                size="sm"
                className="bg-[#338B74] text-white"
                disabled={submitting}
              >
                {submitting ? `${editId ? "Editing" : "Creating"}...` : `${editId ? "Edit" : "Create"} Blog`}
              </Button>
            </div>
          </form>
        </div>
        <SuccessModal
          isOpen={successOpen}
          title={successMessage.title}
          message={successMessage.msg}
          onClose={() => {setSuccessOpen(false); navigate(routes.dashboardBlogs)}}
        />
      </div>
    </DashboardLayout>
  );
}
