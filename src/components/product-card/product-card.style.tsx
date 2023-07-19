import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";
import { InvertedButton } from "../button/button.style";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 32rem;
  align-items: center;
  position: relative;

  &:hover {
    img {
      transition: all 0.2s ease-in-out;
      opacity: 0.8;

      @media only screen and ${respond.tabPort} {
        opacity: 1;
        transition: unset;
      }
    }

    ${InvertedButton} {
      opacity: 0.85;
      transition: all 0.2s ease-in-out;
      visibility: visible;
      pointer-events: auto;
    }
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.7rem;
    aspect-ratio: 1/1;
  }

  ${InvertedButton} {
    width: 80%;
    position: absolute;
    bottom: 3.2rem;

    display: flex;
    justify-content: center;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;

    @media only screen and ${respond.tabPort} {
      visibility: visible;
      pointer-events: auto;
      opacity: 0.8;
      bottom: 3.8rem;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 1.5rem;
`;

export const Price = styled.span`
  width: 10%;
`;
