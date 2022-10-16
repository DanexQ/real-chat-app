import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type loginFormType = {
  email: string;
  password: string;
};

const initialState: loginFormType = {
  email: "",
  password: "",
};

const Login = () => {
  const [err, setErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const loginDetails: FormDetails = {
    formType: "Login",
    errorMessage,
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

  const handleSubmit = async <T,>(e: React.FormEvent, formData: T) => {
    e.preventDefault();
    const email = String(formData["email" as keyof typeof formData]);
    const password = String(formData["password" as keyof typeof formData]);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage("Invalid email or password!");
        setErr(true);
      }
    }
  };

  return (
    <FormTemplate
      {...loginDetails}
      initialState={initialState}
      handleSubmit={handleSubmit}
      error={err}
    />
  );
};

export default Login;
