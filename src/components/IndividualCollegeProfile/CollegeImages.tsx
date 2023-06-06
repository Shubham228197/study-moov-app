import { Button, ImageList, ImageListItem } from "@mui/material";
import { HarwardCampusImageList } from "./CollegeProfileConstant/CollegeProfileConstants";
import { HarwardRoomsImageList } from "./CollegeProfileConstant/CollegeProfileConstants";
import { useState } from "react";
import { BoldText } from "../../GeneralStyling/Texts";
import { ToggleContainer } from "../../GeneralStyling/Overlays";
// import { ToggleButton } from '../../GeneralStyling/Buttons';
import ToggleButton from "@mui/material/ToggleButton";
import { StyledToggleButtonGroupV2 } from "../../GeneralConstants/Constants";

const CollegeImages = () => {
  const [ImagePreview, setImagePreview] = useState("campus");
  const ShowCampusImages = () => {
    setImagePreview("campus");
  };
  const ShowRoomsImages = () => {
    setImagePreview("rooms");
  };
  const [programChoice, setProgramChoice] = useState("bachelor");
  let ButtonHistory = "";

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    ButtonHistory = programChoice;
    setProgramChoice(newAlignment);
    if (newAlignment === null) {
      setProgramChoice(ButtonHistory);
    }
  };
  return (
    <>
      <BoldText variant="h4">Gallery</BoldText>
      <ToggleContainer>
        <StyledToggleButtonGroupV2
          size="small"
          value={programChoice}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="bachelor" aria-label="bachelor-degree">
            <Button color="inherit" onClick={ShowCampusImages}>
              Campus
            </Button>
          </ToggleButton>
          <ToggleButton value="master" aria-label="master-degree">
            <Button color="inherit" onClick={ShowRoomsImages}>
              Rooms
            </Button>
          </ToggleButton>
        </StyledToggleButtonGroupV2>
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
