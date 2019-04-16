import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

const EMPTY_LIMIT = {min: 0, max: 0};

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['settings-form.component.scss']
})
export class SettingsFormComponent implements OnChanges {

  @Input() capabilitiesString: string;
  @Input() settingsString: string;
  @Output() applyChanges = new EventEmitter();

  capabilities: any;
  facingMode: string;
  resizeMode: string;
  frameRate: number;
  aspectRatio: number;
  width: number;
  height: number;

  facingModeEnabled = false;
  resizeModeEnabled = false;
  frameRateEnabled = false;
  aspectRatioEnabled = false;
  widthEnabled = true;
  heightEnabled = false;

  ngOnChanges() {
    if (!!this.capabilitiesString && !!this.settingsString) {
      this.capabilities = JSON.parse(this.capabilitiesString);
      const settings = JSON.parse(this.settingsString);

      this.facingMode = settings['facingMode'];
      this.resizeMode = settings['resizeMode'];
      this.frameRate = settings['frameRate'];
      this.aspectRatio = settings['aspectRatio'];
      this.width = settings['width'];
      this.height = settings['height'];
    } else {
      this.capabilities = null;
    }
  }

  toggleFlag(flag: string) {
    this[flag] = !this[flag];
  }

  hasFacingMode(): boolean {
    return this.hasCapability('facingMode') && !!this.capabilities['facingMode'].length;
  }

  getFacingModes(): string[] {
    return this.hasFacingMode() ? this.capabilities['facingMode'] : [];
  }

  hasResizeMode(): boolean {
    return this.hasCapability('resizeMode') && !!this.capabilities['resizeMode'].length;
  }

  getResizeModes(): string[] {
    return this.hasResizeMode() ? this.capabilities['resizeMode'] : [];
  }

  hasFrameRate(): boolean {
    return this.hasCapability('frameRate');
  }

  getFrameRateLimit(): { min: number, max: number } {
    return this.hasFrameRate() ? this.capabilities['frameRate'] : EMPTY_LIMIT;
  }

  hasAspectRatio(): boolean {
    return this.hasCapability('aspectRatio');
  }

  getAspectRatioLimit(): { min: number, max: number } {
    return this.hasAspectRatio() ? this.capabilities['aspectRatio'] : EMPTY_LIMIT;
  }

  hasWidth(): boolean {
    return this.hasCapability('width');
  }

  getWidthLimit(): { min: number, max: number } {
    return this.hasWidth() ? this.capabilities['width'] : EMPTY_LIMIT;
  }

  hasHeight(): boolean {
    return this.hasCapability('height');
  }

  getHeightLimit(): { min: number, max: number } {
    return this.hasHeight() ? this.capabilities['height'] : EMPTY_LIMIT;
  }

  applySettings() {
    const constraints = <MediaTrackConstraints>{};
    if (this.hasFacingMode() && this.facingModeEnabled) {
      constraints['facingMode'] = this.facingMode;
    }
    if (this.hasResizeMode() && this.resizeModeEnabled) {
      constraints['resizeMode'] = this.resizeMode;
    }
    if (this.hasFrameRate() && this.frameRateEnabled) {
      constraints['frameRate'] = this.frameRate;
    }
    if (this.hasAspectRatio() && this.aspectRatioEnabled) {
      constraints['aspectRatio'] = this.aspectRatio;
    }
    if (this.hasWidth() && this.widthEnabled) {
      constraints['width'] = this.width;
    }
    if (this.hasHeight() && this.heightEnabled) {
      constraints['height'] = this.height;
    }
    this.applyChanges.emit(constraints);
  }

  private hasCapability(field: string): boolean {
    return !!this.capabilities && !!this.capabilities[field];
  }
}
