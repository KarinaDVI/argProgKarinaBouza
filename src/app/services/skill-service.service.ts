import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  skillUrl = 'http://localhost:8080/apikb/skill'

  
  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  }
}

  getAllSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.skillUrl+'/all').pipe(
      catchError(this.handleError<Skill[]>('getAllSkill',[]))
  );
}
  public saveSkill(newSkill:Skill):Observable<any>{
    return this.http.post<any>(this.skillUrl + '/',newSkill);
  }

  public getSkill(id: number):Observable<Skill> {
    return this.http.get<Skill>(this.skillUrl + `/${id}`);
  }
 
  public updateSkill(id:number,skill:Skill):Observable<any>{
    return this.http.put<any>(this.skillUrl + `/edit/${id}`,skill);
  }

  public deleteSkill(skillList: Skill[], skillParaBorrar: Skill ): Observable<Skill> {
    skillList.filter(p => p.id !== skillParaBorrar.id)
    return this.http.delete<any>(this.skillUrl + "/" + skillParaBorrar.id);
  }

}
