import {RouterModule} from '@angular/router';
import {bhcoWorkSpaceRoutes} from './bhco.routes';
import {NgModule} from '@angular/core';
import {QuestionService} from '../../../shared/shared-control/question.service';
import {QuestionControlService} from '../../../shared/shared-control/question-control.service';
import {SharedModuleModule} from '../../../shared/shared-module/shared-module.module';
import {BhcoLevelComponent} from './bhco-level.component';
import {CommonModule} from '@angular/common';
import {HeaderModule} from '../../head-bar/header/header/header.module';
import {UserInfoModule} from '../user-info/user-info/user-info.module';
import {FooterComponent} from '../footer/footer.component';


@NgModule( {
  imports: [
    SharedModuleModule,
    CommonModule,
    HeaderModule,
    UserInfoModule,
    RouterModule.forChild(bhcoWorkSpaceRoutes)
  ],
  exports: [],
  declarations: [
    BhcoLevelComponent,
    FooterComponent
  ],
  providers: [QuestionControlService, QuestionService],
  }
)
export class BhcoModule{}
