import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

type loginFormType = {
  email: string;
  password: string;
};

const initialState: loginFormType = {
  email: "",
  password: "",
};

const Login = () => {
  const { currentUser } = useContext(AuthContext);
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

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };
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

  // useEffect(() => {
  //   if (currentUser) navigate("/");
  // });

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
