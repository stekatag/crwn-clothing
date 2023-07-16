import styled, { css } from "styled-components";

const shrinkLabelMixin = css`
  top: -16px;
  font-size: 1.3rem;
  color: var(--color-primary);
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: var(--color-primary-light);
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 1rem;
  transition: 0.3s ease all;

  ${({ shrink }) => shrink && shrinkLabelMixin};
`;

export const Input = styled.input`
  background: none;
  background-color: var(--color-white);
  color: var(--color-primary);
  font-size: 1.8rem;
  padding: 1rem 1.2rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-primary);
  margin-block: 2.5rem;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelMixin}
  }
`;

export const Group = styled.div`
  position: relative;
  margin-block: 4.5rem;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
