import { environment } from "src/environments/environment";
import { DevelopLogService } from "./develop-log.service";
import { LogService } from "./log.service";
import { ReleaseLogService } from "./release-log.service";

export function createLogService(): LogService {
    if (environment.production) {
        return new ReleaseLogService();
    }
    return new DevelopLogService();
}