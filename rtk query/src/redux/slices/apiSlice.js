import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/',
    }),
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
    }),
    registerUser:  builder.mutation({
      query: (formData) => ({
        url: '/register',
        method: "POST",
        body: formData,
      })
    })
  }),
});

export const { useGetUsersQuery, useUploadImageMutation, useRegisterUserMutation } = apiSlice;