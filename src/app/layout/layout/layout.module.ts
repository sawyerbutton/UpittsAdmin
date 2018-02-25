import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { MatIconModule, MatSidenavModule, MatCardModule } from '@angular/material';

import { LeftNavComponent} from '../left-nav/left-nav.component';
import { HeadBarComponent } from '../head-bar/head-bar.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { FooterComponent } from '../left-nav/footer/footer.component';

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
    LeftNavComponent,
    HeadBarComponent,
    WorkspaceComponent,
    FooterComponent
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
