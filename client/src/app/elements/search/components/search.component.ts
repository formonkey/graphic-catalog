import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.scss', ],
})

export class SearchComponent {
    @Output() public search: EventEmitter<string> = new EventEmitter();

    public onInput(e: any): void {
        this.search.emit(e.target.value);
    }
}
