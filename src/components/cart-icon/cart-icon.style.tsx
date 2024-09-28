/// <reference types="vite-plugin-svgr/client" />
import styled from "styled-components";

import ShoppingSvg from "../../assets/shopping-bag.svg?react";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const CartIconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 1.2rem;
`;
