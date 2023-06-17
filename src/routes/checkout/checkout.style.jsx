// .checkout-container {
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 50px auto 0;

//   .checkout-header {
//     width: 100%;
//     padding: 10px 0;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid darkgrey;

//     .header-block {
//       text-transform: capitalize;
//       width: 23%;

//       &:last-child {
//         width: 8%;
//       }
//     }
//   }

//   .total {
//     margin-top: 30px;
//     margin-left: auto;
//     font-size: 36px;
//   }
// }

import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const CheckoutContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media only screen and ${respond.tabPort} {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  span {
    font-size: 1.7rem;

    @media only screen and ${respond.phone} {
      font-size: 1.5rem;
    }
  }

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 3.2rem;
`;
