

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [GoogleMapComponent],
  imports: [CommonModule],
  exports: [GoogleMapComponent] // If you want to export it for use in other modules
})
export class GoogleMapModule {}
