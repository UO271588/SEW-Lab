'use strict';

class CalculadoraBasica {
	constructor(pantalla,memoria){
		this.pantalla = pantalla;
		this.memoria = memoria;
		this.operadores = [];
	}
	
	digitos(numero){
		if(this.pantalla == "0"){
			this.pantalla = numero + "";
		}else{
			this.pantalla = this.pantalla + "" + numero ;
		}
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	punto(){
		this.pantalla+=".";
		document.getElementById("pantalla").value = this.pantalla;
	}
	suma(){
		this.operadores.push("+");
		this.pantalla+="+";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	resta(){
		this.operadores.push("-");
		this.pantalla+="-";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	multiplicacion(){
		this.operadores.push("*");
		this.pantalla+="*";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	division(){
		this.operadores.push("/");
		this.pantalla+="/";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	mrc(){
		this.pantalla = "" + this.memoria;
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	mMenos(){
		try { 
			this.memoria = eval(this.memoria + "-" + this.pantalla);
		}
		catch(err) {
			this.pantalla = "Error = " + err;
			document.getElementById("pantalla").value = this.pantalla;
		}
	}
	
	mMas(){
		try { 
			this.memoria = eval(this.memoria + "+" + this.pantalla);
		}
		catch(err) {
			this.pantalla = "Error = " + err;
			document.getElementById("pantalla").value = this.pantalla;
		}
	}
	
	borrar(){
		this.pantalla = "";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	igual(){
		try { 
			this.pantalla = eval(this.pantalla);
			document.getElementById("pantalla").value = this.pantalla + "";
		}catch(err) {
			this.pantalla = "Error = " + err;
			document.getElementById("pantalla").value = this.pantalla;
			this.pantalla="";
		}
		this.operadores = [];
	}
}

class Calculadora extends CalculadoraBasica{
	
	constructor(){
		super("","0");
	}	
	
	cos(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.cos(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.cos(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	sin(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion + Math.sin(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.sin(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	tan(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion + Math.tan(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.tan(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	aCos(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.acos(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.acos(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	aSin(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.asin(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.asin(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	aTan(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.atan(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.atan(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}	
	sec(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+"1/"+ Math.cos(eval(this.ultimovalor)));
		}else{
			this.pantalla = "1/"+ Math.cos(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	csc(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+"1/"+ Math.sin(eval(this.ultimovalor)));
		}else{
			this.pantalla = "1/"+ Math.sin(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	cot(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+"1/"+ Math.tan(eval(this.ultimovalor)));
		}else{
			this.pantalla = "1/"+ Math.tan(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}	
	
	log(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.log10(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.log10(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}

	ln(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.log(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.log(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}

	e(){
		this.pantalla += Math.E;
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	potencia(){
		this.pantalla += "**"; 
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	raiz(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.sqrt(eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.sqrt(eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}
	
	pi(){
		this.pantalla += Math.PI;
		document.getElementById("pantalla").value = this.pantalla;
	}

	fact(){
		if(this.pantalla.toString().split(".").length == 1 && this.pantalla >= 0){
			this.pantalla = this.fact1(eval(this.pantalla));
			document.getElementById("pantalla").value = this.pantalla;
			this.operadores = [];
		}else{
			document.getElementById("pantalla").value = "Error, must be a positive integer";
			this.operadores = [];
		}
	}

	fact1(entero){
		if(entero == 0){
			return 1;
		}else{
			return entero*this.fact1(entero-1);
		}
	}

	abs(){
		this.pantalla = Math.abs(eval(this.pantalla));
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}

	cuadrado(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.pow(eval(this.ultimovalor),2));
		}else{
			this.pantalla = Math.pow(eval(this.pantalla),2);
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}

	cubo(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.pow(eval(this.ultimovalor),3));
		}else{
			this.pantalla = Math.pow(eval(this.pantalla),3);
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}

	exponente(){
		if(this.operadores.length != 0){
			this.ultimovalor = this.pantalla.split(this.operadores[this.operadores.length-1])[this.pantalla.split(this.operadores[this.operadores.length-1]).length-1];
			this.operacion = this.pantalla.toString().substring(0,this.pantalla.toString().length-this.ultimovalor.toString().length);
			this.pantalla = eval(this.operacion+Math.pow(10,eval(this.ultimovalor)));
		}else{
			this.pantalla = Math.pow(10,eval(this.pantalla));
		}
		document.getElementById("pantalla").value = this.pantalla;
		this.operadores = [];
	}

	delete(){
		this.pantalla = this.pantalla.toString().substring(0,this.pantalla.toString().length -1);
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	borrartodo(){
		this.pantalla = "";
		this.memoria = "";
		document.getElementById("pantalla").value = this.pantalla;
	}

}
var calc = new Calculadora();