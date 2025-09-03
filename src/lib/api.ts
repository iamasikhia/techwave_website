import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { AuthResponse, CreateBlog } from './data';
// Create axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.centrilearn.com/api',
    // || 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    const encrypted = localStorage.getItem('techwaveafrica');
    if (encrypted) {
        try {
            const bytes = CryptoJS.AES.decrypt(encrypted, import.meta.env.VITE_STORAGE_SECRET || 'centrilearn-default-key');
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            const parsedStorage = JSON.parse(decrypted);
            if (parsedStorage.state?.token) {
                config.headers.Authorization = `Bearer ${parsedStorage.state.token}`;
            }
        } catch (error) {
            console.error('Error decrypting or parsing auth token:', error);
        }
    }
    return config;
});

// Handle response errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config;
        // Only redirect if not a login or signup request
        if (
            error.response?.status === 401 &&
            !['/auth/login', '/auth/signup', '/auth/change-password'].includes(originalRequest?.url)
        ) {
            localStorage.removeItem('techwaveafrica');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;


// Auth API calls
export const authApi = {
    login: async (data: {
        email: string;
        password: string;
    }): Promise<AuthResponse> => {
        const response = await api.post('/auth/login', data);
        return response.data;
    },


    logout: async () => {
        const response = await api.post('/auth/logout');
        return response.data;
    },
};

export const blogApi = {
    createBlog: async (data: CreateBlog) => {
        // If a File is present, send as multipart/form-data
        const formData = new FormData();
        formData.append('title', data.title);
        if (data.summary) formData.append('summary', data.summary);
        formData.append('content', data.content);
        // tags as JSON string - backend should parse this accordingly
        formData.append('tags', JSON.stringify(data.tags || []));
        if (data.thumbnail) formData.append('thumbnail', data.thumbnail);

        const response = await api.post('/blogs', formData, {
            headers: {
                // Let axios set the correct multipart boundary
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    getBlogs: async (page: number = 1, pageSize: number = 6, search?: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params: Record<string, any> = { page, pageSize };
        if (search) params.search = search;
        const response = await api.get('/blogs', { params });
        return response.data;
    },

    getBlogsAdmin: async (page: number = 1, pageSize: number = 6, search?: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params: Record<string, any> = { page, pageSize };
        if (search) params.search = search;
        const response = await api.get('/blogs/admin', { params });
        return response.data;
    },

    getBlogById: async (blogId: string) => {
        const response = await api.get(`/blogs/${blogId}`);
        return response.data;
    },

    getRelatedBlogById: async (blogId: string) => {
        const response = await api.get(`/blogs/${blogId}/related`);
        return response.data;
    },

    deleteBlog: async (blogId: string) => {
        const response = await api.delete(`/blogs/${blogId}`);
        return response.data;
    },

    updateBlog: async (blogId: string, data: CreateBlog) => {
        const formData = new FormData();
        formData.append('title', data.title);
        if (data.summary) formData.append('summary', data.summary);
        formData.append('content', data.content);
        formData.append('tags', JSON.stringify(data.tags || []));
        // only append thumbnail if provided (File)
        if (data.thumbnail instanceof File) {
            formData.append('thumbnail', data.thumbnail as File);
        }

        const response = await api.put(`/blogs/${blogId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    //publish blog
    publishBlog: async (blogId: string) => {
        const response = await api.post(`/blogs/${blogId}/publish`);
        return response.data;
    },

    unPublishBlog: async (blogId: string) => {
        const response = await api.post(`/blogs/${blogId}/unpublish`);
        return response.data;
    },

    contactUs: async (data: { name: string; email: string; interest: string; budget: string; message: string }) => {
        const response = await api.post('/auth/contact-us', data);
        return response.data;
    }

};


export function useGetBlogs(page: number = 1, pageSize: number = 6, search: string = '') {
    return useQuery({
        queryKey: ['blogs', page, pageSize, search],
        queryFn: () => blogApi.getBlogs(page, pageSize, search),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}

export function useGetBlogsAdmin(page: number = 1, pageSize: number = 6, search: string = '') {
    return useQuery({
        queryKey: ['blogsAdmin', page, pageSize, search],
        queryFn: () => blogApi.getBlogsAdmin(page, pageSize, search),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}

export function useCreateBlog() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blogApi.createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
}

export function useUpdateBlog(blogId: string) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: CreateBlog) => blogApi.updateBlog(blogId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
            queryClient.invalidateQueries({ queryKey: ['blog', blogId] });
        },
    });
}

export function useGetBlog(blogId: string) {
    return useQuery({
        queryKey: ['blog', blogId],
        queryFn: () => blogApi.getBlogById(blogId),
        enabled: !!blogId,
    });
}

export function useDeleteBlog() {
    const queryClient = useQueryClient();
    return useMutation({
        // accept blogId as the mutation variable
        mutationFn: (blogId: string) => blogApi.deleteBlog(blogId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
            queryClient.invalidateQueries({ queryKey: ['blogsAdmin'] });
        },
    });
}

export function useGetRelatedBlogs(blogId: string) {
    return useQuery({
        queryKey: ['relatedBlogs', blogId],
        queryFn: () => blogApi.getRelatedBlogById(blogId),
        enabled: !!blogId,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
}

export function usePublishBlog() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blogApi.publishBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
}

export function useUnPublishBlog() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blogApi.unPublishBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
}

export function useContactUs() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: blogApi.contactUs,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contact'] });
        },
    });
}
