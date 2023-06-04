import {
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { HomeFilterCard } from "../MainStyling/HomepageOverlayStyles";
import {
  FilterDegreeInput,
  FilterFeeRangeInput,
} from "../MainStyling/HomepageTextStyles";
import ClearIcon from "@mui/icons-material/Clear";
import {
  FieldText,
  FieldNumber,
  SelectLanguages,
} from "../../../GeneralConstants/Constants";
import { useForm } from "react-hook-form";
import { useState } from "react";

type MainFilter = {
  nativeLand: string;
  program: string;
  specialities: string;
  priceRange: number;
  languages: string;
};

export const FilterFieldHome = () => {
  const [nativeLand, setNativeLand] = useState("Switzerland");
  const form = useForm<MainFilter>({
    defaultValues: {
      nativeLand: nativeLand,
      program: `Bachelor's degree`,
      specialities: "All specialties",
      priceRange: 10000,
      languages: "All languages",
    },
    mode: "all",
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data: MainFilter) => {
    console.log("Mian Filter: ", data);
  };

  return (
    <form onBlur={handleSubmit(onSubmit)}>
      <HomeFilterCard elevation={6}>
        <TextField
          placeholder=""
          value={nativeLand}
          InputProps={{
            style: {
              border: "2px solid #287DFC",
              borderRadius: "10px",
            },
            endAdornment: (
              <InputAdornment position="start">
                <ClearIcon
                  sx={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setNativeLand("")}
                />
              </InputAdornment>
            ),
          }}
          {...register("nativeLand")}
        />
        <FilterDegreeInput InputProps={FieldText} {...register("program")} />
        <FormControl sx={{ width: "20%" }}>
          <InputLabel id="all-specialties-select">All specialties</InputLabel>
          <Select
            labelId="all-specialties-select"
            id="all-specialties"
            label="Specialties"
            disabled
            {...register("specialities")}
          ></Select>
        </FormControl>

        <FilterFeeRangeInput
          type="number"
          InputProps={FieldNumber}
          {...register("priceRange")}
        />
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
          {...register("languages")}
        >
          {SelectLanguages.map((option) => option.tag)}
        </TextField>
      </HomeFilterCard>
    </form>
  );
};

export default FilterFieldHome;
