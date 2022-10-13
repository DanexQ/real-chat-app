import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";

type loginFormType = {
  email: string;
  password: string;
};

const initialState: loginFormType = {
  email: "",
  password: "",
};

const Login = () => {
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
  const handleSubmit = <Type,>(e: React.FormEvent, formData: Type) => {
    e.preventDefault();
    console.log(typeof formData);
    console.log("NA PEWNO DZIAŁA?", formData);
  };

  return (
    <FormTemplate
      {...loginDetails}
      initialState={initialState}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
