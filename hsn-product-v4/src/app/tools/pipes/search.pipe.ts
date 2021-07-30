import { Pipe, PipeTransform } from "@angular/core";
import Fuse from "fuse.js";

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(collection: any, searchItem: string[], searchToken: string): any {
        if (searchToken === '') {
            return collection;
        }
        const options = {
            includeScore: true,
            keys: searchItem
        };
        const fuse = new Fuse(collection, options)

        let filters = fuse.search(searchToken);
        return filters.map(c => c.item);
    }

}