class AppMeteo{
    constructor(){
        this.apikey = "e4acce415326fa1d006a844350e739ae";
        this.ciudades = ["Caso","Oviedo","Cangas de Onis"];
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
    }

    cargarDatos(){
        for(var i = 0; i<this.ciudades.length; i++){
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudades[i] + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){   
                    var stringDatos = "<section><h2>" + datos.name + ", " + datos.sys.country + "</h2>";
                    stringDatos += "<div id = tiempoact><img src = \"http://openweathermap.org/img/wn/" + datos.weather[0].icon +"@2x.png\"/>";                   
                    stringDatos += "<p>" + Math.round(datos.main.temp) + " ºC</p></div>";
                    stringDatos += "<p id = maxima> Temp Max: " + Math.round(datos.main.temp_max) + " ºC</p>";
                    stringDatos += "<p id = minima> Temp Min: " + Math.round(datos.main.temp_min) + " ºC</p>";
                    stringDatos += "<p>Presión: " + datos.main.pressure + " mb</p>";
                    stringDatos += "<p>Humedad: " + datos.main.humidity + " %</p>";
                    stringDatos += "<p>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</p>";
                    stringDatos += "<p>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</p>";
                    stringDatos += "<p>Dirección del viento: " + datos.wind.deg + " grados</p>";
                    stringDatos += "<p>Velocidad del viento: " + datos.wind.speed + " metros/segundo</p></section>";
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