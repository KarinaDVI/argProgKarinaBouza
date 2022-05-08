import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  radius:number=100;
  skillsList:Skill[]=[];

  constructor(private skillsData: GetDataServiceService) { }
    
  ngOnInit():void {
    this.cargarSkill();
    //Este es la ruta anterior que viene del json:
    //this.skillsData.obtenerDatos().subscribe(data=>{
  
    /*
    this.skillsData.lista().subscribe(data=>{
    console.log(data);
    //this.skillsList=data.aptitudes;
    this.skillsList=data;
    //this.color();
   //this.skillColor(<number>this.skillsList.progress);
  })
  */

  }
   
  outerStrokeColor:string=this.color();

  skillColor(progress:number):string{
    if(progress!==0){
      this.outerStrokeColor=this.color();
    }return this.outerStrokeColor
  }

cargarSkill():void{
  this.skillsData.listaSkill().subscribe((data:any[])=>{
    console.log(data);
    this.skillsList=data;
    //this.color();
   //this.skillColor(<number>this.skillsList.progress);
  })
  }

  //Dejar esta función para color picker en caso de necesidad
  color():string{
    let bg_colour:string="";
    bg_colour= Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);
      console.log(bg_colour);
      return bg_colour;
      
    }
}

