import { FormGroup, FormControlLabel } from "@mui/material";
import {
  Formbox,
  FormContainer,
  FormFields,
  CheckBox,
} from "../MainStyling/MainOverlayStyles";
import { FormHeading, CheckboxLabel } from "../MainStyling/MainTextStyles";
import { FormSubmit } from "../../../GeneralStyling/Buttons";
import { FormTnC } from "../../../GeneralConstants/Constants";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FieldStyle = {
  style: {
    borderRadius: "10px",
    border: "1px solid black",
  },
};

type FormValues = {
  username: string;
  email: string;
  phone: number;
  TNC: boolean;
};

const FormInput = () => {
  const [privacy, setPrivacy] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      TNC: false,
    },
    mode: "onBlur",
  });

  const { register, handleSubmit, reset, formState } = form;

  const { errors, isValid } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("FORM DATA: ", data);
    setPrivacy(!privacy);
    reset();
  };
  return (
    <Formbox elevation={15}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormContainer>
          <FormHeading>To get a consultation</FormHeading>
          <FormGroup>
            <FormFields
              placeholder="Name"
              InputProps={FieldStyle}
              {...register("username", { required: "Invalid Username" })}
            />
            <FormFields
              placeholder="E-mail"
              InputProps={FieldStyle}
              {...register("email", {
                required: "Enter the email",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Invalid Email",
                },
              })}
            />
            <FormFields
              placeholder="+7 905 XXX XX XXX"
              InputProps={FieldStyle}
              {...register("phone", {
                required: {
                  value: true,
                  message: "Invalid Phone Number",
                },
              })}
            />
            <div>
              {(errors.phone?.message ||
                errors.email?.message ||
                errors.username?.message) && (
                <span style={{ color: "red" }}>
                  <sup>*Please fill all fields to submit application</sup>
                </span>
              )}
            </div>
            <FormControlLabel
              label={<CheckboxLabel>{FormTnC}</CheckboxLabel>}
              value={privacy}
              control={<CheckBox />}
              {...register("TNC", { required: { value: true, message: "" } })}
            />
          </FormGroup>
          <FormSubmit type="submit" variant="contained" disabled={!isValid}>
            Submit your application
          </FormSubmit>
        </FormContainer>
      </form>
    </Formbox>
  );
};

export default FormInput;
