import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { AboutServiceService } from 'src/app/services/about-service.service';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //MGCion
 
  //personasList:any=null;
  personasList:Persona[] = [];
  personaEdit: Persona[]|any;

  nombre:string="";
  apellido:string="";
  edad:number=0;
  seniority:string="";
  urlimage:string="";
  company:string="";
  position:string="";
  abouts:string="";

  constructor(public datosPersona: AboutServiceService) { }

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons():void{
    this.datosPersona.getAllPersons().subscribe((data:any[])=>{
      console.log(data);
      this.personasList=data;
    })
    }

    getPersonaEdit(person: Persona): void {
      //const id = this.activatedRoute.snapshot.params['id'];
      this.datosPersona.getPersona(person.id!).subscribe(
        (data) => {
          this.personaEdit = data;
        });
    }

  borrarPersonaDeLista(personaParaBorrar: Persona): void{
    this.personasList= this.personasList.filter(p => p.id !== personaParaBorrar.id)
    this.datosPersona.deletePersona(this.personasList, personaParaBorrar).subscribe();
  }
  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const idp = this.personaEdit.id
    this.datosPersona.updatePersona(idp, this.personaEdit).subscribe(
    );
    window.location.reload();
  }

  onCreate():void{
    const newPersona = new Persona(this.nombre,this.apellido,this.edad,this.seniority,
      this.urlimage,this.company,this.position,this.abouts);

    this.datosPersona.savePersona(newPersona).subscribe(
      data => {
        alert("About creado");
        //this.router.navigate(['/']);
      }
    )
    window.location.reload();
  }

  modificarPersona(personaId:number){
    this.datosPersona.updatePersona(personaId, this.personaEdit).subscribe();
    window.location.reload();
  }


}

