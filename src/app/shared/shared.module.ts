import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [CommonModule, FormsModule, MatSelectModule,
    MatInputModule, MatTableModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatButtonModule, MatBadgeModule,
    MatDialogModule, MatTabsModule, MatSnackBarModule, MatSliderModule],
  entryComponents: []
})
export class SharedModule {
}
