export interface inputsProps {
  type: string;
  placeholder: string;
  name: string;
  errorMessage?: string;
  inputDetail?: string;
  pattern?: string;
}

export interface FormDetails {
  formType: string;
  inputs: inputsProps[];
  reminder: string;
  reminderAnchor: string;
  linkTo: string;
  isDisabled: boolean;
}
