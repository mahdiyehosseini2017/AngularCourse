import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";
import { SortDirectionEnum } from "../enums/sort-direction.enum";

@Pipe({
    name: 'sortPipe'
})
export class SortPipe implements PipeTransform {
    transform(collection: any, sortItem: string, direction: SortDirectionEnum): any {
        return _.orderBy(collection, sortItem, direction == SortDirectionEnum.Ascending ? 'asc' : 'desc');
    }

}