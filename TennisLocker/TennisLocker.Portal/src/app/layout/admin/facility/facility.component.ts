import { Component, OnDestroy, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { FacilityService } from "../../../../services/generated-services";
import { CurrentFacilityService } from "../../../../services/current.facility.service";


@Component({
    selector: "app-facility-picker",
    templateUrl: "./facility.component.html",
    styleUrls: ["./facility.component.scss"],
 
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilityPickerComponent implements OnInit, OnDestroy
{
    ngOnInit(): void {  }

    ngOnDestroy(): void {   }

    simpleOption: any[] = [];
    selectedOption = "";

     

    constructor(
        public router: Router,
      
        facilityService: FacilityService,
        public currentFacilityService: CurrentFacilityService,
        private cdr: ChangeDetectorRef
    )
    {
        facilityService.all().subscribe(
            data => {
                this.simpleOption = [];
                for (let i in data) {
                    this.simpleOption.push({
                        value: data[i].facilityId.toString(),
                        label: data[i].facilityName
                    });
                }

                this.cdr.markForCheck();
            });

       

        this.listener = this.currentFacilityService.emitter
            .subscribe(item =>
            {
                console.log(item);
                switch (item.command)
                {
                    case "set":

                        if (this.selectedOption != item.facility.FacilityId) {
                            this.selectedOption = item.facility.FacilityId;
                        }

                   
                    break;

                default:
                    //this.defaultBehavior(item);
                    break;
                }

                this.cdr.markForCheck();
            });
    }

    private listener: Subscription;

   

    onFacilityChange(event)
    {
        if (this.selectedOption && this.selectedOption != "") {
            this.router.navigate([`dashboard/facility/${this.selectedOption}`]);
        }
    }

    
}
