class CalculadoraBasica {
	
	constructor(pantalla,memoria){
		this.pantalla = pantalla;
		this.memoria = memoria;
	}
	
	digitos(numero){
		if(this.pantalla == "0"){
			this.pantalla = numero + "";
		}else{
			this.pantalla = this.pantalla + numero + "";
		}
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	punto(){
		this.pantalla+=".";
		document.getElementById("pantalla").value = this.pantalla;
	}
	suma(){
		this.pantalla+="+";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	resta(){
		this.pantalla+="-";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	multiplicacion(){
		this.pantalla+="*";
		document.getElementById("pantalla").value = this.pantalla;
	}
	
	division(){
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
			document.getElementById("pantalla").value = this.pantalla;
		}catch(err) {
			this.pantalla = "Error = " + err;
			document.getElementById("pantalla").value = this.pantalla;
		}
	}
}

var calc = new CalculadoraBasica("","0");