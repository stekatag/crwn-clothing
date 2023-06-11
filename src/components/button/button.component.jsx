import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  googleSignIn: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.googleSignIn]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...inputOptions }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...inputOptions}>{children}</CustomButton>;
};

export default Button;
