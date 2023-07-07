import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const handleClearItemFromCart = () => dispatch(clearItemFromCart(cartItem));
  const handleAddItemToCart = () => dispatch(addItemToCart(cartItem));
  const handleRemoveItemFromCart = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemoveItemFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItemToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={handleClearItemFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
