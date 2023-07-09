import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.style";

export const BaseButton = styled.button`
  min-width: 16.5rem;
  width: auto;
  letter-spacing: 0.5px;
  padding: 1.35rem 3.35rem;
  font-size: 1.7rem;
  background-color: var(--color-black);
  color: var(--color-white);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: var(--color-white);

  &:hover {
    background-color: #3271d6;
    color: var(--color-white);
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: var(--color-white);
  color: var(--color-black);
  border: 1px solid var(--color-black);

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 2rem;
  height: 2rem;
`;
