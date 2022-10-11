import { FormDetails } from "../interfaces";
import useStateForm from "./useStateForm";
import styled from "styled-components";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import React from "react";

type registerState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState: registerState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterFormTest = () => {
  const { formData, handleChange, handleSubmit } =
    useStateForm<registerState>(initialState);

  const isDisabled =
    Object.values(formData).every((val) => val !== "") &&
    formData.password === formData.confirmPassword;

  const registerDetails: FormDetails = {
    formType: "Register",
    inputs: [
      {
        type: "text",
        placeholder: "name",
        name: "name",
        value: formData.name,
        errorMessage: "Name is not 3-16 characters or special letters!",
        inputDetail:
          "Name should be 3-16 characters and should not include any special letters",
        pattern: "^[A-Za-z0-9]{3,16}",
      },
      {
        type: "email",
        placeholder: "email",
        name: "email",
        value: formData.email,
        errorMessage: "Email is not valid!",
      },
      {
        type: "password",
        placeholder: "password",
        name: "password",
        value: formData.password,
        errorMessage:
          "Password is not 8-20 characters or does not include 1 letter, 1 number and 1 special character!",
        inputDetail:
          "Password should be 8-20 characters and include 1 letter, 1 number and 1 special character!",
        pattern:
          "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      },
      {
        type: "password",
        placeholder: "confirm password",
        name: "confirmPassword",
        value: formData.confirmPassword,
        errorMessage: "Passwords are not the same!",
        pattern: formData.password,
      },
    ],
    reminder: "Have you got an account?",
    reminderAnchor: "Sign in",
    linkTo: "login",
    isDisabled,
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormContainer>
        <FormLabelMain>Chat app</FormLabelMain>
        <FormLabelSub>Register</FormLabelSub>
        <InputsWrapper>
          {registerDetails.inputs.map((input, index) => (
            <FormInput key={index} {...input} onChange={handleChange} />
          ))}
        </InputsWrapper>
        <SubmitButton disabled={!isDisabled}>Register</SubmitButton>
        <Reminder>
          Have you got an account already? <Link to={`/login`}>Log in</Link>
        </Reminder>
      </StyledFormContainer>
    </form>
  );
};

const MemoizedForm = React.memo(RegisterFormTest);

export default MemoizedForm;

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
