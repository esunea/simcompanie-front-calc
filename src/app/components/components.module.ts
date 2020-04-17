import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CardPriceComponent } from './card-price/card-price.component';


const COMPONENTS = [
  CardPriceComponent
];

const MODALS = [
];

@NgModule({
  declarations: [
    COMPONENTS,
    MODALS,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    COMPONENTS,
    MODALS
  ],
  entryComponents: [MODALS],
  providers: [
  ]
})
export class ComponentsModule { }
