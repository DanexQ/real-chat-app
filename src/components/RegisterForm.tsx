import FormTemplate from "./FormTemplate";
import { FormDetails } from "../interfaces";
import useStateForm from "./useStateForm";

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

const RegisterForm = () => {
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
      <FormTemplate {...registerDetails} onChange={handleChange} />
    </form>
  );
};

export default RegisterForm;
