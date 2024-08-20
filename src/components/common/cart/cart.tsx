import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store/store';
import {
  // removeItem,
  // updateQuantity,
  // clearCart,
  toggleCart,
} from 'src/store/features/cartSlice';
// import { CartItem } from 'src/types/cart';
import { Drawer } from 'src/components/ui/drawer';
import './cart.styled.css';
import clsx from 'clsx';
import Typography, { ETypographyVariant } from 'src/components/ui/typography';
export const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const dispatch = useDispatch();

  // const handleRemoveItem = (id: string) => {
  //   dispatch(removeItem(id));
  // };

  // const handleUpdateQuantity = (id: string, quantity: number) => {
  //   dispatch(updateQuantity({ id, quantity }));
  // };

  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  const onCloseCart = () => {
    dispatch(toggleCart());
  };

  // const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  return (
    <Drawer isOpen={isOpen} onClose={onCloseCart}>
      <div className={clsx('cart', cartItems.length === 0 && 'cart__empty')}>
        {cartItems.length === 0 && (
          <>
            <Typography as="h2" variant={ETypographyVariant.H2Regular}>
              Your cart is empty.
            </Typography>
            <Typography
              as="p"
              // variant={ETypographyVariant.H2Regular}
              className="cart__p"
            >
              Not sure where to start?
            </Typography>
            <Typography.Link
              className="cart__empty-link"
              to="/categories/Women/All"
              onClick={onCloseCart}
            >
              Shop Best Sellers for Her
            </Typography.Link>
            <Typography.Link
              className="cart__empty-link"
              to="categories/Men/All"
              onClick={onCloseCart}
            >
              Shop Best Sellers for Him
            </Typography.Link>
            <div className="cart__empty-container__img">
              <div className="cart__empty-img" />
            </div>
          </>
        )}
        {/* <ul>
          {cartItems.map((item: CartItem) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul> */}
        {/* <h3>Total: ${totalPrice.toFixed(2)}</h3> */}
        {/* <button onClick={handleClearCart}>Clear Cart</button> */}
      </div>
    </Drawer>
  );
};
