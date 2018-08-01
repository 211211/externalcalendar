import { Injectable, EventEmitter, Inject } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CurrentFacilityService
{
    constructor() { }

    public emitter = new Subject<IFacilityEvent>();


    set(facility: IFacility): IFacility
    {
        this.emitter.next({ command: "set", facility: facility });
        return facility;
    };

    SetFacilityId(facilityId): IFacility
    {
        return this.set({ FacilityId: facilityId });
    }
}


export interface IFacilityEvent
{
    command: string;
    id?: string;
    facility: IFacility;
}

export interface IFacility
{
    FacilityId: any;
}
