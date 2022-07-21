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
            public getName2():string{
                return this.name
            }        
            public setName(string:string):void{
                this.name = string;
            }
            public getModel():void{
                console.log(this.model);
            }
            public getModel2():string{
                return this.model
            }
            public setModel(string:string):void{
                this.model = string;
            }
            public getTrademark():void{
                console.log(this.trademark);
            }
            public getTrademark2():string{
                return this.trademark
            }
            public setTrademark(string:string):void{
                this.trademark = string;
            }
            public getSdsize():void{
                console.log(this.sdSize);
            }
            public getSdsize2():number{
                return this.sdSize
            }
            public setSdsize(number:number):void{
                this.sdSize = number;
            }
            public getColor():void{
                console.log(this.color);
            }
            public getColor2():string{
                return this.color
            }
            public setColor(string:string):void{
                this.color = string;
            }
            public getIs5g():void{
                console.log(this.is5G);
            }
            public getIs5G2():boolean{
                return this.is5G
            }
            public setIs5g(boolean:boolean):void{
                this.is5G = boolean;
            }
            public getNumberOfCameras():void{
                console.log(this.numberOfCameras);
            }
            public getNumberOfCameras2():number{
                return this.numberOfCameras
            }
            public setNumberOfCameras(number:number):void{
                this.numberOfCameras = number;
            }
            public getPrice():void{
                console.log(this.price);
                
            }
            public getPrice2():number{
                return this.price
            }
            public setPrice(number:number):void{
                this.price = number;
            }
            public printAll():void{
                console.log("The characteristics of the mobile " + this.name + " are:");
                console.log("Name " + ": " + this.name + "\n" + "Model " + ": " + this.model + "\n" + "Trademark " + ": " + this.trademark + "\n" + "Sd Size (GB) " + ": " + this.sdSize + "\n" + "Color " + ": " + this.color + "\n" + "IS 5G? " + ": " + this.is5G + "\n" + "Number Of Cameras " + ": " + this.numberOfCameras +"\n");
                
                
                
                    
                                
            }
        }           


        export class MobileLibrary{

            private mobiles:Mobile[];
            private name:string;
            private location:string;
            private totalPrice:number         



            constructor(mobiles:Mobile[],name:string,location:string,totalPrice:number){
                this.mobiles = mobiles
                this.name = name
                this.location = location
                this.totalPrice = this.totalPriceCalculation()
                
            }

            public getName():void{
                console.log(this.name);
            }
            public setName(name:string):void{
                this.name = name;
            }
            public getLocation():void{
                console.log(this.location);
            }
            public setLocation(location:string):void{
                this.location = location;
            }
            public getMobiles():void{
                console.log(this.mobiles);
            }
            public setMobiles(mobiles:Mobile[]){
                this.mobiles = mobiles;
            }
            public totalPriceCalculation():number{
                let totalPrice = 0
                for(let x = 0;x<this.mobiles.length;x++){
                 totalPrice= totalPrice + this.mobiles[x].getPrice2()
                }
                return totalPrice
            }


            public printLibrary():void{
                
                for(let x=0;x<this.mobiles.length;x++){
                console.log("The characteristics of the mobile " + this.mobiles[x].getName2() + " are:");
                console.log(` Name  :  ${this.mobiles[x].getName2()} `);
                
                }
                
                    
                                
            }
                    
                }
                
                
                    
                                
            
        