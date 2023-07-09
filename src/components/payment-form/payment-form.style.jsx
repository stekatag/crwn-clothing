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
  margin-bottom: 2.4rem;
  font-size: 2.8rem;
`;

export const FormContainer = styled.form`
  min-width: 60rem;

  @media only screen and ${respond.phone} {
    min-width: 32rem;
  }
`;

export const PaymentInfoContainer = styled.div`
  margin: 4.5rem 0 2.75rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const PaymentInfo = styled.p`
  font-size: 1.8rem;
  text-align: center;

  span {
    font-weight: bold;
  }
`;

export const PaymentButton = styled(Button)`
  margin-top: 3rem;
  margin-left: auto;
`;
