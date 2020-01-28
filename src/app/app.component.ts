import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  title = 'ag-grid-test';
  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];
  // columnDefs = [
  //   { headerName: 'Make', field: 'make', rowGroup: true },
  //   { headerName: 'Price', field: 'price' }
  // ];
  // autoGroupColumnDef = {
  //   headerName: 'Model',
  //   field: 'model',
  //   cellRenderer: 'agGroupCellRenderer',
  //   cellRendererParams: { checkbox: true }
  // };
  rowData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.rowData = this.http.get('http://api.myjson.com/bins/15psn9');
  }

  getSelectedRows() {
    const selectedData = this.agGrid.api.getSelectedNodes().map(node => node.data);
    console.log(selectedData);
  }
}
