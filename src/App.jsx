import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Routes from "./routes";
import { AuthProvider } from "oidc-react";
import { useEffect } from "react";

const App = () => {
  const oidcConfig = {
    onSignIn: async (user) => {
      // alert("You just signed in, congratz! Check out the console!");
      console.log(user);
      console.log("hi");
      localStorage.setItem("user", JSON.stringify(user));
      window.location.hash = "";
    },
    // issuer: "https://localhost:10001/",
    redirectUri: "https://localhost:4200",
    clientId: "Onebill_App",
    requireHttps: true,
    responseType: "code",
    scope: "AdministrationService IdentityService BillingService TenantService",
    authority: "https://localhost:10001/",
    post_logout_redirect_uri: "https://localhost:4200",
    // token_endpoint: "https://localhost:10001/connect/token",
    // userinfo_endpoint: "https://localhost:10001/connect/userinfo",
    loadUserInfo: false,
    // signoutRedirect: "https://localhost:10001/Account/Login",
  };
  useEffect(() => {
    oidcConfig;
  }, []);
  return (
    <>
      <AuthProvider {...oidcConfig}>
        <CssVarsProvider>
          <Routes />
        </CssVarsProvider>
      </AuthProvider>
    </>
  );
};

export default App;
