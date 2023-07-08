import styled from "styled-components";
import Button from "../button/button.component";
import { respond } from "../../utils/responsive/responsive.utils";

export const PaymentFormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PaymentTitle = styled.h2`
  margin: 5rem 0 2.4rem 0;
  font-size: 2.8rem;
`;

export const FormContainer = styled.form`
  min-width: 60rem;

  @media only screen and ${respond.phone} {
    min-width: 32rem;
  }
`;

export const PaymentButton = styled(Button)`
  margin-top: 3rem;
  margin-left: auto;
`;
