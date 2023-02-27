import { BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { GQL } from '../constants';

@Injectable()
export class DetailService {
    private readonly data = new BehaviorSubject<any>([]);
    public data$ = this.data.asObservable();

    constructor(
        private readonly apollo: Apollo,
    ) {
    }

    public retrieveData(id: number): void {
        this.apollo.watchQuery({
            query: GQL.DETAIL,
            variables: {
                id,
            },
        }).valueChanges.subscribe((result: any) => {
            this.data.next(result.data.graphic);
        });
    }
}
