import { LogService } from "./log.service";

export class DevelopLogService extends LogService {
    saveLog() {
        console.log('this is develop log');
    }

}