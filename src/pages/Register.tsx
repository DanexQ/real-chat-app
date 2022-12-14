import FormTemplate from "../components/form/FormTemplate";
import { FormDetails } from "../interfaces";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { initialStateType } from "../components/form/FormTemplate";

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
      },
    ],
    reminder: "Have you got an account?",
    reminderAnchor: "Sign in",
    linkTo: "login",
  };

  const handleSubmitCallback = async (formData: initialStateType) => {
    const name = formData.name;
    const password = formData.password;
    const email = formData.email;
    setErr(false);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //Update profile
      await updateProfile(response.user, {
        displayName: name,
        photoURL:
          "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",
      });
      //create user on firestore
      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        displayName: name,
        email,
        photoURL:
          "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png",
      });

      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", response.user.uid), {});
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
      handleSubmitCallback={handleSubmitCallback}
      {...registerDetails}
      error={err}
    />
  );
};

export default Register;
