import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { WriteLogService } from "./write-log.service";

@Injectable()
export class ReleaseLogService extends LogService {

    constructor(private writer: WriteLogService){
        super();
    }
    saveLog() {
        this.writer.writeConsole('this is release log service');
    }
}