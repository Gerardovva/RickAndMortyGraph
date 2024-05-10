import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';
import { Characters, DataResponse, Episode } from '../interface/data.interface';

const QUERY = gql`
{
  episodes{
    results{
      name
      episode
    }
  }
  characters {
    results {
      id
      name
      status
      species
      gender
      image
    }
  }

}
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private episodeSubject = new BehaviorSubject<Episode[]>([]);
  episode$ = this.episodeSubject.asObservable();


  private charactersSubjext = new BehaviorSubject<Characters[]>([]);
  characters$ = this.charactersSubjext.asObservable();

  constructor(private apollo: Apollo) {
    this.getDataApi();
  }


  private getDataApi(): void {
    this.apollo.watchQuery<DataResponse>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { characters, episodes } = data
        this.charactersSubjext.next(characters.results)
        this.episodeSubject.next(episodes.results);
        // console.log("Respuesta del service",this.characters$)
      })
    ).subscribe();
  }


}//cierre class
