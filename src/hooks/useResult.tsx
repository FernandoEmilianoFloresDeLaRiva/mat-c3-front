import { useEffect, useState } from "react";
import { OperationContextEntity, ResultOperationDTO } from "../entities";
import { postOperationService } from "../services/services/postOperation.service";

export const useResult = (reqOperation: OperationContextEntity) => {
  const [data, setData] = useState<[ResultOperationDTO]>(
    [] as unknown as [ResultOperationDTO]
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
