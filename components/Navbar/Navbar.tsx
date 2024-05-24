import Link from "next/link";
import styles from "./Navbar.module.css";
import { HomeIcon } from "@primer/octicons-react";
import ActiveLink from "./ActiveLink/ActiveLink";

const navItems = [
  { path: "/about", name: "About" },
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  return (
    <div className={styles.container_navbar}>
      <Link className={styles.home} href={"/"}>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className={styles.container_links}>
        {navItems.map((pathIem) => (
          <ActiveLink key={pathIem.name} {...pathIem} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
