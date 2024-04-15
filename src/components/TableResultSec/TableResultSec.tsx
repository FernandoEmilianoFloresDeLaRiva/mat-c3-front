import { SecanteDTO } from "../../entities/Secante.entity";
import styles from "./TableResultSec.module.css";

interface Props {
  methodName: string;
  data: SecanteDTO[];
  theadName: string[];
}

export const TableResultSec: React.FC<Props> = ({
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
                  <td>{actualData?.xiMenos}</td>
                  <td>{actualData?.xi}</td>
                  <td>{actualData?.xiMas}</td>
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
