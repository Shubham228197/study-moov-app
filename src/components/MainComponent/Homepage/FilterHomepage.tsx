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
import { RouteLink } from "../../../GeneralStyling/Overlays";
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

export const FilterHomepage = () => {
  const {globalFormData, setGlobalFormData} = useMoovContext();
  const form = useForm<MainFilter>({
    defaultValues: {
      nativeLand: "",
      program: ``,
      specialities: "",
      priceRange: "",
      languages: "all-languages",
    },
    mode: "onBlur",
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data: MainFilter) => {
    setGlobalFormData(data)
  };

  const SendFilteredData = () => {
    console.log("Global Context Data ", globalFormData);
  }

  return (
    <form onBlur={handleSubmit(onSubmit)}>
      <HomeFilterCard elevation={6}>
        {/* Styling Autocomplete makes options dont work */}
        <Autocomplete
          options={Country_Names}
          getOptionLabel={(option) => option.countries}
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
          options={Programs_Option}
          getOptionLabel={(option) => option.label}
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
          options={Specialities_Option}
          getOptionLabel={(option) => option.title}
          sx={style}
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
        <RouteLink to="/filtered" style={{display: 'flex'}}>
          <Button onClick={SendFilteredData}>
            <TravelExploreIcon />
          </Button>
        </RouteLink>
      </HomeFilterCard>
    </form>
  );
};

export default FilterHomepage;
