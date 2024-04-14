import styles from "./LimitInput.module.css";

interface Props {
  placeholderName: string;
  name: string;
  eventOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const LimitInput: React.FC<Props> = ({
  placeholderName,
  name,
  eventOnChange,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={placeholderName}>Ingrese {placeholderName}</label>
      <input
        required
        type="number"
        placeholder={placeholderName}
        id={placeholderName}
        name={name}
        onChange={eventOnChange}
      />
    </div>
  );
};
