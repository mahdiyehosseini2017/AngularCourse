import { LogService } from "./log.service";

export class DevelopLogService implements LogService {
    saveLog() {
        console.log('this is develop log');
    }

}