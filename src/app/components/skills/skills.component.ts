import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  radius:number=100;
  constructor(private skillsData:GetDataServiceService) { }
    skillsList:any;

  ngOnInit(): void {
    this.skillsData.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.skillsList=data.aptitudes;
      //this.color();
     //this.skillColor(<number>this.skillsList.progress);
    })
  }
   
  outerStrokeColor:string=this.color();
  skillColor(progress:number):string{
    if(progress!==0){
      this.outerStrokeColor=this.color();
    }return this.outerStrokeColor
  }

    /*
    if(progress >= 75 && progress<=100){
     this.outerStrokeColor=this.color();
      return this.outerStrokeColor
    }else if(progress >= 50 && progress<=75){
      this.outerStrokeColor=this.color();
      return this.outerStrokeColor
    }else if(progress >= 25 && progress <=50){
      this.outerStrokeColor=this.color();
      return this.outerStrokeColor;
    }else {
      this.outerStrokeColor=this.color();
      return this.outerStrokeColor;
    }
    
  }*/
  
  color():string{
    let bg_colour:string="";
    bg_colour= Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);
      console.log(bg_colour);
      return bg_colour;
      
    }
}

