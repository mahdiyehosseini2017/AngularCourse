import { LogService } from "./log.service";

export class ReleaseLogService extends LogService {
    saveLog() {
        console.log('this is release log service');
    }
}