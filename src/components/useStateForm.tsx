import React from "react";
import { useState, useCallback } from "react";

const useStateForm = <T,>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useStateForm;
