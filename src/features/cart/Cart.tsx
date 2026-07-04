import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from './cartSlice';
import styles from './Cart.module.css';
import type { AppDispatch, RootState } from '../../app/store';

const formatPrice = (price: number) => `€${price.toFixed(2)}`;

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <span>
                  {item.name} - {formatPrice(item.price)} ({item.quantity} pcs)
                </span>
                <div className={styles.controls}>
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.clearBtn}
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
}
