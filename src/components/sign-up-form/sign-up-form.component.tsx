import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { SignUpContainer } from "./sign-up-form.style";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (err) {
      if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.error("user creation encountered an error", err);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            value: displayName,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
