import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  array :any [];
  constructor(private studentsService: StudentsService,private ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    
    this.studentsService.getStudents().subscribe(
      (data: any) => {
      
        console.log(data);
        this.array = data;
        this.ToastrService.success("Consumo de API exitoso");

      },
      error => {
        console.log(error.error.mensaje);
        this.ToastrService.error(error.error.mensaje,'Error: ');
      }

    );


  }

}
