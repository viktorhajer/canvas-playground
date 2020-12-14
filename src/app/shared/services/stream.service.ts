import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StreamService {
  streams: MediaStream[] = [];

  setStream(stream: MediaStream) {
    if (this.isIncluded(stream)) {
      this.streams = this.streams.filter(s => s.id !== stream.id);
    } else {
      this.streams.push(stream);
    }
  }

  isIncluded(stream: MediaStream): boolean {
    return this.streams.some(s => s.id === stream.id);
  }

  getNumberOfStreams(): number {
    return this.streams.length;
  }
}
