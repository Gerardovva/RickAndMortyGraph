
import { Component } from '@angular/core';
import { LocalStorageservice } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  characters$ = this.localStorageServi.charactersfav$;

  constructor(private localStorageServi: LocalStorageservice) { }



}
