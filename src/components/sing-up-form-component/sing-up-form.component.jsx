import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input-component/form-input.component";
import Button from "../button/button.component";

import "./../../style.css";
//importarea functiilor din Firebase
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
//resetarea filed-urilor
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
//functioa de creare a contului
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      navigate("/", { replace: true });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your emial and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
