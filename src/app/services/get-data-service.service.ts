import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/About';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

   //Cambiar por la direccion de la api
   //url:string="http://cambiar";

  constructor(private http:HttpClient) { }

  //Url de la api
  aboutURL='http://localhost:8000/apiProy/about/';

  //Metodos que hay que crearles endpoints en el api
  
  public lista(): Observable<About[]>{
    return this.http.get<About[]>(this.aboutURL + 'lista');
  }
  public detailAbout(id:number):Observable<About>{
    return this.http.get<About>(this.aboutURL + `detail/${id}`);
  }
  public detailName(nombre:String):Observable<About>{
    return this.http.get<About>(this.aboutURL + `detailName/${nombre}`);
  }

  public saveAbout(aboutMe:About):Observable<any>{
    return this.http.post<any>(this.aboutURL + 'create',aboutMe);
  }
  public updateAbout(id:number,aboutMe:About):Observable<any>{
    return this.http.put<any>(this.aboutURL + `update/${id}`,aboutMe);
  }
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.aboutURL + `delete/${id}`)
  }
    
  //Metodos de la clase original
  obtenerDatos():Observable<any>
  {
    return this.http.get('./assets/data.json');

    //Cambiar por datos de la api. "persona" 
    //sale de la masterclass 2 del modulo 8

    //return this.http.get<any>(this.url+"persona");
  }
  /*
    getAboutMe(): Observable<AboutMe>{
      //Sacado de mi-primera-app?
    return this.http.get<AboutMe[]>(this.aboutURl+'/traerAbout')
    .pipe(catchError(this.handleError<AboutMe>('getAboutMe',[])));
}
*/
}

