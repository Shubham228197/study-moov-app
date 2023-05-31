import { Button, ImageList, ImageListItem } from "@mui/material";
import { HarwardCampusImageList } from "./CollegeProfileConstant/CollegeProfileConstants";
import { HarwardRoomsImageList } from "./CollegeProfileConstant/CollegeProfileConstants";
import { useState } from "react";
import { BoldText } from '../../GeneralStyling/Texts';
import {
  ToggleContainer
} from '../../GeneralStyling/Overlays';
import { ToggleButton } from '../../GeneralStyling/Buttons';

const CollegeImages = () => {
  const [ImagePreview, setImagePreview] = useState("campus");
  const ShowCampusImages = () => {
    setImagePreview("campus");
  };
  const ShowRoomsImages = () => {
    setImagePreview("rooms");
  };
  return (
    <>
      <BoldText variant="h4">Gallery</BoldText>
      <ToggleContainer>
        <ToggleButton
          size="small"
          variant="contained"
          color="inherit"
          onClick={ShowCampusImages}
        >
          Campus
        </ToggleButton>
        <Button color="inherit" size="small" onClick={ShowRoomsImages}>
          Rooms
        </Button>
      </ToggleContainer>
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
    </>
  );
};

export default CollegeImages;
