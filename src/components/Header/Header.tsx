"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

interface Props {
  window?: () => Window;
}

export default function Header(props: Props) {
  const drawerWidth = 440;
  const navItems = [
    "سوال های متداول",
    "شعبه های ما",
    "مراکز خدمات درمانی",
    "ToDo List",
    "صفحه اصلی",
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image
        src="/assets/logo/sos-logo.svg"
        alt="Logo"
        width={200}
        height={50}
        style={{ margin: "16px 0" }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          height: "72px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              size: { xs: "6", sm: "2" },
            }}
          >
            <Button variant="contained">ورود و فعالسازی</Button>
          </Grid>
          <Grid
            size={8}
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <Link underline="none" key={item} href="#">
                {item}
              </Link>
            ))}
          </Grid>
          <Grid sx={{ size: { xs: "4", sm: "2" } }} justifyContent="center">
            <Image
              src="/assets/logo/sos-logo.svg"
              alt="Logo"
              width={200}
              height={50}
              style={{ margin: "16px 0" }}
            />
          </Grid>
          <Grid
            sx={{ mr: 2, display: { sm: "none" }, size: { xs: "2" } }}
            justifyContent="center"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
