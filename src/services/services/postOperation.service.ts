import { BASE_URL_API } from "../../constants/BASE_URL_API";
import { OperationContextEntity } from "../../entities";
import { postApi } from "../api/postApi";

export const postOperationService = async (data: OperationContextEntity) => {
  try {
    const res = await postApi(BASE_URL_API, data);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
