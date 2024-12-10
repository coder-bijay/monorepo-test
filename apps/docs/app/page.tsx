import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <code>apps/docs/app/page.tsx</code>

        <Button appName="docs" className={styles.secondary}>
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        This is the footer section of the /apps/docs/app/page.tsx
      </footer>
    </div>
  );
}
