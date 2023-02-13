import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { AddEvaluationPeriodComponent } from 'src/app/modules/administration/pages/add-evaluation-period/add-evaluation-period.component';

const routes: VexRoutes = [

  {
    path: 'periodos-seguimiento',
    component: AddEvaluationPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
