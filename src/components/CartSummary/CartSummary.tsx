import { useSelector } from 'react-redux';
import styles from './CartSummary.module.css';
import type { RootState } from '../../app/store';

const formatPrice = (price: number) => `€${price.toFixed(2)}`;

export default function CartSummary() {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const totalPrice = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  );

  return (
    <div className={styles.summary}>
      <h3>Summary</h3>
      <p>Total items: <strong>{totalItems}</strong> pcs</p>
      <p>Total price: <strong>{formatPrice(totalPrice)}</strong></p>
    </div>
  );
}
