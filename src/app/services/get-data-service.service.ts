import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Persona } from '../models/Persona';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

   //Cambiar por la direccion de la api
   //url:string="http://cambiar";
  //personas: Persona[] = [] 

  apiURL='http://localhost:8000/apikb/'

  personUrl = 'http://localhost:8000/apikb/person/'
  private skillUrl = this.apiURL + 'skill/'
  private educationUrl = this.apiURL + 'education/'
  private experienceUrl = this.apiURL + 'experience/'
  private projectsUrl = this.apiURL + 'projects/'

  constructor(private http:HttpClient) { }
   
 
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  }
}
  public getAllPersonas(): Observable<Persona>{
    return this.http.get<Persona>(this.personUrl +'all');
}

  public getlistaPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personUrl +'all').pipe(
      //Con otra api:
    //return this.http.get<Persona[]>(this.personasURl+'/traer').pipe(
      catchError(this.handleError<Persona[]>('getAllPersonas',[])));
  }

   //Metodos que hay que crearles endpoints en el api
  public detailPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.personUrl + `detail/${id}`);
  }
  public detailName(nombre:String):Observable<Persona>{
    return this.http.get<Persona>(this.personUrl + `detailName/${nombre}`);
  }
  
  public savePersona(persona:Persona):Observable<any>{
    return this.http.post<any>(this.personUrl + 'create',persona);
  }
  public updatePersona(id:number,persona:Persona[]):Observable<any>{
    return this.http.put<any>(this.personUrl + `update/${id}`,persona);
  }
  //Usar este..//(Prefereible)
  public removerPersona(id: number): Observable<Persona>{
    return this.http.delete<Persona>(this.personUrl + `/${id}`)
  };

  //O este..
  deletePersona(personas: Persona[], personaParaBorrar: Persona ): Observable<Persona> {
    personas.filter(p => p.id !== personaParaBorrar.id)
    return this.http.delete<any>(this.personUrl + "/" + personaParaBorrar.id);
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
    return this.getlistaPersonas();
  }

  /*
    getAboutMe(): Observable<AboutMe>{
      //Sacado de mi-primera-app?
    return this.http.get<AboutMe[]>(this.aboutURl+'/traerAbout')
    .pipe(catchError(this.handleError<AboutMe>('getAboutMe',[])));
}
*/
}

