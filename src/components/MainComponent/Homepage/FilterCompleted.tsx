import { TextField, Autocomplete, InputAdornment, Button } from "@mui/material";
import { HomeFilterCard } from "../MainStyling/HomepageOverlayStyles";
import { FilterFeeRangeInput } from "../MainStyling/HomepageTextStyles";
import { SelectLanguages } from "../../../GeneralConstants/Constants";
import { useForm } from "react-hook-form";
import Country_Name from "../../../GeneralConstants/Countries_Name.json";
import {
  Specialities_Option,
  Programs_Option,
} from "../../../GeneralConstants/General";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import useMoovContext from "../../../Hooks/use-moov-context";

type MainFilter = {
  nativeLand: string;
  program: string;
  specialities: string;
  priceRange: string;
  languages: string;
};

const FieldNumber = {
  startAdornment: <InputAdornment position="start">{`<€`}</InputAdornment>,
  endAdornment: <InputAdornment position="end"></InputAdornment>,
};

const style = { width: "18%", margin: "0px 30px 0px 0px" };

export const FilterCompleted = () => {
  const { globalFormData, setGlobalFormData } = useMoovContext();
  const form = useForm<MainFilter>({
    defaultValues: {
      nativeLand: globalFormData.nativeLand,
      program: globalFormData.program,
      specialities: globalFormData.specialities,
      priceRange: globalFormData.priceRange,
      languages: globalFormData.languages,
    },
    mode: "onSubmit",
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data: MainFilter) => {
    setGlobalFormData(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HomeFilterCard elevation={6}>
        {/* Styling Autocomplete makes options dont work */}
        <Autocomplete
          defaultValue={globalFormData.nativeLand}
          options={Country_Name}
          sx={style}
          renderInput={(params) => (
            <TextField
              {...params}
              type="text"
              placeholder="All Countries"
              variant="outlined"
              {...register("nativeLand")}
            />
          )}
        />
        <Autocomplete
        defaultValue={globalFormData.program}
          options={Programs_Option}
          sx={style}
          renderInput={(params) => (
            <TextField
              {...params}
              type="text"
              placeholder="All Program"
              {...register("program")}
            />
          )}
        />
        <Autocomplete
        defaultValue={globalFormData.specialities}
          options={Specialities_Option}
          sx={style}
          renderInput={(params) => (
            <TextField
              {...params}
              value="doc"
              type="text"
              placeholder="All Specialities"
              {...register("specialities")}
            />
          )}
        />
        <FilterFeeRangeInput
          id="standard-search"
          type="search"
          variant="outlined"
          InputProps={FieldNumber}
          {...register("priceRange")}
          placeholder="Price Range"
        />
        <TextField
          id="select-language"
          select
          defaultValue={globalFormData.languages}
          sx={{ width: "18%" }}
          {...register("languages")}
        >
          {SelectLanguages.map((option) => option.tag)}
        </TextField>
        <Button type="submit">
          <TravelExploreIcon />
        </Button>
      </HomeFilterCard>
    </form>
  );
};

export default FilterCompleted;
