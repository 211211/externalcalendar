import { AfterViewInit, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CurrentFacilityService } from "../../../../services/current.facility.service";

@Component({
    selector: "app-facility-board",
    templateUrl: "./facility.component.html",
    styleUrls: ["./facility.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class FacilityBoardComponent implements OnInit, AfterViewInit
{
    public facilityId = "";

  
    constructor(public activatedRoute: ActivatedRoute,
        public currentFacilityService: CurrentFacilityService
        )
    { // private servicePNotify: NotificationsService
    }

    ngOnInit()
    {
        this.activatedRoute.params.subscribe(params =>
        {
            this.facilityId = params["facilityId"];
            console.log("this.facilityId " + this.facilityId);
            this.currentFacilityService.SetFacilityId(this.facilityId);
        });
    }

    ngAfterViewInit()
    {
        
    }

}
