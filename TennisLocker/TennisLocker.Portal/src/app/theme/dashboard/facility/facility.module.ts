import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../../shared/shared.module";
import { FacilityBoardComponent } from "./facility.component";
import { FacilityBoardRoutingModule } from "./facility-routing.module";




@NgModule({
    imports: [
        CommonModule,
        FacilityBoardRoutingModule,
        SharedModule

    ],
    declarations: [
        FacilityBoardComponent
    ],
    bootstrap: [FacilityBoardComponent]
})
export class FacilityBoardModule { }
