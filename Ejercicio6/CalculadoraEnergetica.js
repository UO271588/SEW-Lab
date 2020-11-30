'use strict';

class Equipo{
    constructor(pos,numUnits,nombre,gasto){
        this.posicion = pos;
        this.numeroUnidades = numUnits;
        this.gasto = gasto;
        this.nombre = nombre;
    }
}

class CalculadoraEnergetica{
    constructor(){
        this.equipos = new Array();
        this.equipos.push(new Equipo(0,0,0,0));
    }

    sumar(num){
        this.equipos[num].numeroUnidades++;
        document.getElementById("unidades"+num).value = this.equipos[num].numeroUnidades;
        this.actualizar();
    }

    restar(num){
        var res = this.equipos[num].numeroUnidades-1;
        if(res <= 0){
            this.equipos[num].numeroUnidades = 0;
        }else{
            this.equipos[num].numeroUnidades--;
        }
        document.getElementById("unidades"+num).value = this.equipos[num].numeroUnidades;
        this.actualizar();
    }

    mostrarEquipos(){
        document.getElementById("equipos").innerHTML = "";
        for(var i = 0; i<this.equipos.length; i++){
            document.getElementById("equipos").innerHTML += "<div id=\"equipo\">"+
                    "<select id=\"optionlist"+ i +"\">" +
                    "<option value = \"nevera\" onclick= \"calc.seleccionar("+i+",'Nevera')\">Nevera</option>"+
                    "<option value = \"microondas\">Microondas</option>"+
                    "<option value = \"horno\">Horno</option>"+
                    "<option value = \"luces\">Luces</option>"+
                    "<option value = \"television\">Televisión</option>"+
                    "<option value = \"calefaccion\">Calefacción</option>"+
                    "</select>"+
                    "<input type=\"text\" id=\"unidades"+i+"\" value = \""+ this.equipos[i].numeroUnidades+"\" readonly />"+
                    "<div id = \"botones\">"+
				    "<input type=\"button\" id=\"mas\" value=\"+\" onclick=\"calc.sumar("+i+")\"/>"+
			    	"<input type=\"button\" id=\"menos\" value=\"-\" onclick=\"calc.restar("+i+")\"/>"+
			    	"</div>"+
			    	"<input type=\"text\" id=\"gasto"+i+"\" value=\""+ this.equipos[i].gasto+"\"></input>"+                
                    "</div>";            
        }
        for(var i = 0; i<this.equipos.length; i++){
            if(this.equipos[i].nombre == 0){
                document.getElementById("optionlist" + i).selectedIndex = 0;
            }else if(this.equipos[i].nombre == 1){
                document.getElementById("optionlist" + i).selectedIndex = 1;
            }else if(this.equipos[i].nombre == 2){
                document.getElementById("optionlist" + i).selectedIndex = 2;
            }else if(this.equipos[i].nombre == 3){
                document.getElementById("optionlist" + i).selectedIndex = 3;
            }else if(this.equipos[i].nombre == 4){
                document.getElementById("optionlist" + i).selectedIndex = 4;
            }else if(this.equipos[i].nombre == 5){
                document.getElementById("optionlist" + i).selectedIndex = 5;
            }else if(this.equipos[i].nombre == 6){
                document.getElementById("optionlist" + i).selectedIndex = 6;
            }
        }
    }

    actualizar(){
        var total = 0;
        for(var i = 0; i<this.equipos.length; i++){
            this.equipos[i].nombre = document.getElementById("optionlist" + i).selectedIndex;
            this.equipos[i].gasto = document.getElementById("gasto"+i).value; 
            total += this.equipos[i].numeroUnidades* this.equipos[i].gasto;
            total += total*(0.2+0.1*document.getElementById("calificacionlist").selectedIndex);
            document.getElementById("total").value=Math.round(total*1000)/1000;
            var precio = total*0.173;
            document.getElementById("precio").value=Math.round(precio*1000)/1000;
        }
    }

    añadir(){
        this.actualizar();
        this.equipos.push(new Equipo(this.equipos.length,0,0,0));
        this.mostrarEquipos();
    }   

    borrar(){
        this.actualizar();
        this.equipos.pop();
        this.mostrarEquipos();
    }


}

var calc = new CalculadoraEnergetica();