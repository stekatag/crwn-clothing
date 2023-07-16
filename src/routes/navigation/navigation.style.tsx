import styled from "styled-components";
import { Link } from "react-router-dom";
import { respond } from "../../utils/responsive/responsive.utils";

export const NavigationContainer = styled.nav`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding-inline: 1.5rem;

  @media only screen and ${respond.phone} {
    width: 8rem;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  font-size: 1.8rem;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }
