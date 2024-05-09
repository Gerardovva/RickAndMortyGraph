import { DataService } from './../../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters$ = this.dataService.characters$;


  constructor(private dataService: DataService) { }
  ngOnInit(): void {
  }
}
