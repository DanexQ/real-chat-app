import React, { useState, useCallback, useMemo } from "react";
import { FormDetails } from "../interfaces";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import react from "react";
import * as Style from "./StyledFormTemplate";
import { inputsProps } from "../interfaces";

export type initialStateType = {
  [x: string]: string;
};

interface FormTemplateProps extends FormDetails {
  handleSubmit: (e: React.FormEvent, data: initialStateType) => void;
  error: boolean;
}

const createInitialState = (inputsArr: inputsProps[]) => {
  const prevState: initialStateType = {};
  inputsArr.map((prev) => {
    prevState[prev.name] = "";
  });
  return prevState;
};

const FormTemplate = ({
  formType,
  inputs,
  reminder,
  reminderAnchor,
  linkTo,
  isDisabled,
  handleSubmit,
  errorMessage,
  error,
}: FormTemplateProps) => {
  const initState = useMemo(() => createInitialState(inputs), [inputs]);
  const [formData, setFormData] = useState(initState);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);
  console.log(formData);

  return (
    <Style.StyledFormContainer
      onSubmit={(e: React.FormEvent) => handleSubmit(e, formData)}
    >
      <Style.FormLabelMain>Chat app</Style.FormLabelMain>
      <Style.FormLabelSub>LOGIN</Style.FormLabelSub>
      <Style.InputsWrapper>
        {inputs.map((input, index) => {
          const { pattern, ...inputDetail } = input;
          return (
            <FormInput
              key={index}
              {...inputDetail}
              onChange={handleChange}
              value={formData[input.name]}
              pattern={
                input.name === "confirmPassword"
                  ? "" + formData["password" as keyof typeof formData]
                  : pattern
              }
            />
          );
        })}
      </Style.InputsWrapper>
      {error && <Style.Error>{errorMessage}</Style.Error>}
      <Style.SubmitButton disabled={!isDisabled}>{formType}</Style.SubmitButton>
      <Style.Reminder>
        {reminder} <Link to={`/${linkTo}`}>{reminderAnchor}</Link>
      </Style.Reminder>
    </Style.StyledFormContainer>
  );
};

export default react.memo(FormTemplate);
