import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projectList:Project[]=[];
  listProject: Project | any;

  name:string="";
  aboutProject:string="";
  urlimg:string="";
  

  constructor(private projectService: ProjectService) { }
    
  ngOnInit():void {
    this.cargarProject();

  }

  cargarProject():void{
    this.projectService.getAllProject().subscribe((data:any[])=>{
      console.log(data);
      this.projectList=data;
    })
  }

  getProjectEdit(project: Project): void {
      //const id = this.activatedRoute.snapshot.params['id'];

      this.projectService.getProject(project.id!).subscribe(
        (data) => {
          this.listProject = data;
        });
        
    }
  borrarProjectDeLista(projectParaBorrar: Project): void{
    this.projectList= this.projectList.filter(p => p.id !== projectParaBorrar.id)
    this.projectService.deleteProject(this.projectList, projectParaBorrar).subscribe();
  }
  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const id = this.listProject.id
    this.projectService.updateProject(id, this.listProject).subscribe(
    );
    window.location.reload();
  }
  onCreate():void{
    const newProject = new Project(this.name,this.aboutProject, this.urlimg);
    this.projectService.saveProject(newProject).subscribe(
      data => {
        alert("Proyecto creado");
      }
    )
    window.location.reload();
  }

  


  modificarProject(projectId: number) {
    this.projectService.updateProject(projectId, this.listProject).subscribe();
    window.location.reload();
  }

  


}
