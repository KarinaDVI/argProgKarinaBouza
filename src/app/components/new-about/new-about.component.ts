import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { About } from 'src/app/models/About';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.css']
})
export class NewAboutComponent implements OnInit {

  constructor( private aboutService:GetDataServiceService, 
               private router:Router) { }
  id:number=0;
  nombre:string="";
  apellido:string="";
  edad:number=0;
  seniority:string="";
  image:string="";
  company:string="";
  position:string="";
  aboutMe:string="";
  
  ngOnInit(): void {
  }

  onCreate(): void  {
  const aboutMe=new About(this.id,this.nombre,this.apellido,this.edad,this.seniority,
    this.image,this.company,this.position,this.aboutMe);
  this.aboutService.saveAbout(aboutMe).subscribe(
    data=>{
      alert("Acerca de mi creado");
      this.router.navigate(['/']);
      }
      
    )
  }

}
