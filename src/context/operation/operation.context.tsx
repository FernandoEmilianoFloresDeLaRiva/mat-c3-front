import { createContext } from "react";
import { OperationContextEntity } from "../../entities/OperationContext.entity";

export const OperationContext = createContext<{
  operationData: OperationContextEntity;
  addOperation: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  removeOperation: () => void;
  addLimit: (_e: React.FormEvent<HTMLInputElement>) => void;
}>({
  operationData: {
    ecuacion: "",
    limiteA: 0,
    limiteB: 0,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addOperation: (_e: React.MouseEvent<HTMLButtonElement>): void => {},
  removeOperation: (): void => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addLimit: (_e: React.FormEvent<HTMLInputElement>): void => {},
});
