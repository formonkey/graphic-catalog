import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DetailService } from '../services';

@Component({
    templateUrl: './detail.component.html',
    styleUrls: [ './detail.component.scss', ],
})

export class DetailComponent implements OnInit {
    public data: any;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly service: DetailService,
    ) {
    }

    public ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');

        if (id) {
            this.service.retrieveData(+id);
        }

        this.service.data$.subscribe((data: any) => {
            console.log('Detail', data);
            this.data = data;
        });
    }

    public goBack(): void {
        window.history.back();
    }
}
