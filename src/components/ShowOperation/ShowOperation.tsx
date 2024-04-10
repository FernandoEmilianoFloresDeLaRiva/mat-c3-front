import styles from "./ShowOperation.module.css";

interface Props {
  result: string;
}

export const ShowOperation: React.FC<Props> = ({ result }) => {
  return <div className={styles.container}>{result}</div>;
};
