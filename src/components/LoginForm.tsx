import React from "react";
import styled from "styled-components";
import { FormProps } from "../constans";

const LoginForm = ({
  formType,
  inputs,
  reminder,
  reminderAnchor,
}: FormProps) => {
  return (
    <StyledForm>
      <FormLabelMain>Chat app</FormLabelMain>
      <FormLabelSub>{formType}</FormLabelSub>
      <InputsWrapper>
        {inputs.map((input, index) => (
          <StyledInput key={index} {...input} />
        ))}
      </InputsWrapper>
      <SubmitButton disabled>{formType}</SubmitButton>
      <Reminder>
        {reminder} <a href="#">{reminderAnchor}</a>
      </Reminder>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
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

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 2rem;

  &:not(&[type="file"]) {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:not(&[type="file"]):focus {
    outline: none;
    border-bottom: 2px solid #ffc611;
    margin-bottom: -1px;
  }

  &:not(&[type="file"]):invalid {
    border-bottom: 2px solid #ff033e;
  }
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
`;

const Reminder = styled.span`
  font-size: 1.5rem;

  > a {
    color: #88cafc;
    text-decoration: none;
    font-weight: 700;
  }
`;
