import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import type { Product } from '../cart/cartSlice';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: '27-inch Monitor', price: 229 },
  { id: 2, name: 'Mechanical Keyboard', price: 89 },
  { id: 3, name: 'Wireless Mouse', price: 39 },
  { id: 4, name: 'Gaming Headset', price: 119 },
];

export default function ProductList() {
  return (
    <div className={styles.container}>
      <h2>Products</h2>
      <div className={styles.grid}>
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
