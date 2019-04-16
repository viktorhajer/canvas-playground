import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

const NOTIFICATIONS_LIFESPAN_INFO = 3000;
const NOTIFICATIONS_LIFESPAN_ERROR = 5000;

@Injectable({providedIn: 'root'})
export class MessageService {

  constructor(private snackBar: MatSnackBar) {}

  info(message: string) {
    this.snackBar.open(message, '', {
      duration: NOTIFICATIONS_LIFESPAN_INFO,
    });
  }

  error(message: string) {
    this.snackBar.open(message, '', {
      duration: NOTIFICATIONS_LIFESPAN_ERROR,
    });
  }
}