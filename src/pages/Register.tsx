import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";

interface registerFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: registerFormType = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const registerDetails: FormDetails = {
    formType: "Register",
    inputs: [
      {
        type: "text",
        placeholder: "name",
        name: "name",
        errorMessage: "Name is not 3-16 characters or special letters!",
        inputDetail:
          "Name should be 3-16 characters and should not include any special letters",
        pattern: "^[A-Za-z0-9]{3,16}",
      },
      {
        type: "email",
        placeholder: "email",
        name: "email",
        errorMessage: "Email is not valid!",
      },
      {
        type: "password",
        placeholder: "password",
        name: "password",
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
        errorMessage: "Passwords are not the same!",
        pattern: "Elolenelopl123!",
      },
    ],
    reminder: "Have you got an account?",
    reminderAnchor: "Sign in",
    linkTo: "login",
    isDisabled: true,
  };

  const handleSubmit = <Type,>(e: React.FormEvent, formData: Type) => {
    e.preventDefault();
    console.log(typeof formData);
    console.log(formData);
  };

  return (
    <FormTemplate
      initialState={initialState}
      handleSubmit={handleSubmit}
      {...registerDetails}
    />
  );
};

export default Register;
