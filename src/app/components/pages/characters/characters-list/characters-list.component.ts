
import { Component } from '@angular/core';

import { DataService } from './../../../../shared/services/data.service';
import { LocalStorageservice } from '@app/shared/services/localStorage.service';


@Component({
  selector: 'app-characters-list',
  template: `
            <section class="character__list">
              <app-characters-card *ngFor="let char of characters$ | async" [charac]="char"></app-characters-card>
            </section>`,
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {

  characters$ = this.dataService.characters$;


  constructor(
    private dataService: DataService,
    private localStorageservice:LocalStorageservice,
  ) { }





}
