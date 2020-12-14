import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {StreamService} from './stream.service';

@Injectable({providedIn: 'root'})
export class StreamGuard implements CanActivate {

  constructor(private streamService: StreamService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.streamService.streams.length) {
      this.router.navigate(['devices']);
      return false;
    }
    return true;
  }
}
