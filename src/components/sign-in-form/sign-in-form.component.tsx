import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.style";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const googleSignIn = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (err) {
      switch ((err as AuthError).code) {
        case AuthErrorCodes.USER_DELETED:
          alert("User not found");
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password");
          break;
        default:
          console.error(err);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.googleSignIn}
            onClick={googleSignIn}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
