import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  // configuracion de headers
  public HttpOptions = {
   
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})

  };

  // se obtienen las url del enviroment
  public urlCH = environment.UrlCharacters;
  public urlST = environment.UrlStudents;
  public urlTCH = environment.UrlTeachers;

  constructor(private http: HttpClient) { }

  // se obtienen los personajes a partir de una casa de hogwarts
  getCharacterByHouse( house: string ) {

      const urlAbsolute = this.urlCH + house;     
      return this.http.get(urlAbsolute);

  }
  // se obtienen todos los personajes de hogwarts
  getStudents() {
    return this.http.get(this.urlST);

  }
  // se obtienen todos los profesores de hogwarts
  getTeachers() {
    return this.http.get(this.urlTCH);

  }


}
