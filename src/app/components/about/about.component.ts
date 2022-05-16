import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Persona } from 'src/app/models/Persona';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //MGCion
  persona: Persona = new Persona("","",0,"","","","","");
 
  //Este no se usa para agregar..
  personas:Persona[]=[];

  constructor(public datosPersona: GetDataServiceService) { }

 // personas:any;
  //aboutMeList:any;
  //Profe:
 // miPortfolio:any;
  //mio

  ngOnInit(): void {
  
    this.datosPersona.getAllPersonas().subscribe(data => {this.persona=data});
    console.log(this.persona);

    /*
      Profes:..
      this.datosPersona.getlistaPersonas().subscribe((data:any[])=>{
      //console.log("Datos personales"+ JSON.stringify(data));
      this.personas=data;})*/
  }
 
  borrarPersonaDeLista(personaParaBorrar: Persona): void{
    this.personas= this.personas.filter(p => p.id !== personaParaBorrar.id)
    //let id:number=personaParaBorrar.id;
    this.datosPersona.deletePersona(this.personas, personaParaBorrar).subscribe();
  }

  modificarPersona(personaParaEditar:Persona){
    this.personas= this.personas.filter(p => p.id !== personaParaEditar.id)
    //this.datosPersona.updatePersona(personaParaEditar.id, this.personas).subscribe();
  }

  //Metodos del JSON original
  initJsonData(){
    this.datosPersona.obtenerDatosJson().subscribe(data=>{
    console.log("Datos personales"+ JSON.stringify(data));
    
      this.personas=data;
      //profe:
      //this.miPortfolio=data[0];
    })
}


  /*Ver si sirve
  eliminarPersona(id:number){
    this.datosPersona.delete(id).subscribe(data=>{
     alert('borrar el '+id);
    this.datosPersona.obtenerDatosJson();
    
  })
  }*/
}

