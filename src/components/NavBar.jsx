// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import axios from "axios";
// import { UserManager } from "oidc-client-ts";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
// } from "react-router-dom";

// export default function ButtonAppBar() {
//   const navigate = useNavigate();
//   const oidcConfig = {
//     issuer: "https://localhost:10001/",
//     client_id: "Onebill_App",
//     redirectUri: "https://localhost:4200",
//     response_type: "code",
//     scope: "AdministrationService IdentityService BillingService TenantService",
//     requireHttps: true,
//     authority: "https://localhost:10001/",
//   };

//   const userManager = new UserManager({
//     ...oidcConfig,
//   });

//   if (localStorage.getItem("user") != "undefined") {
//     console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//     var localData = JSON.parse(localStorage.getItem("user"));
//   } else {
//     var localData = "";
//   }

//   // var localData = JSON.parse(localStorage.getItem("user"));

//   const handleLogin = () => {
//     console.log("button");
//     console.log(localData);
//     if (!localData) {
//       axios({
//         url: "https://localhost:10001/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3DOnebill_App%26redirect_uri%3Dhttps%253A%252F%252Flocalhost%253A4200%26response_type%3Dcode%26scope%3DAdministrationService%2520IdentityService%2520BillingService%2520TenantService%26state%3D97d7d63819eb42ecab60d80bb1d21817%26code_challenge%3D8CzfGZncr7rlY7GRMX5I-umFCyZWXmjY2acSvDfSA5Y%26code_challenge_method%3DS256%26response_mode%3Dquery",
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         withCredentials: true,
//         data: {},
//       })
//         .then(function (response) {
//           console.log(response.request.responseURL);
//           console.log(response);
//           window.location.href = response.request.responseURL + "Account/Login"; //Will take you to Google.
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {
//       alert("Already Logged In!");
//     }
//   };

//   const handleLogOut = () => {
//     let url = "https://localhost:4200/";
//     userManager.signoutRedirect();
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             One Bill
//           </Typography>
//           <Button
//             color="inherit"
//             // onClick={() => {
//             //   navigate("/");
//             // }}
//           >
//             Tenants
//           </Button>
//           <Button
//             color="inherit"
//             // onClick={() => {
//             //   navigate("/users");
//             // }}
//           >
//             Users
//           </Button>
//           <Button color="inherit">Roles</Button>
//           <Button
//             color="inherit"
//             onClick={() => {
//               handleLogin();
//             }}
//           >
//             Login
//           </Button>
//           <Button color="inherit" onClick={handleLogOut}>
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
