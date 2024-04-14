import { Suspense, useContext } from "react";
import styles from "./Result.module.css";
import { OperationContext } from "../../../context/operation/operation.context";
import { useResult } from "../../../hooks/useResult";

export const Result = () => {
  const { operationData } = useContext(OperationContext);
  const { data, isLoading } = useResult(operationData);
  return (
    <div>
      {!isLoading ? (
        <Suspense fallback = {"Cargando tablas..."}>
          <div>
            <span>Método de Bisección</span>
          </div>
          <div>
            <span>Método de Falsa Posición</span>
          </div>
          <div>
            <span>Método de Secante</span>
          </div>
        </Suspense>
      ) : (
        "Cargando los resultados de la ecuación!"
      )}
    </div>
  );
};
