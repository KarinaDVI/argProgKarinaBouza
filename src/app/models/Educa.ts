export class Educa {
    id?:number;
    yearBegin:String;
    yearEnd:String;
    school:String;
    status:String;

    constructor(yearBegin:String,yearEnd:String,school:String,status:String){
        this.yearBegin=yearBegin;
        this.yearEnd=yearEnd;
        this.school=school;
        this.status=status;

    }
    
} 