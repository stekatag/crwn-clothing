import styled from "styled-components";
import { Link } from "react-router-dom";
import { respond } from "../../utils/responsive/responsive.utils";
import { InvertedButton } from "../button/button.style";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11rem;
`;

export const Title = styled(Link)`
  display: inline-block;
  font-size: 2.8rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 2.4rem;

  @media only screen and ${respond.phone} {
    ${InvertedButton} {
      width: 13.5rem;
      font-size: 1.5rem;
      padding: 1rem 2rem;
    }
  }
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
