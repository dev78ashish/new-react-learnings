import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const referalApi = createApi({
    reducerPath: 'referalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if(token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getReferal: builder.query({
            query: () => '/refer',
        }),
        updateReferal: builder.mutation({
            query: (refer_num) => ({
                url: '/refer/update',
                method: 'PUT',
                body: {refer_num},
            }),
        }),
    }),
});

export const {useGetReferalQuery, useUpdateReferalMutation} = referalApi