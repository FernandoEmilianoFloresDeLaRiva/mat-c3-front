import styles from "./IndexRouter.module.css";
import { Route } from "wouter";
import { Home } from "../pages/Home/Home";
import { OperationProvider } from "../context/operation/operation.provider";

export const IndexRouter = () => {
  return (
    <OperationProvider>
      <div className={styles.main}>
        <Route path="/">
          <Home />
        </Route>
      </div>
    </OperationProvider>
  );
};
