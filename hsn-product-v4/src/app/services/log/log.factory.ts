import { environment } from "src/environments/environment";
import { DevelopLogService } from "./develop-log.service";
import { LogService } from "./log.service";
import { ReleaseLogService } from "./release-log.service";
import { WriteLogService } from "./write-log.service";

export function createLogService(writer: WriteLogService): LogService {
    if (environment.production) {
        return new ReleaseLogService(writer);
    }
    return new DevelopLogService(writer);
}