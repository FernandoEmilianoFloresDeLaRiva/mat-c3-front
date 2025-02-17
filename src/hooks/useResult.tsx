import { useEffect, useState } from "react";
import { BiseccionAndFalseDTO, OperationContextEntity } from "../entities";
import { postOperationService } from "../services/services/postOperation.service";
import { SecanteDTO } from "../entities/Secante.entity";
import { NewtonEntity } from "../entities/Newton.entity";

export const useResult = (reqOperation: OperationContextEntity) => {
  const [data, setData] = useState<
    [BiseccionAndFalseDTO[], BiseccionAndFalseDTO[], SecanteDTO[], NewtonEntity[]]
  >(
    [] as unknown as [
      BiseccionAndFalseDTO[],
      BiseccionAndFalseDTO[],
      SecanteDTO[],
      NewtonEntity[]
    ]
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (
      !reqOperation.ecuacion ||
      !reqOperation.limiteA ||
      !reqOperation.limiteB
    )
      return;
    setIsLoading(true);
    postOperationService(reqOperation)
      .then((res) => {
        setData(res);
      })
      .finally(() => setIsLoading(false));
  }, [reqOperation]);
  return { data, isLoading };
};
