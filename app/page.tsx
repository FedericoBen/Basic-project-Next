import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>App start tutorial</h1>
      <Link href={"/about"}>About</Link>
    </main>
  );
}
