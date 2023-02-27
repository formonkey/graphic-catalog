import { Component, HostListener, OnInit } from '@angular/core';

import { CatalogService } from '../services';

@Component({
    templateUrl: './catalog.component.html',
    styleUrls: [ './catalog.component.scss', ],
})

export class CatalogComponent implements OnInit {
    private page: number = 1;
    private called: boolean = false;

    constructor(
        private readonly service: CatalogService,
    ) {
    }

    public ngOnInit(): void {
        this.service.retrieveResults();
        this.service.retrieveCategories();

        this.service.results$.subscribe((val: any[]) => {
            this.called = false;
        });
    }

    @HostListener('window:scroll', [ '$event' ])
    public onScroll(): void {
        const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
        const windowBottom = windowHeight + window.pageYOffset;

        const body = document.body, html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (windowBottom >= docHeight - 500 && !this.called) {
            this.called = true;

            setTimeout(() => {
                this.page++;
                this.service.retrieveResultsByPage(this.page);
            }, 1000);
        }
    }
}
