import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import styles from './ProductCard.module.css';
import type { AppDispatch } from '../../app/store';
import type { Product } from '../cart/cartSlice';

type ProductCardProps = {
  product: Product;
};

const formatPrice = (price: number) => `€${price.toFixed(2)}`;

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)}</p>
      <button
        className={styles.button}
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
}
