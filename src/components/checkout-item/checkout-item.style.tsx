import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding-block: 1.5rem;
  font-size: 2rem;
  align-items: center;

  @media only screen and ${respond.phone} {
    font-size: 1.8rem;
  }
`;

export const ImageContainer = styled.figure`
  width: 23%;
  padding-right: 15px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;

  @media only screen and ${respond.phone} {
    padding-right: 0.7rem;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const Value = styled.span`
  margin-inline: 1rem;
`;

export const RemoveButton = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;
