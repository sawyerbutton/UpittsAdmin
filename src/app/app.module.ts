import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// import modules
import { MatButtonModule, MatDividerModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';

// import component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SysLoginComponent } from './login/sys-login/sys-login.component';
import { BhcoLoginComponent } from './login/non-sys-login/bhco-login/bhco-login.component';
import { MemberLoginComponent } from './login/non-sys-login/member-login/member-login.component';
import { ForgotPwdComponent } from './login/forgot-pwd/forgot-pwd.component';
import { HeadBarComponent } from './layout/head-bar/head-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { SysLevelComponent } from './layout/left-nav/sys-level/sys-level.component';
import { StaLevelComponent } from './layout/left-nav/sta-level/sta-level.component';
import { ComLevelComponent } from './layout/left-nav/com-level/com-level.component';
import { BhcoLevelComponent } from './layout/left-nav/bhco-level/bhco-level.component';
import { MemLevelComponent } from './layout/left-nav/mem-level/mem-level.component';
import { FooterComponent } from './layout/left-nav/footer/footer.component';
import { UserInfoComponent } from './layout/left-nav/user-info/user-info.component';
import { HeaderComponent } from './layout/head-bar/header/header.component';
import { CreateAccountComponent } from './layout/workspace/sys-admin/create-account/create-account.component';
import { CreateComComponent } from './layout/workspace/sta-admin/create-com/create-com.component';
import { CreateCMemComponent } from './layout/workspace/com-admin/create-c-mem/create-c-mem.component';
import { CreateFamilyComponent } from './layout/workspace/com-admin/create-family/create-family.component';
import { CreateBhcoComponent } from './layout/workspace/com-admin/create-bhco/create-bhco.component';
import { DemographicComponent } from './layout/workspace/bhco/demographic/demographic.component'
import { WorkspaceComponent } from './layout/workspace/workspace.component';
import { SocialNetworkComponent } from './layout/workspace/bhco/social-network/social-network.component';
import { SocialNetworkAnswerGroupComponent } from './layout/workspace/bhco/social-network/social-network-answer-group/social-network-answer-group.component';

// import route
//import { appRoutes } from './app.routes';

// import directives
import { EqualValidatorDirective } from './layout/workspace/equal-validator/equal-validator.directive';
import { InputControlBoxComponent } from './shared/input-box/input-control-box/input-control-box.component';
import { SelectControlBoxComponent } from './shared/select-box/select-control-box/select-control-box.component';
import { DemoQuestionsComponent } from './layout/workspace/bhco/demographic/demo-questions/demo-questions.component';
import { QuestionControlService} from './shared/shared-control/question-control.service';
import { QuestionService} from './shared/shared-control/question.service';
import { RadioControlBoxComponent } from './shared/radio-box/radio-control-box/radio-control-box.component';
import { AppRoutingModule } from './/app-routing.module';
import {BhcoModule} from './layout/left-nav/bhco-level/bhco.module';
import {SharedModuleModule} from './shared/shared-module/shared-module.module';
import { InputDateBoxComponent } from './shared/input-box/input-date-box/input-date-box.component';
import { InputDefaultBoxComponent } from './shared/input-box/input-default-box/input-default-box.component';
import {HeaderModule} from './layout/head-bar/header/header/header.module';
import {UserInfoModule} from './layout/left-nav/user-info/user-info/user-info.module';
import {InputControlBoxModule} from './shared/input-box/input-control-box/input-control-box.module';
import {InputDefaultBoxModule} from './shared/input-box/input-default-box/input-default-box/input-default-box.module';
import {SelectControlBoxModule} from './shared/select-box/select-control-box/select-control-box/select-control-box.module';
import {InputDateBoxModule} from './shared/input-box/input-date-box/input-date-box.module';
import {RadioControlBoxModule} from './shared/radio-box/radio-control-box/radio-control-box/radio-control-box.module';
import { PhysicalDomainComponent } from './layout/workspace/bhco/questionnaire/physical-domain/physical-domain.component';
import { SinglePhyQuestionComponent } from './layout/workspace/bhco/questionnaire/physical-domain/single-phy-question/single-phy-question.component';
import { InputCheckBoxComponent } from './shared/input-box/input-check-box/input-check-box.component';
// import pipe


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SysLoginComponent,
    BhcoLoginComponent,
    MemberLoginComponent,
    ForgotPwdComponent,
    HeadBarComponent,
    LayoutComponent,
    SysLevelComponent,
    StaLevelComponent,
    ComLevelComponent,
    BhcoLevelComponent,
    MemLevelComponent,
    FooterComponent,
    UserInfoComponent,
    HeaderComponent,
    CreateAccountComponent,
    EqualValidatorDirective,
    CreateComComponent,
    CreateCMemComponent,
    CreateFamilyComponent,
    CreateBhcoComponent,
    DemographicComponent,
    SocialNetworkComponent,
    SocialNetworkAnswerGroupComponent,
    DemoQuestionsComponent,
    WorkspaceComponent,
    InputControlBoxComponent,
    SelectControlBoxComponent,
    RadioControlBoxComponent,
    InputDateBoxComponent,
    InputDefaultBoxComponent,
    PhysicalDomainComponent,
    SinglePhyQuestionComponent,
    InputCheckBoxComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SharedModuleModule,
    //HeaderModule,
    //UserInfoModule,
    //InputControlBoxModule,
    //InputDefaultBoxModule,
    //SelectControlBoxModule,
    //InputDateBoxModule,
    //RadioControlBoxModule,
    //BhcoModule,
    AppRoutingModule
  ],
  providers: [QuestionControlService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
