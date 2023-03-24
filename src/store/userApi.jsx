import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

if (localStorage.getItem("user") != "undefined") {
  console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  const localData = JSON.parse(localStorage.getItem("user"));
  console.log(JSON.parse(localStorage.getItem("user")));
} else {
  const localData = "";
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:10002" }),
  credentials: "include",
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/api/identity/users",
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
      }),
      providesTags: ["user"],
    }),
    createUser: builder.mutation({
      query: (payload) => ({
        url: "/api/identity/users",
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
        body: {
          userName: payload.username,
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          isActive: true,
          lockoutEnabled: true,
          // roleNames: payload.roles,
          password: payload.pwd,
        },
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `/api/identity/users/${payload.id}`,
        method: "PUT",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
        body: {
          userName: payload.userName,
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          isActive: true,
          lockoutEnabled: true,
          password: payload.password,
          concurrencyStamp: payload.concurrencyStamp,
        },
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (payload) => ({
        url: `/api/identity/users/${payload}`,
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  // useCreateTenantMutation,
  // useUpdateTenantMutation,
  // useDeleteTenantMutation,
} = userApi;
