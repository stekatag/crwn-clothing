import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";
import { BaseButton, GoogleSignInButton } from "../button/button.style";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30rem;

  @media only screen and ${respond.tabPort} {
    margin-bottom: 5rem;
  }

  @media only screen and ${respond.phone} {
    text-align: center;
  }

  h2 {
    font-size: 2.8rem;
    margin-block: 1rem;
  }

  span {
    font-size: 1.8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media only screen and ${respond.phone} {
    flex-direction: column;
    gap: 2rem;
  }
`;
