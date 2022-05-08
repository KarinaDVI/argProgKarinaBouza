export class About{
    id:number;
    nombre:string;
    apellido:string;
    edad:number;
    seniority:string;
    urlImage:string;
    company:string;
    position:string;
    abouts:string;
    
    constructor(id:number=0,nombre:string="",apellido:string="",edad:number=36,seniority:string="",
    urlImage:string="",company:string="",position:string="",abouts:string=""){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.seniority=seniority;
        this.urlImage=urlImage;
        this.company=company;
        this.position=position;
        this.abouts=abouts;
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