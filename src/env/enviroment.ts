import {dev} from "./dev";
import {prod} from "./prod";

export interface AppEnvironment {
    PRELOADER_WAIT_TIME: number;
}

export const appConfig = process.env.NODE_ENV === "development" ? dev : prod;