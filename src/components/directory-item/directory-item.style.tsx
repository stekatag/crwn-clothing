import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Body = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-black);
  background-color: var(--color-white);
  opacity: 0.75;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 2.4rem;
    color: var(--color-primary-light);
    text-transform: uppercase;
  }

  span {
    font-weight: lighter;
    font-size: 1.6rem;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;

  @media only screen and ${respond.bigDesktop} {
    height: 30rem;
  }

  &:hover {
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
      transition: opacity 0.2s ease-in-out;
    }
  }

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }
`;
