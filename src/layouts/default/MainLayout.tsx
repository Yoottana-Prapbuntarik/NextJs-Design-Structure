import * as React from "react";
import styles from "./MainLayout.module.css";

export const MainLayout: React.FC<{
  children: React.ReactNode
}> = ({
  children
}) => {

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        { children }
      </main>
    );
  };