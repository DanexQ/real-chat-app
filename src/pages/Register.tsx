import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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

  const handleSubmit = <T,>(e: React.FormEvent, formData: T) => {
    e.preventDefault();
    type Keys = Extract<keyof T, string>;
    const password = "" + formData["password" as Keys];
    const email = "" + formData["email" as Keys];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
