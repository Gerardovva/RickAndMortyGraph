import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Characters } from '@app/shared/interface/data.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent {

  @Input() charac!: Characters;;

  getIcon(): string  {

    return this.charac.isFavorite ? 'heart-solid.svg' : 'heart.svg'
  }

  toggleFavorite(): void {
    const isFavorite = this.charac.isFavorite;
    this.getIcon();
    this.charac.isFavorite = !isFavorite;

  }

}
