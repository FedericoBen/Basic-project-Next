"use client";
import { usePathname } from "next/navigation";
import styles from "./ActiveLink.module.css";
import Link from "next/link";

type ActiveLinkProps = {
  name: string;
  path: string;
};

const ActiveLink = ({ name, path }: ActiveLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.link} ${pathName == path && styles.active}`}
    >
      {name}
    </Link>
  );
};

export default ActiveLink;
