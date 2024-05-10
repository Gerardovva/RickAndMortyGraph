
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Characters } from '@app/shared/interface/data.interface';
import { LocalStorageservice } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent {

  @Input() charac!: Characters;

  constructor(private localstorageServe: LocalStorageservice) { }

  getIcon(): string {

    return this.charac.isFavorite ? 'heart-solid.svg' : 'heart.svg'
  }

  toggleFavorite(): void {
    const isFavorite = this.charac.isFavorite;
    this.getIcon();
    this.charac.isFavorite = !isFavorite;
    this.localstorageServe.addOremovefavorite(this.charac)

  }

}
