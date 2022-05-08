import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/Skill';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  constructor(private skillService: GetDataServiceService,
    private router: Router) { }
  id: number=0;
  name: string = "";
  progress: number = 0;
  confirms: number = 0;
  confirmsNames: string = "";
  outerStrokeColor: string = "";
  innerStrokeColor: string = "";
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const newSkill = new Skill(this.id,this.name,this.progress,this.confirms,
      this.confirmsNames,this.outerStrokeColor,this.innerStrokeColor);

    this.skillService.saveSkill(newSkill).subscribe(
      data => {
        alert("About creado");
        this.router.navigate(['/']);
      }

    )
  }

}

