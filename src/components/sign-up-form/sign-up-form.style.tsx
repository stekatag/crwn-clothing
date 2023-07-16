import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30rem;

  @media only screen and ${respond.phone} {
    text-align: center;

    button {
      width: 100%;
    }
  }

  h2 {
    font-size: 2.8rem;
    margin-block: 1rem;
  }

  span {
    font-size: 1.8rem;
  }
`;
