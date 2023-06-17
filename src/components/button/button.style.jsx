import styled from "styled-components";

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
  border: none;
  cursor: pointer;
  transition: all 0.2s;

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

// .button-container {
//   min-width: 165px;
//   width: auto;
//   height: 50px;
//   letter-spacing: 0.5px;
//   line-height: 50px;
//   padding: 0 35px 0 35px;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   text-transform: uppercase;
//   font-family: inherit;
//   font-weight: bolder;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }

//   &.google-sign-in {
//     background-color: #4285f4;
//     color: white;

//     &:hover {
//       background-color: #357ae8;
//       border: none;
//     }
//   }

//   &.inverted {
//     background-color: white;
//     color: black;
//     border: 1px solid black;

//     &:hover {
//       background-color: black;
//       color: white;
//       border: none;
//     }
//   }
// }
