import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './pages/main/main.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
const routes: Routes = [
  {
    path: 'principal',
    component: MainComponent
  },
  {
    path: 'ejemplo',
    component: EjemploComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
