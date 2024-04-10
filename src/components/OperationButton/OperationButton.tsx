import styles from "./OperationButton.module.css";

interface Props {
  valueButton: string;
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const OperationButton: React.FC<Props> = ({
  valueButton,
  onClickEvent,
}) => {
  return (
    <button
      value={valueButton}
      className={styles.button}
      onClick={onClickEvent}
    >
      {valueButton}
    </button>
  );
};
