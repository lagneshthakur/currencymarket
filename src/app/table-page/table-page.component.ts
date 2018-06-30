import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../services/api.service';
import {MatPaginator, MatSort, MatTableDataSource, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'name', 'symbol', 'quotes', 'notes'];
  loading: boolean;
  currency = 'INR';
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private apiService: APIService, private router: Router,
    private tableService: TableService, public snackBar: MatSnackBar) {
    this.currency = this.tableService.filterValue == null ? 'INR' : this.tableService.filterValue;
  }

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
    }, error => {
      console.log('Fetch Failed');
      this.loading = false;
      this.snackBar.open('Cannot get Data', 'Failed', {
        duration: 1000,
      });
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getNotes(currencyName) {
    return localStorage.getItem(currencyName);
  }

  changeRoute(routeValue) {
    const selectedCurrency = routeValue.split('/')[2];
    const selectedCurrencyInfo = this.dataSource['_data']['_value'].find((currency) => {
      return currency.name === selectedCurrency;
    });
    this.tableService.selectedCurrency = selectedCurrencyInfo;
    this.tableService.filterValue = this.currency;
    this.router.navigate([routeValue]);
  }



}
