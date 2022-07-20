export class Mobile{
       public name:string;
       public model:string;
       public trademark:string;
        public sdSize:number;
        public color:string;
        public is5G:boolean;
        public numberOfCameras:number
        public price:number  ;

            constructor(name:string,model:string, trademark:string,sdSize:number,color:string,is5G:boolean,numberOfCameras:number,price:number){

                 this.name = name
                this.model = model
                this.trademark =trademark
                this.sdSize = sdSize
                this.color = color
                this.is5G = is5G
                this.numberOfCameras = numberOfCameras
                this.price = price
            }
            printAll(){
                for(let atributos in this){
                    console.log(atributos + " : " + this[atributos])
                }
            }

           
}