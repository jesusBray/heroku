import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
//my components
import { LayoutComponent } from "./layout.component";
import { ImageHandlerComponent } from './image-handler/image-handler.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ImageHandlerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
