import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/About';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
  constructor(private datosAboutMe:GetDataServiceService) { }

  aboutMeList:any;
  //Profe:
  miPortfolio:any;
  //about1=new About("Karina Beatriz Bouza",36,"Full Stack Developer Jr")

  ngOnInit(): void {
    this.datosAboutMe.obtenerDatos().subscribe(data=>{
      console.log("Datos personales"+ JSON.stringify(data));
        this.aboutMeList=data;
        //profe:
        this.miPortfolio=data[0];
      })
  }
  agregarAbout(){

  }
  modificarAbout(id:number){

  }

  eliminarAbout(id:number){
    alert('borrar el '+id);
  }
}
