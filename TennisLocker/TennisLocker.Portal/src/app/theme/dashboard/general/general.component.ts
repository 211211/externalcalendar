import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-general-board',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GeneralBoardComponent implements OnInit, AfterViewInit
{
    options: any = {
        position: ['bottom', 'right'],
    };

  
    constructor()
    { // private servicePNotify: NotificationsService
    }

    ngOnInit()
    {
      
    }

    ngAfterViewInit()
    {
        
    }

}
