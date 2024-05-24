import Navbar from "@/components/Navbar/Navbar";
import styles from "./layout.module.css";

export default function general({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className={styles.container_layout}>
        <h2>App Next</h2>
        <div>{children}</div>
      </div>
    </>
  );
}
