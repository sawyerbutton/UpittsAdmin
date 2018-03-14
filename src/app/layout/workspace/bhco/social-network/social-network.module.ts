import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModuleModule} from '../../../../shared/shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {socialNetworkRoutes} from './social-network.routes';
import {SocialNetworkAnswerGroupComponent} from './social-network-answer-group/social-network-answer-group.component';
import {SocialNetworkComponent} from './social-network.component';
import {InputControlBoxModule} from '../../../../shared/input-box/input-control-box/input-control-box.module';
import {SelectControlBoxModule} from '../../../../shared/select-box/select-control-box/select-control-box/select-control-box.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    InputControlBoxModule,
    SelectControlBoxModule,
    RouterModule.forChild(socialNetworkRoutes)
  ],
  declarations: [
    SocialNetworkComponent,
    SocialNetworkAnswerGroupComponent
  ]
})
export class SocialNetworkModule { }
