import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/joy/Button";
import { UserManager } from "oidc-client-ts";
import { useAuth } from "oidc-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../styles/appbar.css";
import oidcConfig from "../App";

const appbar = () => {
  const [data, setdata] = useState();
  const [role, setcheckrole] = useState();
  const [username, setusername] = useState();
  console.log(data);
  useEffect(() => {
    // console.log(localData);
    axios({
      url: "https://localhost:10003/api/abp/application-configuration?IncludeLocalizationResources=false",
      method: "GET",
      headers: {
        Authorization: "Bearer " + localData.access_token,
      },
      data: {},
    })
      .then(function (response) {
        console.log(response.data.currentUser.name);
        setdata(response.data.currentUser.tenantId);
        setcheckrole(response.data.currentUser.roles[0]);
        setusername(response.data.currentUser.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const auth = useAuth();
  const navigate = useNavigate();

  // const oidcConfig = {
  //   issuer: "https://localhost:10001/",
  //   client_id: "Onebill_App",
  //   redirectUri: "https://localhost:4200",
  //   response_type: "code",
  //   scope: "AdministrationService IdentityService BillingService TenantService",
  //   requireHttps: true,
  //   authority: "https://localhost:10001/",
  // };

  const userManager = new UserManager({
    ...oidcConfig,
  });

  // if (localStorage.getItem("user") != null) {
  //   console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  //   var localData = JSON.parse(localStorage.getItem("user"));
  // } else {
  //   var localData = "";
  // }
  const localData = localStorage.hasOwnProperty("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

  // var localData = JSON.parse(localStorage.getItem("user"));

  const handleLogin = () => {
    console.log("button");
    console.log(localData);
    if (!localData) {
      axios({
        url: "https://localhost:10001/",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
        data: {},
      })
        .then(function (response) {
          console.log(response);
          console.log(response.request.responseURL);
          console.log(response);
          window.location.href = response.request.responseURL + "Account/Login";
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Already Logged In!");
    }
  };

  const handleLogOut = () => {
    // let url = "https://localhost:4200/";
    userManager.signoutRedirect();
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__title navbar__item">One Bill</div>
        {/* <p>Hello {auth.profile.name}!</p> */}
        <Button
          style={{ color: "white", background: "none" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        {!data ? (
          <Button
            style={{ color: "white", background: "none" }}
            onClick={() => {
              navigate("/tenants");
            }}
          >
            Tenants
          </Button>
        ) : (
          ""
        )}
        {/* <div className="navbar__item">Tenant</div> */}
        {role ? (
          <Button
            style={{ color: "white", background: "none" }}
            onClick={() => {
              navigate("/users");
            }}
          >
            Users
          </Button>
        ) : (
          ""
        )}
        {role ? (
          <Button
            style={{ color: "white", background: "none" }}
            onClick={() => {
              navigate("/roles");
            }}
          >
            Roles
          </Button>
        ) : (
          ""
        )}
        <Button
          variant="solid"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            handleLogOut();
          }}
        >
          Logout
        </Button>
        {<p style={{ padding: "5px" }}>{username && username}</p>}
      </header>
    </>
  );
};

export default appbar;
