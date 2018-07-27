import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-other-datatable',
  templateUrl: './other-datatable.component.html',
  styleUrls: [
    './other-datatable.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class OtherDatatableComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/data.json`)
      .subscribe((data) => {
        this.data = data.json();
      });
  }

}
