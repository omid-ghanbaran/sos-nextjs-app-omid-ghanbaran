import { ArticleCardProps } from "@/types/type";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
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
          <Typography
            sx={{ textAlign: "right", fontSize: "1rem" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {article.title}
          </Typography>
          <Typography
            sx={{
              textAlign: "right",
              fontSize: "1rem",
              color: "#9E9E9E",
              unicodeBidi: "plaintext",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            <AccessTimeIcon fontSize="medium" sx={{ paddingLeft: "5px" }} />
            {article.studyTime}
          </Typography>
          <Typography
            sx={{
              textAlign: "right",
              fontSize: "14px",
              color: "text.secondary",
              unicodeBidi: "plaintext",
            }}
            variant="body2"
          >
            {article.content}
          </Typography>
          <Box>
            <Link href={`/articles/${article.id}`}>
              <Button
                sx={{ width: "125px", borderRadius: "8px" }}
                variant="outlined"
              >
                ادامه
              </Button>
            </Link>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
