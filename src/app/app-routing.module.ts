import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'character-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'episode', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: 'character-list', loadChildren: () => import('./components/pages/characters/characters-list/characters-list.module').then(m => m.CharactersListModule) },
  { path: 'character-details:id', loadChildren: () => import('./components/pages/characters/characters-datils/characters-datils.module').then(m => m.CharactersDatilsModule) },
  { path: 'about', loadChildren: () => import('./components/pages/about/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('./components/pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
