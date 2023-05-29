import { AxiosResponse } from "axios";
import api from "shared/api/v1";
import { App } from "../types";

const getApps = async (): Promise<AxiosResponse<App[]>> => {
  return api.get<App[]>("v1/interfaces/");
};

export default getApps;
