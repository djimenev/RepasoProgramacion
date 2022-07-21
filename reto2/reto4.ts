export class Punto{

    private x:number;
    private y:number;

        constructor(x:number, y:number){
            this.x=x;
            this.y=y;

        }

        public tostring():string{
           let a:string = this.x.toString()
           let b:string = this.y.toString()
           let c = "(" + a + "," + b + ")"

           return c
        }

        public getX():number{
            return this.x;
        }
        
        public setX(number:number):void{
            this.x = number
        }
        public getY():number{
            return this.y
        }
        public setY(number:number){
            this.y = number
        }
        public calcularDistancia(Punto:Punto):number{
           /* let a = this.getX() - Punto.getX()
            let b = this.getY() - Punto.getY()
            let c = [a,b]*/
            let distancia:number = Math.sqrt((this.getY() - this.getX())*(this.getY() - this.getX()) + (Punto.getY() - Punto.getX())*(Punto.getY() - Punto.getX()))
            console.log(distancia);
            
            return distancia
        }
        public distanciaAlOrigen():number{

            let distancia:number = Math.sqrt((this.getY() - this.getX())*(this.getY() - this.getX()) + (0 - 0)*(0 - 0))
            return distancia
        }
        

        public calcularCuadrante():number{
            let resultado
            if(this.x == 0 && this.y == 0){resultado = 0}
            else if(this.x > 0 && this.y > 0){resultado = 1}
            else if(this.x< 0 && this.y>0){resultado = 2}
            else if(this.x<0 && this.y<0){resultado = 3}
            else if(this.x>0 && this.y<0){resultado = 4}
            console.log(resultado);
            
            return resultado
        }

        
}


let coordenadas = new Punto(43,24);
let coordenadas2 = new Punto(10,4);
//coordenadas.calcularDistancia(coordenadas2)
coordenadas.calcularDistancia(coordenadas2);
console.log(coordenadas.distanciaAlOrigen());
