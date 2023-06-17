import styled from "styled-components";

import { BaseButton } from "../button/button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 25rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid var(--color-black);
  background-color: var(--color-white);
  top: 9rem;
  right: 4rem;
  z-index: 5;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.15);

  ${BaseButton} {
    margin-top: auto;
    font-size: 1.4rem;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartItems = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
