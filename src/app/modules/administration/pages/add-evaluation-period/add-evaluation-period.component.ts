import { Component, OnInit } from '@angular/core';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
@Component({
  selector: 'vex-add-evaluation-period',
  templateUrl: './add-evaluation-period.component.html',
  styleUrls: ['./add-evaluation-period.component.scss'],
  animations: [fadeInUp400ms, stagger40ms]
})
export class AddEvaluationPeriodComponent implements OnInit {
  currentMenuLabel: string = 'Nuevo periodo de seguimiento';


  constructor() {}

  ngOnInit(): void {}
}
