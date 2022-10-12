import FormTemplate from "./FormTemplate";
import { FormDetails } from "../interfaces";

type loginData = {
  email: string;
  password: string;
};

const initialState: loginData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const loginDetails: FormDetails = {
    formType: "Login",
    inputs: [
      {
        type: "text",
        name: "email",
        placeholder: "email",
        errorMessage: "Email is not valid!",
      },
      {
        type: "password",
        name: "password",
        placeholder: "password",
      },
    ],
    reminder: "You do not have an account?",
    reminderAnchor: "Sign up",
    linkTo: "register",
    isDisabled: true,
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  return <FormTemplate {...loginDetails} initialState={initialState} />;
};

export default LoginForm;
