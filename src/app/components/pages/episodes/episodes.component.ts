import { Component } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-episodes',
  template: `<section class="container">
              <ul class="episodes__list">
                  <li *ngFor="let episode of espisode$ | async ">
                      {{ episode.episode }} - {{ episode.name }}
                  </li>
              </ul>
            </section>`,
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {

  espisode$ = this.dataService.episode$;

  constructor(private dataService: DataService) { }

}
