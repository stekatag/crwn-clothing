import { useCallback } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItems>
          <TransitionGroup>
            {cartItems.map((cartItem) => (
              <Collapse key={cartItem.id} timeout={400}>
                <CartItem key={cartItem.id} cartItem={cartItem} />
              </Collapse>
            ))}
          </TransitionGroup>
        </CartItems>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
