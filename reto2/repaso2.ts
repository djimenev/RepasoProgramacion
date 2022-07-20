export class Mobile{
       private name:string;
       private model:string;
       private trademark:string;
        private sdSize:number;
        private color:string;
        private is5G:boolean;
        private numberOfCameras:number
        private price:number  ;

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
            public getName():void{
                console.log(this.name);
                }
            public setName(string:string):void{
                this.name = string;
            }
            public getModel():void{
                console.log(this.model);
            }
            public setModel(string:string):void{
                this.model = string;
            }
            public getTrademark():void{
                console.log(this.trademark);
            }
            public setTrademark(string:string):void{
                this.trademark = string;
            }
            public getSdsize():void{
                console.log(this.sdSize);
            }
            public setSdsize(number:number):void{
                this.sdSize = number;
            }
            public getColor():void{
                console.log(this.color);
            }
            public setColor(string:string):void{
                this.color = string;
            }
            public getIs5g():void{
                console.log(this.is5G);
            }
            public setIs5g(boolean:boolean):void{
                this.is5G = boolean;
            }
            public getNumberOfCameras():void{
                console.log(this.numberOfCameras);
            }
            public setNumberOfCameras(number:number):void{
                this.numberOfCameras = number;
            }
            public getPrice():void{
                console.log(this.price);
            }
            public setPrice(number:number):void{
                this.price = number;
            }
            public printAll():void{
                console.log("The characteristics of the mobile " + this.name + " are:");
                console.log("Name " + ": " + this.name + "\n" + "Model " + ": " + this.model + "\n" + "Trademark " + ": " + this.trademark + "\n" + "Sd Size (GB) " + ": " + this.sdSize + "\n" + "Color " + ": " + this.color + "\n" + "IS 5G? " + ": " + this.is5G + "\n" + "Number Of Cameras " + ": " + this.numberOfCameras +"\n");
                
                
                
                    
                                
            }
        }           


        export class LibreriaMobiles{

            public mobiles:Mobile[];

            constructor(mobiles:Mobile[]){
                this.mobiles = mobiles
            }

            public printAll():void{
                console.log("The characteristics of the mobiles are:");
                
                for(let x = 0; x<this.mobiles.length;x++){
                    console.log(this.mobiles[x]);
                    
                }
                
                
                    
                                
            }
        }