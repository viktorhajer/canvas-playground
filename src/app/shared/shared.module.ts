import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [CommonModule, FormsModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, MatMenuModule, MatIconModule,
    MatTableModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatButtonModule, MatBadgeModule,
    MatTooltipModule, MatDialogModule, MatTabsModule, MatSnackBarModule, MatSliderModule],
  entryComponents: []
})
export class SharedModule {
}
