import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EspeDatePipe } from './pipes/espe-date.pipe';
import { EspeDatetimePipe } from './pipes/espe-datetime.pipe';
import { EspeAvatarComponent } from './components/espe-avatar/espe-avatar.component';
import { StatusHighlightDirective } from './directives/status-highlight.directive';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UserAvatarComponent,
    LoadingComponent,
    EspeDatePipe,
    EspeDatetimePipe,
    EspeAvatarComponent,
    StatusHighlightDirective,
    ConfirmationModalComponent
  ],
  exports: [
    UserAvatarComponent,
    EspeDatePipe,
    EspeAvatarComponent,
    LoadingComponent,
    StatusHighlightDirective
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class SharedModule {}
