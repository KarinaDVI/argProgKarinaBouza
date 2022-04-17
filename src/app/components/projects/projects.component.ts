import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  constructor(private proyectData:GetDataServiceService) { }

  proyectsList:any;

  ngOnInit(): void {
    this.proyectData.obtenerDatos().subscribe(data=>{
      console.log(data);
        this.proyectsList=data.achivements});
  }

}
