import { Suspense, useContext } from "react";
import styles from "./Result.module.css";
import { OperationContext } from "../../context/operation/operation.context";
import { useResult } from "../../hooks/useResult";
import { TableResult } from "../../components/TableResult/TableResult";
import { TableResultSec } from "../../components/TableResultSec/TableResultSec";

export const Result = () => {
  const { operationData } = useContext(OperationContext);
  const { data, isLoading } = useResult(operationData);
  return (
    <main className={styles.tableContainer}>
      {!isLoading && data.length ? (
        <Suspense fallback={"Cargando tablas..."}>
          <TableResult
            methodName="Método de Bisección"
            data={data[0]}
            theadName={[
              "raiz",
              "limiteA",
              "limiteB",
              "nuevoIntervaloMultiplicacion",
              "error",
            ]}
          />
          <TableResult
            methodName="Método de Falsa Posición"
            data={data[1]}
            theadName={[
              "raiz",
              "limiteA",
              "limiteB",
              "nuevoIntervaloMultiplicacion",
              "error",
            ]}
          />
          <TableResultSec
            methodName="Método de Secante"
            data={data[2]}
            theadName={["raiz", "xi - 1", "xi", "xi + 1", "error"]}
          />
        </Suspense>
      ) : (
        "Cargando los resultados de la ecuación!"
      )}
    </main>
  );
};
