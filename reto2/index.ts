import { Mobile } from "./repaso2";

let Nokia3210 = new Mobile("nokia","3210","notengoniidea",0,"red",false,1,150);
let Iphone3g = new Mobile("iphone","3g","sigosintenerniidea",100,"black",true,4,800); 
let samnsgunggalaxy10 = new Mobile("samnsung","galaxy s10","nizorra",128,"white",true,3,700)

console.log(Nokia3210);
console.log(Iphone3g);
console.log(samnsgunggalaxy10);

Nokia3210.is5G=true;
Nokia3210.numberOfCameras=5;

console.log(Nokia3210);


