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
    tagTypes: ['Blog'],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => '/blogs',
            providesTags: (result) => 
                result
                    ? [
                        ...result.map(({ _id }) => ({ type: 'Blog', id: _id })),
                        { type: 'Blog', id: 'LIST' },
                      ]
                    : [{ type: 'Blog', id: 'LIST' }],
        }),
        getBlogById: builder.query({
            query: (id) => `/blogs/${id}`,
            providesTags: (result, error, id) => [{ type: 'Blog', id }],
        }),
        createBlog: builder.mutation({
            query: (formData) => ({
                url: '/blogs',
                method: 'POST',
                body: formData,
                formData: true,
            }),
            invalidatesTags: [{ type: 'Blog', id: 'LIST' }],
        }),
        updateBlog: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/blogs/${id}`,
                method: 'PUT',
                body: formData,
                formData: true,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Blog', id },
                { type: 'Blog', id: 'LIST' }
            ],
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Blog', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetBlogsQuery,
    useGetBlogByIdQuery,
    useCreateBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
} = blogApi;