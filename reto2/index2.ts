import { Mobile } from "./repaso2";
import { MobileLibrary } from "./repaso2";

let Nokia3210 = new Mobile("nokia","3210","notengoniidea",0,"red",false,1,150);
let Iphone3g = new Mobile("iphone","3g","sigosintenerniidea",100,"black",true,4,800); 
let samnsgunggalaxy10 = new Mobile("samnsung","galaxy s10","nizorra",128,"white",true,3,700)

let arrayObt =  new MobileLibrary([Nokia3210,Iphone3g,samnsgunggalaxy10],"libreria1", "Gijon",0)

console.log(arrayObt.totalPriceCalculation());
