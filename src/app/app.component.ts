import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'crud3.0';


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
    console.log(res);
  
    },
  error: console.log,
   
 } );    
}
}
 

