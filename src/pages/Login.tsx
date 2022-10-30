import FormTemplate from "../components/form/FormTemplate";
import { FormDetails } from "../interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { initialStateType } from "../components/form/FormTemplate";

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
  };

  const handleSubmitCallback = async (formData: initialStateType) => {
    const email = formData["email"];
    const password = formData["password"];
    setErr(false);

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
      handleSubmitCallback={handleSubmitCallback}
      error={err}
    />
  );
};

export default React.memo(Login);
