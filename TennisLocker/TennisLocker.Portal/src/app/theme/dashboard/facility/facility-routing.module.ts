import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FacilityBoardComponent } from "./facility.component";


const routes: Routes = [
    {
        path: "",
        component: FacilityBoardComponent,
        data: {
            title: "Facility Dashboard",
            icon: "icon-home",
            caption: "lorem ipsum dolor sit amet, consectetur adipisicing elit",
            status: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacilityBoardRoutingModule { }
