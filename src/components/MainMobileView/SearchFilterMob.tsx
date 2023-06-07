import { MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputs } from "./MobileStyling/MobileStylingText";
import { MobSearchContainer } from "./MobileStyling/MobileStylingOverlays";

type CollegeFilter = {
  countries: string;
  program: string;
  speciality: string;
};
const SearchFilterMob = () => {
  const form = useForm<CollegeFilter>({
    defaultValues: {
      countries: "All Countries",
      program: "All Programs",
      speciality: "All Speciality",
    },
    mode: "onChange",
  });
  const onSubmit = (data: CollegeFilter) => {
    console.log("Serach Filter: ", data);
  };
  const { register, handleSubmit } = form;
  return (
    <MobSearchContainer cols={3}>
      <form
        onClick={handleSubmit(onSubmit)}
        noValidate
        style={{ display: "flex" }}
      >
        <Stack padding={1}>
          <FormInputs
            size="small"
            select
            defaultValue="all-countries"
            {...register("countries")}
          >
            <MenuItem value="all-countries">All Countries</MenuItem>
            <MenuItem value="russia">Russia</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="spain">Spain</MenuItem>
            <MenuItem value="england">England</MenuItem>
          </FormInputs>
        </Stack>
        <Stack padding={1}>
          <FormInputs
            size="small"
            select
            defaultValue="all-program"
            {...register("program")}
          >
            <MenuItem value="all-program">All Programs</MenuItem>
            <MenuItem value="bachelors">Bachelor's</MenuItem>
            <MenuItem value="masters">Master's</MenuItem>
            <MenuItem value="under18">Under 18</MenuItem>
          </FormInputs>
        </Stack>
        <Stack padding={1}>
          <FormInputs
            size="small"
            select
            defaultValue="all-speciality"
            {...register("speciality")}
          >
            <MenuItem value="all-speciality">All Speciality</MenuItem>
            <MenuItem value="cs">Computer Science</MenuItem>
            <MenuItem value="maths">Mathametics</MenuItem>
            <MenuItem value="biology">Biology</MenuItem>
            <MenuItem value="chemistry">Chemistry</MenuItem>
          </FormInputs>
        </Stack>
      </form>
    </MobSearchContainer>
  );
};

export default SearchFilterMob;
