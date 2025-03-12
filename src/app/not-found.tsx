import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

export default function NotFoundPage(): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "#1976d2",
          marginBottom: "1rem",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: "1.5rem",
          color: "#333",
          marginBottom: "2rem",
        }}
      >
        صفحه مورد نظر شما پیدا نشد!
      </Typography>

      <Link href="/" passHref>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            fontSize: "1rem",
            padding: "0.5rem 2rem",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </Box>
  );
}
