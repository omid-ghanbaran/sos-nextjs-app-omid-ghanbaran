import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "background.default",
        gap: 2,
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: "primary.main",
        }}
      />

      <Typography
        variant="h6"
        sx={{
          color: "text.primary",
          fontWeight: "medium",
        }}
      >
        در حال بارگذاری...
      </Typography>
    </Box>
  );
}

export default LoadingPage;
