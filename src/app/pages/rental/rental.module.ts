import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RentalRoutingModule} from './rental-routing.module';
import {RentalComponent} from './rental.component';

@NgModule({
    declarations: [
        RentalComponent,
    ],
    imports: [
        CommonModule,
        RentalRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
export class RentalModule {
}
