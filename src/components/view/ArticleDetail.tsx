import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { Article } from "@/types/type";

const ArticleDetail: React.FC<Article> = ({
  title,
  content,
  imageBlog,
  studyTime,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "60vw",
        borderRadius: 2,
        boxShadow: 3,
        margin: "0 auto",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`/assets/image/${imageBlog}`}
        alt={title}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, textAlign: "center", unicodeBidi: "plaintext" }}
        >
          {content}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip
            label={`⏳ ${studyTime}`}
            size="small"
            sx={{
              backgroundColor: "#e0f7fa",
              color: "#00796b",
              fontWeight: "bold",
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ArticleDetail;
