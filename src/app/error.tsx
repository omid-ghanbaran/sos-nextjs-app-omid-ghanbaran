"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

interface ErrorPageProps {
  statusCode?: number;
  message?: string;
}

export default function ErrorPage({
  statusCode = 500,
  message = "خطایی رخ داده است!",
}: ErrorPageProps): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
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
          color: "#d32f2f",
          marginBottom: "1rem",
        }}
      >
        {statusCode}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: "1.5rem",
          color: "#333",
          marginBottom: "2rem",
        }}
      >
        {message}
      </Typography>

      <Link href="/" passHref>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d32f2f",
            color: "#fff",
            fontSize: "1rem",
            padding: "0.5rem 2rem",
            "&:hover": {
              backgroundColor: "#b71c1c",
            },
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </Box>
  );
}
