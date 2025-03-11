import { ArticleCardProps } from "@/types/type";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 348,
        padding: "1rem",
        borderRadius: "1rem",
        border: "1px solid #0F5098",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: "1rem" }}
          component="img"
          height="140"
          image={`/assets/image/${article.imageBlog}`}
          alt={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {article.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
