import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const handleClearItemFromCart = () => clearItemFromCart(cartItem);
  const handleAddItemToCart = () => addItemToCart(cartItem);
  const handleRemoveItemFromCart = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <figure className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </figure>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
