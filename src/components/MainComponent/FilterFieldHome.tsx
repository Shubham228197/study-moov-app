import {
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import {
  HomeFilterCard,
} from "../../styling/main/HomepageOverlayStyles";
import {
  FilterDegreeInput,
  FilterFeeRangeInput,
} from "../../styling/main/HomepageTextStyles";
import {
  FieldText,
  FieldNumber,
  SelectLanguages,
} from "../../constants/constants";

export const FilterFieldHome = () => {
  return (
    <div>
      <HomeFilterCard elevation={6}>
        <TextField placeholder="" value="Switzerland" InputProps={FieldText} />
        <FilterDegreeInput value={`Bachelor's degree`} InputProps={FieldText} />
        <FormControl sx={{ width: "20%" }}>
          <InputLabel id="all-specialties-select">All specialties</InputLabel>
          <Select
            labelId="all-specialties-select"
            id="all-specialties"
            label="Specialties"
            disabled
          ></Select>
        </FormControl>

        <FilterFeeRangeInput value={`10,000`} InputProps={FieldNumber} />

        <TextField
          id="select-language"
          select
          defaultValue="all-languages"
          sx={{ width: "15%" }}
          InputProps={{
            style: {
              border: "2px solid black",
              borderRadius: "10px",
            },
          }}
        >
          {SelectLanguages.map((option) => (
            option.tag
          ))}
        </TextField>
      </HomeFilterCard>
    </div>
  );
};

export default FilterFieldHome;
