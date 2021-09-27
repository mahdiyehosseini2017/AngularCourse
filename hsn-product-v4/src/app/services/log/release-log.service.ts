import { LogService } from "./log.service";

export class ReleaseLogService implements LogService {
    saveLog() {
        console.log('this is release log service');
    }
}