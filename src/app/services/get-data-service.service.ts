import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { About } from '../models/About';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

   //Cambiar por la direccion de la api
   //url:string="http://cambiar";
  personas: About[] = [] 

  private apiURL='http://localhost:8000/api/'

  private personUrl = this.apiURL + 'person/'
  private skillUrl = this.apiURL + 'skill/'
  private educationUrl = this.apiURL + 'education/'
  private experienceUrl = this.apiURL + 'experience/'
  private projectsUrl = this.apiURL + 'projects/'

  constructor(private http:HttpClient) { }

  //Urls de la api
   
 
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
  }
}
  public lista(): Observable<About[]>{
    return this.http.get<About[]>(this.personUrl +'all').pipe(
      //Con otra api:
    //return this.http.get<Persona[]>(this.personasURl+'/traer').pipe(
      catchError(this.handleError<About[]>('getAllPersonas',[])));
  }

   //Metodos que hay que crearles endpoints en el api
  public detailAbout(id:number):Observable<About>{
    return this.http.get<About>(this.personUrl + `detail/${id}`);
  }
  public detailName(nombre:String):Observable<About>{
    return this.http.get<About>(this.personUrl + `detailName/${nombre}`);
  }
  
  public saveAbout(aboutMe:About):Observable<any>{
    return this.http.post<any>(this.personUrl + 'create',aboutMe);
  }
  public updateAbout(id:number,aboutMe:About[]):Observable<any>{
    return this.http.put<any>(this.personUrl + `update/${id}`,aboutMe);
  }
  //Usar este..
  public deleteAbout(id: number): Observable<About>{
    return this.http.delete<About>(this.personUrl + `/${id}`)
  };

  //O este..
  removerPersona(personas: About[], personaParaBorrar: About ) {
    personas.filter(p => p.id !== personaParaBorrar.id)
    this.http.delete<any>(this.personUrl + "/" + personaParaBorrar.id);
  }


  public listaSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.skillUrl + 'getskills');
  }
  public saveSkill(newSkill:Skill):Observable<any>{
    return this.http.post<any>(this.skillUrl + 'create',newSkill);
  }

  //Metodos de la clase original
  obtenerDatosJson():Observable<any>
  {
    return this.http.get('./assets/data.json');

    //Cambiar por datos de la api. "persona" 
    //sale de la masterclass 2 del modulo 8
    //return this.http.get<any>(this.url+"persona");
  }
  
  getData():Observable<any>
  {
    return this.lista();
  }

  /*
    getAboutMe(): Observable<AboutMe>{
      //Sacado de mi-primera-app?
    return this.http.get<AboutMe[]>(this.aboutURl+'/traerAbout')
    .pipe(catchError(this.handleError<AboutMe>('getAboutMe',[])));
}
*/
}

