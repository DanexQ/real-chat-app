import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const registerDetails: FormDetails = {
    formType: "Register",
    errorMessage,
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

  const handleSubmit = async <T,>(e: React.FormEvent, formData: T) => {
    e.preventDefault();
    type Keys = Extract<keyof T, string>;
    const name = "" + formData["name" as Keys];
    const password = "" + formData["password" as Keys];
    const email = "" + formData["email" as Keys];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        name,
        email,
        photoUrl: "",
      });

      await setDoc(doc(db, "userChats", response.user.uid), {});

      navigate("/login");
    } catch (err) {
      if (err instanceof Error) {
        err.message === "Firebase: Error (auth/email-already-in-use)." &&
          seterrorMessage("There is account with this email already!");
        setErr(true);
      }
    }
  };

  return (
    <FormTemplate
      initialState={initialState}
      handleSubmit={handleSubmit}
      {...registerDetails}
      error={err}
    />
  );
};

export default Register;
