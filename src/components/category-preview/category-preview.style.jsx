import styled from "styled-components";
import { Link } from "react-router-dom";
import { respond } from "../../utils/responsive/responsive.utils";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
`;

export const Title = styled(Link)`
  display: block;
  font-size: 2.8rem;
  margin-bottom: 1.6rem;
  cursor: pointer;
`;

export const Preview = styled.div`
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
