import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { employeeList } from 'src/app/shared/models/employeelist';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
//export class EmployeeListComponent {
  export class EmployeeListComponent implements AfterViewInit {


    displayedColumns: string[] = ['fullName', 'gender', 'bloodGroup', 'dob', 'maritalStatus', 'reliegion', 'fatherorHusbandName', 'dateofMarriage', 'mobileNo', 'email'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(private employeeApiService: EmployeeServiceService) {
      this.dataSource = new MatTableDataSource();
    }
  
  
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getProductCategoryList();
    }
  
    getProductCategoryList() {
      debugger
      this.employeeApiService.getEmpWithId().subscribe(res => {
        this.dataSource.data = res; // Assign data to dataSource
      });
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
   }
  }
  }