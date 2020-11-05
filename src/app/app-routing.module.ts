import { ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemestreComponent } from './components/semestre/semestre.component';

const routes: Routes = [
  {path: 'semestre', component:SemestreComponent}
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
export const appRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

/*export class AppRoutingModule { } */
