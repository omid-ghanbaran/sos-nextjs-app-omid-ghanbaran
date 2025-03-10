import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function HomePage() {
  return (
    <Container maxWidth="md" className="min-h-screen">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Next.js App!
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple page using Material-UI and TypeScript.
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}
