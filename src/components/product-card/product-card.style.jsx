// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;
//   margin-bottom: 32px;

//   img {
//     width: 100%;
//     height: 95%;
//     object-fit: cover;
//     margin-bottom: 5px;
//   }

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }

//   .footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 10%;
//     }
//   }
// }

import styled from "styled-components";
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
    }

    ${InvertedButton} {
      opacity: 0.85;
      transition: all 0.2s ease-in-out;
      visibility: visible;
      pointer-events: auto;

      display: flex;
      justify-content: center;
    }
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.7rem;
    aspect-ratio: 1/1;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 3.2rem;

    display: flex;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
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
