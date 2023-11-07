import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud3.0';


constructor(private _dialog: MatDialog) {}

openAddEditEmpForm() 
//add component you want to pass the method on
{  
  this._dialog.open (EmpAddEditComponent);
} 

}
  

