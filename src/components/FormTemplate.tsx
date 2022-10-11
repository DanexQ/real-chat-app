import React from "react";
import styled from "styled-components";
import { FormDetails } from "../interfaces";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import react from "react";

interface FormTemplateDetails extends FormDetails {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTemplate = ({
  formType,
  inputs,
  reminder,
  reminderAnchor,
  linkTo,
  onChange,
  isDisabled,
}: FormTemplateDetails) => {
  return (
    <StyledFormContainer>
      <FormLabelMain>Chat app</FormLabelMain>
      <FormLabelSub>{formType}</FormLabelSub>
      <InputsWrapper>
        {inputs.map((input, index) => (
          <FormInput key={index} {...input} onChange={onChange} />
        ))}
      </InputsWrapper>
      <SubmitButton disabled={!isDisabled}>{formType}</SubmitButton>
      <Reminder>
        {reminder} <Link to={`/${linkTo}`}>{reminderAnchor}</Link>
      </Reminder>
    </StyledFormContainer>
  );
};

export default react.memo(FormTemplate);

const StyledFormContainer = styled.div`
  width: 50rem;
  padding: 6rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
