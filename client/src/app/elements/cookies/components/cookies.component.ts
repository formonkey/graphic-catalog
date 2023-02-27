import { Component } from '@angular/core';

@Component({
    selector: 'app-cookies',
    templateUrl: './cookies.component.html',
    styleUrls: [ './cookies.component.scss', ],
})

export class CookiesComponent {
    public show: boolean = true;

    public close(): void {
        this.show = false;
    }
}
