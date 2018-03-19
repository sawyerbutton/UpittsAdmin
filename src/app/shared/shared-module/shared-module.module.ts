import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatButtonModule, MatDividerModule,
  MatIconModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatRadioModule, MatSortModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserModule} from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatChipsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    //RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    //BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatChipsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    //RouterModule,
    FormsModule
  ]
})
export class SharedModuleModule { }
