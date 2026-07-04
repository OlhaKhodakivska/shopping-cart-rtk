import Layout from './components/Layout/Layout';
import ProductList from './features/products/ProductList';
import Cart from './features/cart/Cart';
import CartSummary from './components/CartSummary/CartSummary';

export default function App() {
  return (
    <Layout>
      <div>
        <ProductList />
      </div>
      <div>
        <Cart />
        <CartSummary />
      </div>
    </Layout>
  );
}