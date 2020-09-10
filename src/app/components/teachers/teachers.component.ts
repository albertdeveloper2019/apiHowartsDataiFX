import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  array :any [];
  constructor(private studentsService: StudentsService,private ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher(){
    
    this.studentsService.getTeachers().subscribe(
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
