import { useState } from "react";

export const useOperation = () => {
  const [operation, setOperation] = useState<string>("");
  const addOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.target?.value;
    setOperation((prevOperation: string) => (prevOperation += value));
  };
  const removeOperation = () => {
    if (operation === "") return;
    setOperation((prevOperation: string) =>
      prevOperation.substring(0, prevOperation.length - 1)
    );
  };
  return {
    operation,
    addOperation,
    removeOperation,
  };
};
