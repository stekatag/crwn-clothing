import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  googleSignIn: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...inputOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...inputOptions}
    >
      {children}
    </button>
  );
};

export default Button;
