import { ReactNode, useState } from "react";
import { OperationContext } from "./operation.context";
import { OperationContextEntity } from "../../entities/OperationContext.entity";

interface Props {
  children: ReactNode;
}

export const OperationProvider: React.FC<Props> = ({ children }) => {
  const [operationData, setOperation] = useState<OperationContextEntity>({
    operation: "",
    limiteA: 0,
    limiteB: 0,
  });

  const addOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setOperation((prevOperation: OperationContextEntity) => {
      return {
        ...prevOperation,
        operation: prevOperation.operation.concat(value),
      };
    });
  };

  const removeOperation = () => {
    if (operationData.operation === "") return;
    setOperation((prevOperation: OperationContextEntity) => {
      return {
        ...prevOperation,
        operation: prevOperation.operation.substring(
          0,
          prevOperation.operation.length - 1
        ),
      };
    });
  };

  const addLimit = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setOperation((prevOperation: OperationContextEntity) => {
      return {
        ...prevOperation,
        [name]: parseInt(value, 10),
      };
    });
  };
  
  return (
    <OperationContext.Provider
      value={{ operationData, addOperation, removeOperation, addLimit }}
    >
      {children}
    </OperationContext.Provider>
  );
};
