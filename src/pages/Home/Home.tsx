import styles from "./Home.module.css";
import { OperationButton } from "../../components/OperationButton/OperationButton";
import { ShowOperation } from "../../components/ShowOperation/ShowOperation";
import { useOperation } from "../../hooks/useOperation";
import { OPERATORS_DATA } from "../../constants/operators";

export const Home = () => {
  const { operation, addOperation, removeOperation } = useOperation();
  return (
    <div className={styles.container}>
      <ShowOperation result={operation} />
      <section className={styles.operations}>
        {OPERATORS_DATA.map((operator: string) => {
          if (operator === "<")
            return (
              <OperationButton
                key={operator}
                valueButton={operator}
                onClickEvent={removeOperation}
              />
            );
          return (
            <OperationButton
              key={operator}
              valueButton={operator}
              onClickEvent={addOperation}
            />
          );
        })}
      </section>
    </div>
  );
};
