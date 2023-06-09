import { FormControl, FormGroup, FormControlLabel } from "@mui/material";
import {
  CheckboxLabel,
  FormHeading,
} from "../MainComponent/MainStyling/MainTextStyles";
import {
  CheckBox,
  FormFields,
} from "../MainComponent/MainStyling/MainOverlayStyles";
import { FormSubmit } from "../../GeneralStyling/Buttons";
import { FormTnC } from "../../GeneralConstants/Constants";
import { EntryForm, PaperMidPad } from "./MobileStyling/MobileStylingOverlays";
import MobNavTextBlack from "./MobNavTextBlack";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";

export const FieldStyle = {
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

type formSubmission = {
  setIsSubmitted: (value: boolean) => void;
  isSubmitted: boolean;
};

const ConsultationForm: FC<formSubmission> = (props): JSX.Element => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
    mode: "onBlur",
  });

  const [TnC, setTnc] = useState(false);

  const { register, handleSubmit, reset, formState } = form;

  const { errors, isValid } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("FORM DATA: ", data);
    reset();
    props.setIsSubmitted(!props.isSubmitted);
  };
  return (
    <>
      <PaperMidPad elevation={8}>
        <MobNavTextBlack />
        <EntryForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl>
            <FormHeading>Book a consultation</FormHeading>
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
                value={TnC}
                control={<CheckBox onClick={() => setTnc(!TnC)} />}
                {...register("TNC", {
                  required: {
                    value: true,
                    message: "Accept terms and Condition",
                  },
                })}
              />
            </FormGroup>
            <FormSubmit type="submit" variant="contained" disabled={!isValid}>
              Submit your application
            </FormSubmit>
          </FormControl>
        </EntryForm>
      </PaperMidPad>
    </>
  );
};

export default ConsultationForm;
