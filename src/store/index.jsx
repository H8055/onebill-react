import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { tenantApi } from "./tenantApi";
import { userApi } from "./userApi";
import { rolesApi } from "./rolesApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [tenantApi.reducerPath]: tenantApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tenantApi.middleware,
      userApi.middleware,
      rolesApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
