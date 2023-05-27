import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import { HarwardCampusImageList } from "./CollegeProfileConstants";
import { HarwardRoomsImageList } from "./CollegeProfileConstants";
import { useState } from "react";

const CollegeImages = () => {
  const [ImagePreview, setImagePreview] = useState("campus");
  const ShowCampusImages = () => {
    setImagePreview('campus')
  }
  const ShowRoomsImages = () => {
    setImagePreview('rooms')
  }
  return (
    <div>
        <Typography variant="h4" fontWeight='bold'>Gallery</Typography>
      <Box
        sx={{
          backgroundColor: "#cbcbcb",
          display: "inline-block",
          borderRadius: "10px",
          margin: "10px 0px",
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="inherit"
          sx={{
            color: "white",
            backgroundColor: "black",
            ":hover": {
              color: "black",
            },
            margin: "5px",
          }}
          onClick={ShowCampusImages}
        >
          Campus
        </Button>
        <Button color="inherit" size="small" onClick={ShowRoomsImages}>
          Rooms
        </Button>
      </Box>
      {ImagePreview === "campus" ? (
        <ImageList
          cols={3}
          gap={15}
          rowHeight={164}
          sx={{ maxHeight: 450 }}
          variant="quilted"
        >
          {HarwardCampusImageList.map((item) => (
            <ImageListItem key={item.url}>
              <img src={`${item.url}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <ImageList
          cols={3}
          gap={15}
          rowHeight={164}
          sx={{ maxHeight: 450 }}
          variant="quilted"
        >
          {HarwardRoomsImageList.map((item) => (
            <ImageListItem key={item.url}>
              <img src={`${item.url}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export default CollegeImages;
