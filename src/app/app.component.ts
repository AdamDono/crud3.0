import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 

  displayedColumns: string[] = [
 
     'firstName', 
     'lastName', 
     'company',
     'gender',
      'salary', 
      'experience',
      'birthday',
      'education',
      'email', ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

constructor(private _dialog: MatDialog, private _empService: EmployeeService ) {}

ngOnInit(): void {
   this.getEmployeeList();
}

openAddEditEmpForm() 
//add component you want to pass the method on
{  
  this._dialog.open (EmpAddEditComponent);
} 

getEmployeeList ( ) {
  this._empService.getEmployeeList().subscribe({
    next: (res) => {
 this.dataSource = new MatTableDataSource( res  ); 
 this.dataSource.sort  =  this.sort  ;
 this.dataSource.paginator  = this.paginator ;
  
    },
  error: console.log,
   
 } );    
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}



 

