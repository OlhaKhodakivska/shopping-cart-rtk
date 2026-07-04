import type { ReactNode } from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Tech Store</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
