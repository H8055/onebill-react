import { Box, Typography } from "@mui/joy";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import { palette } from "@mui/system";

const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* <Typography level="h2" fontSize="xl" fontWeight="bold">
          Dashboard
        </Typography> */}
        <Card
          orientation="horizontal"
          variant="outlined"
          sx={{
            width: 200,
            // bgcolor: "#1C5FC4",
            background:
              "linear-gradient(90deg, rgba(28,95,196,0.5522584033613445) 0%, rgba(28,95,196,0.5550595238095238) 0%)",
            display: "flex",
            // opacity: ".7",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_768.svg?updatedAt=1678963000658"
                alt=""
              />
              <Typography
                level="body2"
                color="black"
                fontWeight="md"
                sx={{ ml: "8px" }}
              >
                Today's Cons.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="xl" mt={"5px"} fontSize="xl">
                35 w
              </Typography>
              <img
                width={"35px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_770.svg?updatedAt=1678963956670"
                alt=""
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          orientation="horizontal"
          variant="outlined"
          sx={{
            width: 200,
            // bgcolor: "#ef5350",
            background:
              "linear-gradient(90deg, rgba(254,78,97,1) 0%, rgba(254,78,97,0.5606617647058824) 0%)",
            display: "flex",
            // opacity: "80%",
            ml: "10px",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_771.svg?updatedAt=1678965798081"
                alt=""
              />
              <Typography
                level="body2"
                color="black"
                fontWeight="md"
                sx={{ ml: "8px" }}
              >
                Yesterday's Cons.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="xl" mt={"5px"} fontSize="xl">
                421 w
              </Typography>
              <img
                width={"35px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_772.svg?updatedAt=1678965797919"
                alt=""
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          orientation="horizontal"
          variant="outlined"
          sx={{
            width: 200,
            // bgcolor: "#ef5350",
            background:
              "linear-gradient(90deg, rgba(106,220,127,1) 0%, rgba(106,220,127,0.6222864145658263) 0%)",
            display: "flex",
            // opacity: "80%",
            ml: "10px",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_773.svg?updatedAt=1678965798086"
                alt=""
              />
              <Typography
                level="body2"
                color="black"
                fontWeight="md"
                sx={{ ml: "8px" }}
              >
                Forecast Cons.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="xl" mt={"5px"} fontSize="xl">
                1296 w
              </Typography>
              <img
                width={"35px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_775.svg?updatedAt=1678965798936"
                alt=""
              />
            </Box>
          </CardContent>
        </Card>
        {/* <Card
          orientation="horizontal"
          variant="outlined"
          sx={{
            width: 200,
            background:
              "linear-gradient(90deg, rgba(28,95,196,1) 0%, rgba(28,95,196,0.9444152661064426) 0%)",
            display: "flex",
            ml: "10px",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                level="body2"
                color="black"
                fontWeight="xl"
                fontSize="20px"
                sx={{ ml: "8px" }}
              >
                86553.96 OMR
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="md" mt={"5px"} fontSize="">
                Monthly Collection
              </Typography>
            </Box>
          </CardContent>
        </Card> */}
      </Box>
    </>
  );
};

export default Dashboard;
