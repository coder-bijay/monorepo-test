import { Button } from "@repo/ui/components/button.jsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <code>apps/web/app/page.tsx</code>
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        This is the footer section of the apps/web/app/page.tsx
      </footer>
    </div>
  );
}
