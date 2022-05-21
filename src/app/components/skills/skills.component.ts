import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  radius:number=100;
  skillsList:Skill[]=[];

  constructor(private skillsData: SkillServiceService) { }
    
  ngOnInit():void {
    this.cargarSkill();
  }
   
  outerStrokeColor:string=this.color();

  skillColor(progress:number):string{
    if(progress!==0){
      this.outerStrokeColor=this.color();
    }return this.outerStrokeColor
  }

cargarSkill():void{
  this.skillsData.getAllSkill().subscribe((data:any[])=>{
    console.log(data);
    this.skillsList=data;
  })
  }

  borrarSkillDeLista(skillParaBorrar: Skill): void{
    this.skillsList= this.skillsList.filter(p => p.id !== skillParaBorrar.id)
    this.skillsData.deleteSkill(this.skillsList, skillParaBorrar).subscribe();
  }

  modificarPersona(skillParaEditar:Skill){
    this.skillsList= this.skillsList.filter(p => p.id !== skillParaEditar.id)
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

