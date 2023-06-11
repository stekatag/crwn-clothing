import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  signInWithGoogle,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer } from "./sign-in-form.style";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const googleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          console.error(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.googleSignIn}
            onClick={googleSignIn}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
