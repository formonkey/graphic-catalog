import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './bootstrap.component.html',
    styleUrls: [ './bootstrap.component.scss', ],
})

export class BootstrapComponent implements OnInit {
    constructor(
        private readonly router: Router
    ) {
    }

    public ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }
}
