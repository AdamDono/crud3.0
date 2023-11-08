import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  empForm : FormGroup;

  education = [
    'Drop Out',
    'Grade 12',
    'diploma',
    'Undergraduate',
  ];

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef <EmpAddEditComponent>) { 
     this.empForm = this._fb.group({
    
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      education:'',
      company: '',
      experience: '',
      salary: '',

     });  
    }
  ngOnInit(): void {
  
  }

     onFormSubmit() {
       if(this.empForm.valid) {
        this._empService.addEmployee(this.empForm.value).subscribe({
           next: (val: any ) => {
            alert ('Employee added successfully');
            this._dialogRef.close();  
           },
         error: (err:any) =>
          { console.error (err);
          }, 
        } );    
       }
     }
}
