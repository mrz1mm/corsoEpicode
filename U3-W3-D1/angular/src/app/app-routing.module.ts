import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'chiSiamo',
    loadChildren: () =>
      import('./pages/chi-siamo/chi-siamo.module').then(
        (m) => m.ChiSiamoModule
      ),
  },
  {
    path: 'contatti',
    loadChildren: () =>
      import('./pages/contatti/contatti.module').then((m) => m.ContattiModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'postNotActived',
    loadChildren: () =>
      import('./pages/post-not-actived/post-not-actived.module').then(
        (m) => m.PostNotActivedModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
