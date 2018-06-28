import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../services/api.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'name', 'symbol', 'quotes'];
  loading: boolean;
  currency = 'INR';
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getTickers();
  }

  getTickers(): void {
    this.loading = true;
    this.apiService.getTicker(this.currency).subscribe(response => {
      const responseObject = JSON.parse(response['_body']).data;
      const responseArray = Object.keys(responseObject).map(item => {
        return responseObject[item];
        });
      this.dataSource = new MatTableDataSource(responseArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
