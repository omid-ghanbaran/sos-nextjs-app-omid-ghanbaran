import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface ArticleListProps {
  children: ReactNode;
}

function ArticleList({ children }: ArticleListProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
        gap: 1,
        placeItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default ArticleList;
