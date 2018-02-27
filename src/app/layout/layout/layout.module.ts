import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { MatIconModule, MatSidenavModule, MatCardModule } from '@angular/material';

import { LayoutComponent } from '../layout.component';
import { HeadBarComponent } from '../head-bar/head-bar.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { SysLevelComponent } from '../left-nav/sys-level/sys-level.component'
import { StaLevelComponent } from '../left-nav/sta-level/sta-level.component'
import { ComLevelComponent } from '../left-nav/com-level/com-level.component'
import { BhcoLevelComponent } from '../left-nav/bhco-level/bhco-level.component'
import { MemLevelComponent } from '../left-nav/mem-level/mem-level.component'
import { FooterComponent } from '../left-nav/footer/footer.component'
import { UserInfoComponent } from '../left-nav/user-info/user-info.component'
import { HeaderComponent } from '../head-bar/header/header.component'
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
    WorkspaceComponent,
    LayoutComponent,
    SysLevelComponent,
    StaLevelComponent,
    ComLevelComponent,
    BhcoLevelComponent,
    MemLevelComponent,
    FooterComponent,
    UserInfoComponent,
    HeaderComponent
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
