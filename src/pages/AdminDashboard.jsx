import { Box, Typography } from "@mui/joy";
import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
// card import
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { display } from "@mui/system";
import Donut from "../components/Gauge";

// icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PrintIcon from "@mui/icons-material/Print";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LineChart from "../components/LineChart";

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.vars.palette.text.tertiary,
}));

const AdminDashboard = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography level="h5">Admin Dashboard</Typography>
          <Button startDecorator={<Add />}>Onboard Client</Button>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            // justifyContent: "space-around",
            alignItems: "center",
            // padding: "10px",
            mt: "10px",
          }}
        >
          <Card
            // variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              height: 149,
              gap: 2,
              marginRight: "15px",
              //   "&:hover": {
              //     boxShadow: "md",
              //     borderColor: "neutral.outlinedHoverBorder",
              //   },
            }}
          >
            <Box sx={{ display: "flex", ml: "20px" }}>
              <img
                width={"45px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                alt=""
              />
              <Box sx={{ ml: "10px", mt: "30px" }}>
                <Typography
                  level="h2"
                  fontSize="xl"
                  // id="card-description"
                  fontWeight="bold"
                  // mb={0.5}
                >
                  123
                </Typography>
                <Typography>Total Clients</Typography>
              </Box>
            </Box>
          </Card>
          <Card
            // variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              height: 149,
              gap: 2,
              marginRight: "15px",
              //   "&:hover": {
              //     boxShadow: "md",
              //     borderColor: "neutral.outlinedHoverBorder",
              //   },
            }}
          >
            <Box sx={{ display: "flex", ml: "20px" }}>
              <img
                width={"45px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                alt=""
              />
              <Box sx={{ ml: "10px", mt: "30px" }}>
                <Typography
                  level="h2"
                  fontSize="xl"
                  // id="card-description"
                  fontWeight="bold"
                  // mb={0.5}
                >
                  123
                </Typography>
                <Typography>Total Clients</Typography>
              </Box>
            </Box>
          </Card>
          <Card
            // variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              height: 149,
              gap: 2,
              marginRight: "15px",
              //   "&:hover": {
              //     boxShadow: "md",
              //     borderColor: "neutral.outlinedHoverBorder",
              //   },
            }}
          >
            <Box sx={{ display: "flex", ml: "20px" }}>
              <img
                width={"45px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                alt=""
              />
              <Box sx={{ ml: "10px", mt: "30px" }}>
                <Typography
                  level="h2"
                  fontSize="xl"
                  // id="card-description"
                  fontWeight="bold"
                  // mb={0.5}
                >
                  123
                </Typography>
                <Typography>Total Clients</Typography>
              </Box>
            </Box>
          </Card>
          <Card
            // variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              height: 149,
              gap: 2,
              marginRight: "15px",
              //   "&:hover": {
              //     boxShadow: "md",
              //     borderColor: "neutral.outlinedHoverBorder",
              //   },
            }}
          >
            <Box sx={{ display: "flex", ml: "20px" }}>
              <img
                width={"45px"}
                src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                alt=""
              />
              <Box sx={{ ml: "10px", mt: "30px" }}>
                <Typography
                  level="h2"
                  fontSize="xl"
                  // id="card-description"
                  fontWeight="bold"
                  // mb={0.5}
                >
                  123
                </Typography>
                <Typography>Total Clients</Typography>
              </Box>
            </Box>
          </Card>
        </Box> */}
        {/* <Box>
          <Box></Box>
          <Box></Box>
        </Box> */}
        <Grid container spacing={2} sx={{ flexGrow: 1, mt: 1 }}>
          <Grid xs={3}>
            <Card
              // variant="outlined"
              orientation="horizontal"
              sx={{
                width: "100%",
                height: 149,
                gap: 2,
                marginRight: "15px",
                //   "&:hover": {
                //     boxShadow: "md",
                //     borderColor: "neutral.outlinedHoverBorder",
                //   },
              }}
            >
              <Box sx={{ display: "flex", ml: "20px" }}>
                <img
                  width={"45px"}
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                  alt=""
                />
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Typography
                    level="h2"
                    fontSize="xl"
                    // id="card-description"
                    fontWeight="bold"
                    // mb={0.5}
                  >
                    123
                  </Typography>
                  <Typography>Total Clients</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card
              // variant="outlined"
              orientation="horizontal"
              sx={{
                width: "100%",
                height: 149,
                gap: 2,
                marginRight: "15px",
                //   "&:hover": {
                //     boxShadow: "md",
                //     borderColor: "neutral.outlinedHoverBorder",
                //   },
              }}
            >
              <Box sx={{ display: "flex", ml: "20px" }}>
                <img
                  width={"45px"}
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                  alt=""
                />
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Typography
                    level="h2"
                    fontSize="xl"
                    // id="card-description"
                    fontWeight="bold"
                    // mb={0.5}
                  >
                    123
                  </Typography>
                  <Typography>Total Clients</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card
              // variant="outlined"
              orientation="horizontal"
              sx={{
                width: "100%",
                height: 149,
                gap: 2,
                marginRight: "15px",
                //   "&:hover": {
                //     boxShadow: "md",
                //     borderColor: "neutral.outlinedHoverBorder",
                //   },
              }}
            >
              <Box sx={{ display: "flex", ml: "20px" }}>
                <img
                  width={"45px"}
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                  alt=""
                />
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Typography
                    level="h2"
                    fontSize="xl"
                    // id="card-description"
                    fontWeight="bold"
                    // mb={0.5}
                  >
                    123
                  </Typography>
                  <Typography>Total Clients</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card
              // variant="outlined"
              orientation="horizontal"
              sx={{
                width: "100%",
                height: 149,
                gap: 2,
                marginRight: "15px",
                //   "&:hover": {
                //     boxShadow: "md",
                //     borderColor: "neutral.outlinedHoverBorder",
                //   },
              }}
            >
              <Box sx={{ display: "flex", ml: "20px" }}>
                <img
                  width={"45px"}
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                  alt=""
                />
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Typography
                    level="h2"
                    fontSize="xl"
                    // id="card-description"
                    fontWeight="bold"
                    // mb={0.5}
                  >
                    123
                  </Typography>
                  <Typography>Total Clients</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              // variant="outlined"
              orientation="horizontal"
              sx={{
                width: "100%",
                height: 149,
                gap: 2,
                marginRight: "15px",
                //   "&:hover": {
                //     boxShadow: "md",
                //     borderColor: "neutral.outlinedHoverBorder",
                //   },
              }}
            >
              <Box sx={{ display: "flex", ml: "20px" }}>
                <img
                  width={"45px"}
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                  alt=""
                />
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Typography
                    level="h2"
                    fontSize="xl"
                    // id="card-description"
                    fontWeight="bold"
                    // mb={0.5}
                  >
                    123
                  </Typography>
                  <Typography>Total Clients</Typography>
                </Box>
              </Box>
            </Card>
            <Card
              // variant="outlined"
              orientation="horizontal"
              sx={{
                width: "100%",
                height: 149,
                gap: 2,
                mt: "10px",
                // marginRight: "15px",
                //   "&:hover": {
                //     boxShadow: "md",
                //     borderColor: "neutral.outlinedHoverBorder",
                //   },
              }}
            >
              <Box sx={{ display: "flex", ml: "20px" }}>
                <img
                  width={"45px"}
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/Group_766.svg?updatedAt=1679297369766"
                  alt=""
                />
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Typography
                    level="h2"
                    fontSize="xl"
                    // id="card-description"
                    fontWeight="bold"
                    // mb={0.5}
                  >
                    123
                  </Typography>
                  <Typography>Total Clients</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card
              // variant="outlined"
              sx={{
                Width: "100%",
                height: 305,
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <div
                className="billAmountcont"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex" }}>
                  <CalendarMonthIcon />
                  <typography fontWeight="bold">Bill Amount</typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    // border: "1px solid red",
                    //   justifyContent: "center",
                    alignItems: "center",
                    p: "8px",
                    borderRadius: "5px",
                    background:
                      "linear-gradient(90deg, rgba(36,110,232,1) 0%, rgba(36,110,232,0.7147233893557423) 0%)",
                  }}
                >
                  <PrintIcon />
                </Box>
              </div>
              <Donut />
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card
              // variant="outlined"
              sx={{
                minWidth: "100%",
                height: 305,
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <div
                className="billAmountcont"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex" }}>
                  <ShuffleIcon />
                  <typography>Clients</typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    // border: "1px solid red",
                    //   justifyContent: "center",
                    alignItems: "center",
                    p: "8px",
                    borderRadius: "5px",
                    background:
                      "linear-gradient(90deg, rgba(36,110,232,1) 0%, rgba(36,110,232,0.7147233893557423) 0%)",
                  }}
                >
                  <PrintIcon />
                </Box>
              </div>
              <LineChart />
            </Card>
            {/* <Item>
              <LineChart />
            </Item> */}
          </Grid>
          <Grid xs={6}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={2}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
      {/* <BasicTable /> */}
    </>
  );
};

export default AdminDashboard;
