

export class Skill{
    
    id?:number;
    name:string;
    progress:number;
    confirms:number;
    confirmsNames:string;
    outerStrokeColor:string;
    innerStrokeColor:string;
    
    

    constructor(name:string,progress:number,confirms:number,
        confirmsNames:string,outerStrokeColor:string,innerStrokeColor:string){
        
        this.name=name;
        this.progress=progress;
        this.confirms=confirms;
        this.confirmsNames=confirmsNames;
        this.outerStrokeColor=outerStrokeColor;
        this.innerStrokeColor=innerStrokeColor;

}
}