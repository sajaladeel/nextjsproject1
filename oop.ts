class Dad {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.age= age
        this.name =name

    }

    speak(){
        console.log("im speaking")
    }
    eat(){
        console.log("im eating")
    }
    
}




  class Sajal extends Dad  {

      work:string;

        constructor(name:string,age:number,work:string){
            super(name,age)
this.work=work;
        }
    }


    const papa = new Dad("Adeel",43);
   papa.speak()
   papa.eat()


   const daughter = new Sajal("Sajal",21,"studies law");
   console.log(daughter.eat())
   