import styled from "styled-components";

import { Box } from "@mui/material";
import { BaseButton } from "../button/button.style";
import { respond } from "../../utils/responsive/responsive.utils";

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50rem;
  width: 100%;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  padding: 3.2rem;

  ${BaseButton} {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    width: 100%;
  }

  @media only screen and ${respond.phone} {
    max-width: 32rem;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 1.6rem;

  @media only screen and ${respond.phone} {
    font-size: 2.4rem;
  }
`;

export const ModalText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2.8rem;

  @media only screen and ${respond.phone} {
    font-size: 1.6rem;
  }
`;
