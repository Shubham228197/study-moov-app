import { TextField, Autocomplete, InputAdornment, Button } from "@mui/material";
import { HomeFilterCard } from "../MainStyling/HomepageOverlayStyles";
import { FilterFeeRangeInput } from "../MainStyling/HomepageTextStyles";
import { SelectLanguages } from "../../../GeneralConstants/Constants";
import { useForm } from "react-hook-form";
import Country_Names from "../../../GeneralConstants/Countries_Names.json";
import {
  Specialities_Option,
  Programs_Option,
} from "../../../GeneralConstants/Constants";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

type MainFilter = {
  nativeLand: string;
  program: string;
  specialities: string;
  priceRange: string;
  languages: string;
};

export const FilterHomepage = () => {
  const form = useForm<MainFilter>({
    defaultValues: {
      nativeLand: "",
      program: ``,
      specialities: "",
      priceRange: "",
      languages: "",
    },
    mode: "onSubmit",
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data: MainFilter) => {
    console.log("Mian Filter: ", data);
  };

  const FieldNumber = {
    startAdornment: <InputAdornment position="start">{`<€`}</InputAdornment>,
    endAdornment: <InputAdornment position="end"></InputAdornment>,
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HomeFilterCard elevation={6}>
        <Autocomplete
          options={Country_Names}
          getOptionLabel={(option) => option.countries}
          sx={{ width: "18%", margin: "0px 30px 0px 0px" }}
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
          options={Programs_Option}
          getOptionLabel={(option) => option.label}
          sx={{ width: "18%", margin: "0px 30px 0px 0px" }}
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
          options={Specialities_Option}
          getOptionLabel={(option) => option.title}
          sx={{ width: "18%", margin: "0px 30px 0px 0px" }}
          renderInput={(params) => (
            <TextField
              {...params}
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
          defaultValue="all-languages"
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

export default FilterHomepage;
