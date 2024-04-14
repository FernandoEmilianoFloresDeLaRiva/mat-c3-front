import styles from "./Home.module.css";
import { OperationButton } from "../../components/OperationButton/OperationButton";
import { ShowOperation } from "../../components/ShowOperation/ShowOperation";
import { OPERATORS_DATA } from "../../constants/operators";
import { useContext } from "react";
import { OperationContext } from "../../context/operation/operation.context";
import { LimitInput } from "../../components/LimitInput/LimitInput";

export const Home = () => {
  const { operationData, addOperation, removeOperation, addLimit } =
    useContext(OperationContext);
  return (
    <form className={styles.main}>
      <LimitInput
        placeholderName="limite A"
        name="limiteA"
        eventOnChange={addLimit}
      />
      <div className={styles.container}>
        <ShowOperation result={operationData.operation} />
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
      <LimitInput
        placeholderName="limite B"
        name="limiteB"
        eventOnChange={addLimit}
      />
    </form>
  );
};
