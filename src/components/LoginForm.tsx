import FormTemplate from "./FormTemplate";
import { FormDetails } from "../interfaces";
import useStateForm from "./useStateForm";

interface loginData {
  email: string;
  password: string;
}

const initialState: loginData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { formData, handleChange, handleSubmit } =
    useStateForm<loginData>(initialState);
  const isDisabled = Object.values(formData).every((val) => val !== "");
  const loginDetails: FormDetails = {
    formType: "Login",
    inputs: [
      {
        type: "text",
        name: "email",
        placeholder: "email",
        value: formData.email,
        errorMessage: "Email is not valid!",
      },
      {
        type: "password",
        name: "password",
        placeholder: "password",
        value: formData.password,
      },
    ],
    reminder: "You do not have an account?",
    reminderAnchor: "Sign up",
    linkTo: "register",
    isDisabled,
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  return (
    <form onSubmit={handleSubmit}>
      <FormTemplate {...loginDetails} onChange={handleChange} />
    </form>
  );
};

export default LoginForm;
