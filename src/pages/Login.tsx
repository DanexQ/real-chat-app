import FormTemplate from "../components/FormTemplate";
import { FormDetails } from "../interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type loginFormType = {
  email: string;
  password: string;
};

const initialState: loginFormType = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
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
  const handleSubmit = <T,>(e: React.FormEvent, formData: T) => {
    e.preventDefault();
    const email = String(formData["email" as keyof typeof formData]);
    const password = String(formData["password" as keyof typeof formData]);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(auth);
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
