import { ImageList, MenuItem, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

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
    <ImageList
      sx={{ width: 380, position: "-webkit-sticky" }}
      cols={3}
      rowHeight={164}
    >
      <form
        onClick={handleSubmit(onSubmit)}
        noValidate
        style={{ display: "flex" }}
      >
        <div style={{ padding: "5px" }}>
          <TextField
            size="small"
            select
            defaultValue="all-countries"
            sx={{ border: "1px solid black", borderRadius: "10px" }}
            {...register("countries")}
          >
            <MenuItem value="all-countries">All Countries</MenuItem>
            <MenuItem value="russia">Russia</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="spain">Spain</MenuItem>
            <MenuItem value="england">England</MenuItem>
          </TextField>
        </div>
        <div style={{ padding: "5px" }}>
          <TextField
            size="small"
            select
            defaultValue="all-program"
            sx={{ border: "1px solid black", borderRadius: "10px" }}
            {...register("program")}
          >
            <MenuItem value="all-program">All Programs</MenuItem>
            <MenuItem value="bachelors">Bachelor's</MenuItem>
            <MenuItem value="masters">Master's</MenuItem>
            <MenuItem value="under18">Under 18</MenuItem>
          </TextField>
        </div>
        <div style={{ padding: "5px" }}>
          <TextField
            size="small"
            select
            defaultValue="all-speciality"
            sx={{ border: "1px solid black", borderRadius: "10px" }}
            {...register("speciality")}
          >
            <MenuItem value="all-speciality">All Speciality</MenuItem>
            <MenuItem value="cs">Computer Science</MenuItem>
            <MenuItem value="maths">Mathametics</MenuItem>
            <MenuItem value="biology">Biology</MenuItem>
            <MenuItem value="chemistry">Chemistry</MenuItem>
          </TextField>
        </div>
      </form>
    </ImageList>
  );
};

export default SearchFilterMob;
