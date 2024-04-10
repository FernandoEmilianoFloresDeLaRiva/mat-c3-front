import styles from "./IndexRouter.module.css";
import { Route } from "wouter";
import { Home } from "../pages/Home/Home";

export const IndexRouter = () => {
  return (
    <div className={styles.main}>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};
