import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs',
        }),
        createBlog: builder.mutation({
            query: (formData) => ({
                url: '/blogs',
                method: 'POST',
                body: formData,
            })
        }),
        updateBlog: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/blogs/${id}`,
                method: 'PUT',
                body: formData,
            })
        })
    })
});

export const {
    useGetBlogsQuery,
    useCreateBlogMutation,
    useUpdateBlogMutation
} = blogApi;
