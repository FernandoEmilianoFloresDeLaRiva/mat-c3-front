import { BiseccionAndFalseDTO } from "../../entities";
import styles from "./TableResult..module.css";

interface Props {
  methodName: string;
  data: BiseccionAndFalseDTO[];
  theadName: string[];
}

export const TableResult: React.FC<Props> = ({
  methodName,
  data,
  theadName,
}) => {
  return (
    <div className={styles.container}>
      <span>{methodName}</span>
      <table>
        <thead>
          <tr>
            {theadName.map((thead) => {
              return <th key={thead}>{thead}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((actualData) => {
            return (
              <>
                <tr key={actualData?.raíz}>
                  <td>{actualData?.raíz}</td>
                  <td>{actualData?.limiteA}</td>
                  <td>{actualData?.limiteB}</td>
                  <td>{actualData?.nuevoIntervaloMultiplicacion}</td>
                  <td>{actualData?.error}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
