import { Box, Typography } from "@mui/joy";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import { palette } from "@mui/system";

const Cards = () => {
  return (
    <>
      <Box sx={{ display: "flex", mt: "8px" }}>
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
              "linear-gradient(90deg, rgba(255,136,0,0.5970763305322129) 0%, rgba(255,136,0,0.6138830532212884) 0%)",
            display: "flex",
            // opacity: ".7",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_776.svg?updatedAt=1679042596730"
                alt=""
              />
              <Typography
                level="body2"
                color="black"
                fontWeight="md"
                sx={{ ml: "8px" }}
              >
                Todays energy Cost
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="xl" mt={"5px"} fontSize="xl">
                34 OMR
              </Typography>
              <img
                width={"35px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_777.svg?updatedAt=1679042596754"
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
              " linear-gradient(90deg, rgba(114,111,212,1) 0%, rgba(114,111,212,0.7539390756302521) 0%)",
            display: "flex",
            // opacity: "80%",
            ml: "10px",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_778.svg?updatedAt=1679042596726"
                alt=""
              />
              <Typography
                level="body2"
                color="black"
                fontWeight="md"
                sx={{ ml: "8px" }}
              >
                Yesterdays Energy Cost
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="xl" mt={"5px"} fontSize="xl">
                421 OMR
              </Typography>
              <img
                width={"35px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_779.svg?updatedAt=1679042596749"
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
              "linear-gradient(90deg, rgba(248,205,75,0.6671043417366946) 0%, rgba(248,205,75,0.7343312324929971) 0%)",
            display: "flex",
            // opacity: "80%",
            ml: "10px",
          }}
        >
          <CardOverflow></CardOverflow>
          <CardContent sx={{ px: 1 }}>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_780.svg?updatedAt=1679042596736"
                alt=""
              />
              <Typography
                level="body2"
                color="black"
                fontWeight="md"
                sx={{ ml: "8px" }}
              >
                Forecast Energy Cost
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="xl" mt={"5px"} fontSize="xl">
                100 OMR
              </Typography>
              <img
                width={"35px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_781.svg?updatedAt=1679042596736"
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

export default Cards;
