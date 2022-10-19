import styled from "styled-components";

export const StyledFormContainer = styled.form`
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

export const FormLabelMain = styled.h2`
  font-size: 5rem;
  color: #88cafc;
  text-transform: uppercase;
`;

export const FormLabelSub = styled.span`
  text-transform: uppercase;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Error = styled.span`
  color: red;
  font-size: 1.5rem;
`;

export const SubmitButton = styled.button`
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

export const Reminder = styled.span`
  font-size: 1.5rem;

  > a {
    color: #88cafc;
    text-decoration: none;
    font-weight: 700;
  }
`;
