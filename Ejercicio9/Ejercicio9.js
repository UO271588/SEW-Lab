class AppMeteo{
    constructor(){
        this.apikey = "e4acce415326fa1d006a844350e739ae";
        this.ciudades = ["Caso","Oviedo","Cangas de Onis"];
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>"
    }

    cargarDatos(){
        for(var i = 0; i<this.ciudades.length; i++){
            this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudades[i] + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
            $.ajax({
                dataType: "xml",
                url: this.url,
                method: 'GET',
                success: function(datos){   
                    var ciudad                = $('city',datos).attr("name");
                    var longitud              = $('coord',datos).attr("lon");
                    var latitud               = $('coord',datos).attr("lat");
                    var pais                  = $('country',datos).text();
                    var amanecer              = $('sun',datos).attr("rise");
                    var minutosZonaHoraria    = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970   = Date.parse(amanecer);
                        amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer             = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                        oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var temperatura           = $('temperature',datos).attr("value");
                    var temperaturaMin        = $('temperature',datos).attr("min");
                    var temperaturaMax        = $('temperature',datos).attr("max");
                    var humedad               = $('humidity',datos).attr("value");
                    var presion               = $('pressure',datos).attr("value");
                    var velocidadViento       = $('speed',datos).attr("value");
                    var direccionViento       = $('direction',datos).attr("value");
                    var descripcion           = $('weather',datos).attr("value");
                    var icon                  = $('weather',datos).attr("icon");
                    var horaMedida            = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");


                    var stringDatos = "<section><h2>" + ciudad + ", " + pais + "</h2>";
                        stringDatos += "<div id = tiempoact><img src = \"http://openweathermap.org/img/wn/" + icon +"@2x.png\"/>";
                        stringDatos += "<p>" + Math.round(temperatura) + " ºC</p></div>";                   
                        stringDatos += "<p>Descripcion: " + descripcion + " ºC</p>";
                        stringDatos += "<p id = maxima>Temp Max: " + Math.round(temperaturaMax) + " ºC</p>";
                        stringDatos += "<p id = minima>Temp Min: " + Math.round(temperaturaMin) + " ºC</p>";
                        stringDatos += "<p>Presión: " + presion + " mb</p>";
                        stringDatos += "<p>Humedad: " + humedad + " %</p>";
                        stringDatos += "<p>Amanece a las: " + amanecerLocal + "</p>";
                        stringDatos += "<p>Oscurece a las: " + oscurecerLocal + "</p>";
                        stringDatos += "<p>Dirección del viento: " + direccionViento + " grados</p>";
                        stringDatos += "<p>Velocidad del viento: " + velocidadViento + " metros/segundo</p>";
                        stringDatos += "<p>Hora de Medida: " + horaMedidaLocal + " metros/segundo</p>";
                        stringDatos += "<p>Fecha de Medida: " + fechaMedidaLocal + " metros/segundo</p></section>";
                        $("#principal").append(stringDatos);
                    },
                error:function(){
                    $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                    $("h4").remove();
                    $("pre").remove();
                    $("p").remove();
                    }
            });
        }
    }
}

var meteo = new AppMeteo();