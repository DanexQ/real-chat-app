type inputsProps = {
  type: string;
  placeholder: string;
};

export interface FormProps {
  formType: string;
  inputs: inputsProps[];
  reminder: string;
  reminderAnchor: string;
}

type FormDetailsProps = {
  login: FormProps;
  register: FormProps;
};

export const formDetails: FormDetailsProps = {
  login: {
    formType: "Login",
    inputs: [
      {
        type: "text",
        placeholder: "email",
      },
      {
        type: "password",
        placeholder: "password",
      },
    ],
    reminder: "You do not have an account?",
    reminderAnchor: "Sign up",
  },
  register: {
    formType: "Register",
    inputs: [
      {
        type: "text",
        placeholder: "name",
      },
      {
        type: "email",
        placeholder: "email",
      },
      {
        type: "password",
        placeholder: "password",
      },
      {
        type: "file",
        placeholder: "add avatar",
      },
    ],
    reminder: "Have you got an account?",
    reminderAnchor: "Sign in",
  },
};
