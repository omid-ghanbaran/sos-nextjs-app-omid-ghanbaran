"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";

interface Props {
  window?: () => Window;
}

export default function Header(props: Props) {
  const drawerWidth = 440;
  const navItems = [
    { title: "سوال های متداول", to: "" },
    { title: "شعبه های ما", to: "" },
    { title: "مراکز خدمات درمانی", to: "" },
    { title: "ToDo List", to: "/todo-list" },
    { title: "صفحه اصلی", to: "/" },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/assets/logo/sos-logo.svg"
          alt="Logo"
          width={200}
          height={50}
          style={{ margin: "16px 0" }}
        />
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.title}
            sx={{ display: "flex", justifyContent: "center", paddingLeft: "0" }}
          >
            <Link href={item.to}>{item.title}</Link>
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
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid
            size={{ xs: 6, sm: 2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
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
              color: "black",
            }}
          >
            {navItems.map((item) => (
              <Link key={item.title} href={item.to}>
                {item.title}
              </Link>
            ))}
          </Grid>
          <Grid
            size={{ xs: 4, sm: 2 }}
            sx={{ display: "flex" }}
            justifyContent="center"
          >
            <Image
              src="/assets/logo/sos-logo.svg"
              alt="Logo"
              width={200}
              height={50}
              style={{ margin: "16px 0" }}
            />
          </Grid>
          <Grid
            size={{ xs: 2 }}
            sx={{ display: { xs: "flex", sm: "none" } }}
            justifyContent="center"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize="large" color="primary" />
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
