// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
// }

// .category-title {
//   font-size: 38px;
//   margin-bottom: 25px;
//   text-align: center;
// }

import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 5.5rem;

  @media only screen and ${respond.tabPort} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and ${respond.phone} {
    grid-template-columns: 1fr;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 3.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;
