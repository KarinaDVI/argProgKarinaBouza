export class About{
    id?:number;
    nombre:String;
    edad:number;
    seniority:String;
    
    constructor(nombre:String="",edad:number=0,seniority:String=""){
        
        this.nombre=nombre;
        this.edad=edad;
        this.seniority=seniority;
    }
    edadMia(): number{
        let currentTime = new Date()
        let month = currentTime. getMonth()
        let day = currentTime.getDay()
        if (month==6 && day==3){
            this.edad++;
            
        }else{this.edad=this.edad}
        return this.edad
    }
}