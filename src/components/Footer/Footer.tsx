"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} My Next.js App
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary">
        Built with{" "}
        <Link color="inherit" href="https://nextjs.org/">
          Next.js
        </Link>{" "}
        and{" "}
        <Link color="inherit" href="https://mui.com/">
          Material-UI
        </Link>
      </Typography>
    </Box>
  );
}
