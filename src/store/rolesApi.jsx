import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

if (localStorage.getItem("user") != "undefined") {
  console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  const localData = JSON.parse(localStorage.getItem("user"));
  console.log(JSON.parse(localStorage.getItem("user")));
} else {
  const localData = "";
}

// Define a service using a base URL and expected endpoints
export const rolesApi = createApi({
  reducerPath: "rolesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:10002" }),
  credentials: "include",
  tagTypes: ["roles"],
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => ({
        url: "/api/identity/roles",
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
      }),
      providesTags: ["roles"],
    }),
    createRoles: builder.mutation({
      query: (payload) => ({
        url: "/api/identity/roles",
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
        body: {
          name: payload.name,
          isDefault: true,
          isPublic: true,
        },
      }),
      invalidatesTags: ["roles"],
    }),
    updateRoles: builder.mutation({
      query: (payload) => ({
        url: `/api/identity/roles/${payload.id}`,
        method: "PUT",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
        body: {
          name: payload.name,
          concurrencyStamp: payload.concurrencyStamp,
          isDefault: true,
          isPublic: true,
        },
      }),
      invalidatesTags: ["tenants"],
    }),
    deleteRoles: builder.mutation({
      query: (payload) => ({
        url: `/api/identity/roles/${payload}`,
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
      }),
      invalidatesTags: ["roles"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetRolesQuery,
  useCreateRolesMutation,
  useUpdateRolesMutation,
  useDeleteRolesMutation,
} = rolesApi;
