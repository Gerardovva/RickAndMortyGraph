import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDatilsComponent } from './characters-datils.component';

const routes: Routes = [{ path: '', component: CharactersDatilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersDatilsRoutingModule { }
