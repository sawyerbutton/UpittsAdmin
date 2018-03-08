import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { MatIconModule, MatSidenavModule, MatCardModule } from '@angular/material';

import { LayoutComponent } from '../layout.component';
import { HeadBarComponent } from '../head-bar/head-bar.component';
import { SysLevelComponent } from '../left-nav/sys-level/sys-level.component';
import { StaLevelComponent } from '../left-nav/sta-level/sta-level.component';
import { ComLevelComponent } from '../left-nav/com-level/com-level.component';
import { BhcoLevelComponent } from '../left-nav/bhco-level/bhco-level.component';
import { MemLevelComponent } from '../left-nav/mem-level/mem-level.component';
import { FooterComponent } from '../left-nav/footer/footer.component';
import { UserInfoComponent } from '../left-nav/user-info/user-info.component';
import { HeaderComponent } from '../head-bar/header/header.component';
import { LeftNavComponent} from '../left-nav/left-nav.component';
import { CreateAccountComponent } from '../workspace/sys-admin/create-account/create-account.component';
import { EqualValidatorDirective } from '../workspace/equal-validator/equal-validator.directive'
import { CreateComComponent } from '../workspace/sta-admin/create-com/create-com.component'
import { CreateCMemComponent } from '../workspace/com-admin/create-c-mem/create-c-mem.component'
import { CreateFamilyComponent } from '../workspace/com-admin/create-family/create-family.component'
import { WorkspaceComponent } from '../workspace/workspace.component'
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: [
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
    LeftNavComponent,
    CreateAccountComponent,
    CreateComComponent,
    EqualValidatorDirective,
    CreateCMemComponent,
    CreateFamilyComponent,
    WorkspaceComponent
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class LayoutModule { }
