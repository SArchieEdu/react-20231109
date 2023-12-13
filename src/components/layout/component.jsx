import { Link, NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <button onClick={() => navigate("/products", { replace: true })}>
          Products Program Navigation
        </button>
        <Link to="/" className={styles.link}>
          Main
        </Link>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
        <Link to="/product" className={styles.link}>
          Product
        </Link>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            classNames(styles.link, {
              [styles.active]: isActive,
            })
          }
        >
          Products
        </NavLink>
      </header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};
