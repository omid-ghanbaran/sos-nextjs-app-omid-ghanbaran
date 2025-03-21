import type { Metadata } from "next";
import "./globals.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container maxWidth="xl" className="min-h-screen mt-24 mb-24">
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
