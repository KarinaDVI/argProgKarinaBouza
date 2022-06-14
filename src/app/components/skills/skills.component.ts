import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  radius: number = 100;
  skillsList: Skill[] = [];
  listSkill: Skill[] | any;
  /*skillEdit:any=null;
  
  listSkill: Skill | undefined;
  */
  name: string = "";
  progress: number = 0;
  confirms: number = 0;
  confirmsNames: string = "";
  outerStrokeColor: string = "";
  innerStrokeColor: string = "";
  
  constructor(private skillsDataService: SkillServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.cargarSkill();
  }

  cargarSkill(): void {
    this.skillsDataService.getAllSkill().subscribe((data: any[]) => {
      console.log(data);
      this.skillsList = data;
    })
  }

  getSkillEdit(skill: Skill): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    
    this.skillsDataService.getSkill(skill.id!).subscribe(
      (data) => {
        this.listSkill = data;
      });
      
  }

  borrarSkillDeLista(skillParaBorrar: Skill): void {
    this.skillsList = this.skillsList.filter(p => p.id !== skillParaBorrar.id)
    this.skillsDataService.deleteSkill(this.skillsList, skillParaBorrar).subscribe();
  }

  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const idj = this.listSkill.id
    this.skillsDataService.updateSkill(idj, this.listSkill).subscribe(
      
    );
    alert("skills modificado");
    window.location.reload();
  }
  onCreate():void{

    const newSkill = new Skill(this.name,this.progress,this.confirms,
      this.confirmsNames,this.outerStrokeColor,this.innerStrokeColor);

    this.skillsDataService.saveSkill(newSkill).subscribe(
      data => {
        alert("About creado");
        //this.router.navigate(['/']);
        
      }
    )
    window.location.reload();
  }
  
  modificarSkill(skillId: number) {
    this.skillsDataService.updateSkill(skillId, this.listSkill).subscribe();
    window.location.reload();
  }
 

}


