import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDatilsRoutingModule } from './characters-datils-routing.module';
import { CharactersDatilsComponent } from './characters-datils.component';


@NgModule({
  declarations: [
    CharactersDatilsComponent
  ],
  imports: [
    CommonModule,
    CharactersDatilsRoutingModule
  ]
})
export class CharactersDatilsModule { }
