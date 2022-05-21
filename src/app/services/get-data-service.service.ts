import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  apiURL='http://localhost:8000/apikb/'

  personUrl = 'http://localhost:8080/apikb/person'
  private skillUrl = this.apiURL + 'skill/'

  constructor(private http:HttpClient) { }
   
/*
  public getAllPersonas(): Observable<Persona>{
    return this.http.get<Persona>(this.personUrl +'all');
}
*/

  //Metodos del JSON original
  obtenerDatosJson():Observable<any>
  {
    return this.http.get('./assets/data.json');
  }
  
}

