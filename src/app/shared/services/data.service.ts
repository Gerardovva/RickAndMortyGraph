import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';

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
      origin {
        name
      }
      location{
        name
      }
      image
    }
  }

}
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private episodeSubject = new BehaviorSubject<any[]>([]);
  episode$ = this.episodeSubject.asObservable();


  private charactersSubjext = new BehaviorSubject<any[]>([]);
  characters$ = this.charactersSubjext.asObservable();

  constructor(private apollo: Apollo) {
    this.getDataApi();
  }


  private getDataApi(): void {
    this.apollo.watchQuery<any>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { characters, episodes } = data
        this.episodeSubject.next(episodes.results);
        this.charactersSubjext.next(characters.results)
      })
    ).subscribe();
  }


}//cierre class
