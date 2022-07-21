"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.tostring = function () {
        var a = this.x.toString();
        var b = this.y.toString();
        var c = "(" + a + "," + b + ")";
        return c;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (number) {
        this.x = number;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (number) {
        this.y = number;
    };
    Punto.prototype.calcularDistancia = function (Punto) {
        /* let a = this.getX() - Punto.getX()
         let b = this.getY() - Punto.getY()
         let c = [a,b]*/
        var distancia = Math.sqrt((this.getY() - this.getX()) * (this.getY() - this.getX()) + (Punto.getY() - Punto.getX()) * (Punto.getY() - Punto.getX()));
        console.log(distancia);
        return distancia;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = Math.sqrt((this.getY() - this.getX()) * (this.getY() - this.getX()) + (0 - 0) * (0 - 0));
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        var resultado;
        if (this.x == 0 && this.y == 0) {
            resultado = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            resultado = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            resultado = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            resultado = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            resultado = 4;
        }
        console.log(resultado);
        return resultado;
    };
    return Punto;
}());
exports.Punto = Punto;
var coordenadas = new Punto(43, 24);
var coordenadas2 = new Punto(10, 4);
//coordenadas.calcularDistancia(coordenadas2)
coordenadas.calcularDistancia(coordenadas2);
console.log(coordenadas.distanciaAlOrigen());
