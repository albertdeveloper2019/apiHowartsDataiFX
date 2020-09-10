import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  id: any;
  idHouse: string;
  array :any [];
  constructor(private studentsService: StudentsService,private ToastrService: ToastrService, private Activatedroute:ActivatedRoute) { 
  }

  ngOnInit(): void {

    this.id = this.Activatedroute.snapshot.params['id'];
    console.log('id Params',this.id);
    if(this.id == 1)
      this.idHouse = 'slytherin';
    if(this.id == 2)
      this.idHouse = 'gryffindor';
    if(this.id == 3)
      this.idHouse = 'ravenclaw';
    if(this.id == 4)
      this.idHouse = 'hufflepuff';

    this.getCharacter(this.idHouse);
    
  }

 ngAfterViewChecked(): void {
      
 }

  getCharacter(house:any){
    
    this.studentsService.getCharacterByHouse(house).subscribe(
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
