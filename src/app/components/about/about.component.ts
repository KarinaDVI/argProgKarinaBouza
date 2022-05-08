import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { About } from 'src/app/models/About';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 personas:About[]=[];

  constructor(private datosAboutMe:GetDataServiceService) { }

 // personas:any;
  //aboutMeList:any;
  //Profe:
 // miPortfolio:any;
  //mio

  ngOnInit(): void {
    
    this.datosAboutMe.getData().subscribe((data:any[])=>{
      console.log("Datos personales"+ JSON.stringify(data));
      this.personas=data;})
  }
 
  borrarPersonaDeLista(personaParaBorrar: About){
    this.personas= this.personas.filter(p => p.id !== personaParaBorrar.id)
    let id:number=personaParaBorrar.id;
    this.datosAboutMe.deleteAbout(id).subscribe();
  }

  modificarPersona(personaParaEditar:About){
    this.personas= this.personas.filter(p => p.id !== personaParaEditar.id)
    this.datosAboutMe.updateAbout(personaParaEditar.id, this.personas).subscribe();
  }

  //Metodos del JSON original
  initJsonData():void{
    this.datosAboutMe.obtenerDatosJson().subscribe(data=>{
    console.log("Datos personales"+ JSON.stringify(data));
    
      this.personas=data;
      //profe:
      //this.miPortfolio=data[0];
    })
}


  /*Ver si sirve
  eliminarAbout(id:number){
    this.datosAboutMe.delete(id).subscribe(data=>{
     alert('borrar el '+id);
    this.datosAboutMe.obtenerDatosJson();
    
  })
  }*/
}

