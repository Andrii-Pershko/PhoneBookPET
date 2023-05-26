import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const prepareHeaders = headers => {
  // Отримайте токен авторизації з вашого бекенду

  const authToken = localStorage.getItem('TOKEN');
  if (authToken) {
    headers.set('Authorization', `Bearer ${authToken}`);
  }
  return headers;
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders,
  }),

  endpoints: builder => ({
    login: builder.mutation({
      query: loginData => ({
        url: '/users/login',
        method: 'POST',
        body: loginData,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    currentUser: builder.query({
      query: () => '/users/current',
      providesTags: ['Auth'],
    }),
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        method: 'delete',
        url: `/contacts/${contactId}`,
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        method: 'POST',
        url: `/contacts`,
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useLogoutMutation,
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactMutation,
  useCurrentUserQuery,
  useLoginMutation,
} = usersApi;
