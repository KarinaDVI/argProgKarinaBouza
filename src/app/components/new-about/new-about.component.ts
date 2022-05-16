import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.css']
})
export class NewAboutComponent implements OnInit {

  constructor( private aboutService:GetDataServiceService, 
               private router:Router) { }
  
  nombre:string="";
  apellido:string="";
  edad:number=0;
  seniority:string="";
  image:string="";
  company:string="";
  position:string="";
  abouts:string="";
  
  ngOnInit(): void {
  }

  onCreate(): void  {
  const persona=new Persona(this.nombre,this.apellido,this.edad,this.seniority,
    this.image,this.company,this.position,this.abouts);
  this.aboutService.savePersona(persona).subscribe(
    data=>{
      alert("Acerca de mi creado");
      this.router.navigate(['/']);
      }
      
    )
  }

}
