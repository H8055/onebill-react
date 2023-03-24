import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

// Icons import
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import LegendToggleRoundedIcon from "@mui/icons-material/LegendToggleRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import PolylineRoundedIcon from "@mui/icons-material/PolylineRounded";

export default function Sidebar() {
  return (
    <List size="sm" sx={{ "--ListItem-radius": "8px", mt: "10px" }}>
      <ListItem nested>
        <ListSubheader>
          Browse
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ "--IconButton-size": "24px", ml: "auto" }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            "& .JoyListItemButton-root": { p: "8px" },
          }}
        >
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton variant="soft" color="primary">
              <ListItemDecorator sx={{ color: "inherit" }}>
                <GridViewRoundedIcon fontSize="small" />
                {/* <InboxRoundedIcon fontSize="small" /> */}
                {/* <i class="fi fi-sr-dashboard"></i> */}
                {/* <img
                  src="https://ik.imagekit.io/hr8bo79qm/hrms/dashboard.svg?updatedAt=1678787482266"
                  alt=""
                /> */}
              </ListItemDecorator>
              <ListItemContent>Dashboard</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <OutboxRoundedIcon fontSize="small" /> */}
                <GroupsRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>User Management</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                <OutboxRoundedIcon fontSize="small" />
                {/* <GroupsRoundedIcon fontSize="small" /> */}
              </ListItemDecorator>
              <ListItemContent>Tenants</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <DraftsRoundedIcon fontSize="small" /> */}
                <PolylineRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Occupant List</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <AssistantPhotoRoundedIcon fontSize="small" /> */}
                <SpeedRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Meter Liveliness</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <DeleteRoundedIcon fontSize="small" /> */}
                <LegendToggleRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Meter List</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "inherit" }}>
                {/* <InboxRoundedIcon fontSize="small" /> */}
                <ReceiptLongRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Billing</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <OutboxRoundedIcon fontSize="small" /> */}
                <PaymentRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Payments</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <DraftsRoundedIcon fontSize="small" /> */}
                <ReceiptRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Reports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <AssistantPhotoRoundedIcon fontSize="small" /> */}
                <NotificationsRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Notification</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <DeleteRoundedIcon fontSize="small" /> */}
                <SettingsRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <DeleteRoundedIcon fontSize="small" /> */}
                <SupportAgentRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Support</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: "10px" }}>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                {/* <DeleteRoundedIcon fontSize="small" /> */}
                <Diversity3RoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Group Management</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
      {/* <ListItem nested sx={{ mt: 2 }}> */}
      {/* <ListSubheader>
          Tags
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ "--IconButton-size": "24px", ml: "auto" }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader> */}
      {/* <List
          aria-labelledby="nav-list-tags"
          size="sm"
          sx={{
            "--List-decoratorSize": "32px",
            "& .JoyListItemButton-root": { p: "8px" },
          }}
        > */}
      {/* <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "primary.300",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Personal</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "danger.300",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Work</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "warning.200",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Travels</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "99px",
                    bgcolor: "success.300",
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>Concert tickets</ListItemContent>
            </ListItemButton>
          </ListItem> */}
      {/* </List> */}
      {/* </ListItem> */}
    </List>
  );
}
