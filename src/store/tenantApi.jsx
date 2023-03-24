import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

if (localStorage.getItem("user") != "undefined") {
  console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  const localData = JSON.parse(localStorage.getItem("user"));
  console.log(JSON.parse(localStorage.getItem("user")));
} else {
  const localData = "";
}

// Define a service using a base URL and expected endpoints
export const tenantApi = createApi({
  reducerPath: "tenantApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:10004" }),
  credentials: "include",
  tagTypes: ["tenants"],
  endpoints: (builder) => ({
    getTenant: builder.query({
      query: () => ({
        url: "/api/multi-tenancy/tenants",
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
      }),
      providesTags: ["tenants"],
    }),
    createTenant: builder.mutation({
      query: (payload) => ({
        url: "/api/multi-tenancy/tenants",
        method: "POST",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
        body: {
          name: payload.name,
          adminEmailAddress: payload.email,
          adminPassword: payload.pwd,
        },
      }),
      invalidatesTags: ["tenants"],
    }),
    updateTenant: builder.mutation({
      query: (payload) => ({
        url: `/api/multi-tenancy/tenants/${payload.id}`,
        method: "PUT",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
        body: {
          name: payload.name,
          concurrencyStamp: payload.concurrencyStamp,
        },
      }),
      invalidatesTags: ["tenants"],
    }),
    deleteTenant: builder.mutation({
      query: (payload) => ({
        url: `/api/multi-tenancy/tenants/${payload}`,
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
        // Attaching the form data
      }),
      invalidatesTags: ["tenants"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTenantQuery,
  useCreateTenantMutation,
  useUpdateTenantMutation,
  useDeleteTenantMutation,
} = tenantApi;
