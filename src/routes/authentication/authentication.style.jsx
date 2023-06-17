import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90rem;
  margin: 3rem auto;

  @media only screen and ${respond.tabPort} {
    flex-direction: column;
  }
`;
