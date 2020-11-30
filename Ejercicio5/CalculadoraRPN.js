'use strict';

class CalculadoraRPN{
    constructor(){
        this.pantalla = 0;
        this.pila = new Array();
        this.operadores = false;
    }

    actdesoperadores(){
        this.operadores = !this.operadores;
    }

    mostrarPila(){
        document.getElementById("pila").innerHTML = "";
        for(var i = 0; i<this.pila.length; i++){
            document.getElementById("pila").innerHTML += "<p>" + Math.round(this.pila[i]*10000000)/10000000 + "</p>";
        }
    }

    suma(){
        if(this.pila.length >= 2){
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value1+value2;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    resta(){
        if(this.pila.length >= 2){
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2-value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    multiplicacion(){
        if(this.pila.length >= 2){
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2*value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    division(){
        if(this.pila.length >= 2){
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2/value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    numero(numero){
        if(this.pantalla == "0"){
            this.pantalla = numero +"";
        }else{
            this.pantalla += numero +"";
        }
        document.getElementById("entrada").innerHTML= "<p>" + this.pantalla + "</p>";
        
    }

    punto(){
        this.pantalla +=".";
        document.getElementById("entrada").innerHTML= "<p>" + this.pantalla + "</p>";
    }

    enter(){
        this.pila.push(this.pantalla+"");
        this.mostrarPila();
        this.pantalla = 0;
        document.getElementById("entrada").innerHTML= "<p>" + this.pantalla + "</p>";
    }

    cos(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.cos(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    sin(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.sin(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    tan(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.tan(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    acos(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.acos(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    asin(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.asin(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    atan(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.atan(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    borrar(){
        this.pila = new Array();
        this.pantalla = "0";
        this.mostrarPila();
        document.getElementById("entrada").innerHTML= "<p>" + this.pantalla + "</p>";
    }

    delete(){
        if(this.pantalla.length >1){
            this.pantalla = this.pantalla.toString().substring(0,this.pantalla.length-1);
        }else{
            this.pantalla = "0";
        }
        document.getElementById("entrada").innerHTML= "<p>" + this.pantalla + "</p>";
    }

    e(){
        this.pantalla = Math.E;
        document.getElementById("entrada").innerHTML= "<p>" + this.pantalla + "</p>";
    }

    log(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.log10(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    ln(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.log(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    exponente(){
        if(this.pila.length >= 2){
            var value1 = parseFloat(this.pila.pop());
            
            var result = value2*10**value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    cuadrado(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = value1**2;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    potencia(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2**value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    raiz(){
        if(this.pila.length >= 1){
            var value1 = parseFloat(this.pila.pop());
            var result = Math.sqrt(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }
}

var calc = new CalculadoraRPN();