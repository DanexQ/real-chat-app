import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FormDetails } from "../interfaces";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import react from "react";

interface FormTemplateProps<T> extends FormDetails {
  initialState: T;
  handleSubmit: <T>(e: React.FormEvent, data: T) => void;
}

const FormTemplate = <T,>({
  initialState,
  formType,
  inputs,
  reminder,
  reminderAnchor,
  linkTo,
  isDisabled,
  handleSubmit,
}: FormTemplateProps<T>) => {
  const [formData, setFormData] = useState<T>(initialState);
  // const isDisabled =
  //   Object.values(formData).every((val) => val !== "") &&
  //   formData.password === formData.confirmPassword;
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);
  console.log(formData);
  return (
    <StyledFormContainer onSubmit={(e) => handleSubmit<T>(e, formData)}>
      <FormLabelMain>Chat app</FormLabelMain>
      <FormLabelSub>{formType}</FormLabelSub>
      <InputsWrapper>
        {inputs.map((input, index) => {
          return (
            <FormInput
              key={index}
              {...input}
              onChange={handleChange}
              value={formData[input.name as keyof typeof formData] as string}
            />
          );
        })}
      </InputsWrapper>
      <SubmitButton disabled={!isDisabled}>{formType}</SubmitButton>
      <Reminder>
        {reminder} <Link to={`/${linkTo}`}>{reminderAnchor}</Link>
      </Reminder>
    </StyledFormContainer>
  );
};

export default react.memo(FormTemplate);

const StyledFormContainer = styled.form`
  width: 50rem;
  padding: 6rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: 2rem;
`;

const FormLabelMain = styled.h2`
  font-size: 5rem;
  color: #88cafc;
  text-transform: uppercase;
`;

const FormLabelSub = styled.span`
  text-transform: uppercase;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  letter-spacing: 1px;
  font-size: 2.1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #88cafc;
  border-radius: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: default;
  }

  &:not(:disabled) &:active {
    transform: translateY(1px);
  }
`;

const Reminder = styled.span`
  font-size: 1.5rem;

  > a {
    color: #88cafc;
    text-decoration: none;
    font-weight: 700;
  }
`;
