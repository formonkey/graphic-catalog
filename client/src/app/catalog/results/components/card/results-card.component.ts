import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-results-card',
    templateUrl: './results-card.component.html',
    styleUrls: [ './results-card.component.scss', ],
})

export class ResultsCardComponent {
    @Input() public data: any;

    constructor(
        private readonly router: Router,
    ) {
    }

    public goToDeatail(): void {
        console.log('go to detail', this.data.id);
        this.router.navigate([ this.data.id ]);
    }
}
