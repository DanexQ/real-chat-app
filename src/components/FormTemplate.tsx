import React, { useState, useCallback, useMemo, useEffect } from "react";
import { FormDetails } from "../interfaces";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import * as Style from "./StyledFormTemplate";
import { inputsProps } from "../interfaces";
import Spinner from "./Spinner";

export type initialStateType = {
  [x: string]: string;
};

interface FormTemplateProps extends FormDetails {
  handleSubmitCallback: (data: initialStateType) => void;
  error: boolean;
}

const createInitialState = (inputsArr: inputsProps[]) => {
  const prevState: initialStateType = {};
  inputsArr.forEach((prev) => {
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
  handleSubmitCallback,
  errorMessage,
  error,
}: FormTemplateProps) => {
  const initState = useMemo(() => createInitialState(inputs), [inputs]);
  const [formData, setFormData] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  useEffect(() => {
    error && setIsLoading(false);
  }, [error]);

  const handleSubmit = (e: React.FormEvent, formData: initialStateType) => {
    e.preventDefault();
    setIsLoading(true);
    handleSubmitCallback(formData);
  };

  return (
    <Style.FormContainer
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
                  ? formData["password"]
                  : pattern
              }
            />
          );
        })}
      </Style.InputsWrapper>
      {error && <Style.Error>{errorMessage}</Style.Error>}
      <Style.SubmitButton isLoading={isLoading}>
        {formType}
        <Spinner />
      </Style.SubmitButton>
      <Style.Reminder>
        {reminder} <Link to={`/${linkTo}`}>{reminderAnchor}</Link>
      </Style.Reminder>
    </Style.FormContainer>
  );
};

export default FormTemplate;
