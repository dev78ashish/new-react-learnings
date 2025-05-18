import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tierApi = createApi({
    reducerPath: 'tierApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        }
    }),
    tagTypes: ['Tier'],
    endpoints: (builder) => ({
        getTiers: builder.query({
            query: () => '/tiers',
            providesTags: ['Tier']
        }),
        createTier: builder.mutation({
            query: (data) => ({
                url: '/tiers',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Tier']
        }),
        deleteTier: builder.mutation({
            query: (id) => ({
                url: `/tiers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tier']
        })
    })
})

export const {
    useGetTiersQuery,
    useCreateTierMutation,
    useDeleteTierMutation
} = tierApi;