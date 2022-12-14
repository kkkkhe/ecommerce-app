import { viewerModel } from "@/entities/session";

import { IData } from "./types";

export const checkUpdate = (data: any, profile: any) =>
  Object.keys(data).some((item) => data[item] != profile[item]);
