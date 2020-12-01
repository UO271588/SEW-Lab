
class Intercambio{
    constructor(){
        this.access_key = "c252ee68be5cb969439c1df4f90acd56";
        this.EURUSD = 0;
        this.EURGBP = 0;
        this.EURCHF = 0;
        this.EURDKK = 0;
        this.EURCNY = 0;
        this.EUR = 0;
    }

    convertirEuroADolar(){
        var endpoint = 'live'

        // get the most recent exchange rates via the "live" endpoint:
        $.ajax({
            url: "http://apilayer.net/api/" + endpoint + "?access_key=" + this.access_key,   
            dataType: "json",
            method: "GET",
            success: function(json) {
                this.EURUSD = 1/json.quotes.USDEUR;
                this.EUR = parseFloat($("#euro").val());
                $("#dolar").remove();
                $("#resultados").append("<div id = \"dolar\"><input type = \"text\" value = \"" + Math.round(this.EUR*this.EURUSD*1000)/1000 + "\" readonly></input>"
                                +"<p>Dolares</p></div>");
            }
        });
    }

    convertirEuroAYenes(){
        var endpoint = "live";

        // get the most recent exchange rates via the "live" endpoint:
        $.ajax({
            url: "http://apilayer.net/api/" + endpoint + "?access_key=" + this.access_key,   
            dataType: "json",
            method: "GET",
            success: function(json) {
                this.EURUSD = 1/json.quotes.USDEUR;
                this.EURCNY = this.EURUSD*json.quotes.USDCNY;
                this.EUR = parseFloat($("#euro").val());
                $("#yenes").remove();
                $("#resultados").append("<div id = \"yenes\"><input type = \"text\" value = \"" + Math.round(this.EUR*this.EURCNY*1000)/1000 + "\" readonly></input>"
                                +"<p>Yenes</p></div>");
            }
        });
    }

    convertirEuroAFrancosSuizos(){
        var endpoint = "live";

        // get the most recent exchange rates via the "live" endpoint:
        $.ajax({
            url: "http://apilayer.net/api/" + endpoint + "?access_key=" + this.access_key,   
            dataType: "json",
            method: "GET",
            success: function(json) {
                this.EURUSD = 1/json.quotes.USDEUR;
                this.EURCHF = this.EURUSD*json.quotes.USDCHF;
                this.EUR = parseFloat($("#euro").val());
                $("#francos").remove();
                $("#resultados").append("<div id = \"francos\"><input type = \"text\" value = \"" + Math.round(this.EUR*this.EURCHF*1000)/1000 + "\" readonly></input>"
                                +"<p>Francos Suizos</p></div>");
            }
        });
    }

     convertirEuroACoronas(){
        var endpoint = "live";

        // get the most recent exchange rates via the "live" endpoint:
        $.ajax({
            url: "http://apilayer.net/api/" + endpoint + "?access_key=" + this.access_key,   
            dataType: "json",
            method: "GET",
            success: function(json) {
                this.EURUSD = 1/json.quotes.USDEUR;
                this.EURDKK = this.EURUSD*json.quotes.USDDKK;
                this.EUR = parseFloat($("#euro").val());
                $("#coronas").remove();
                $("#resultados").append("<div id = \"coronas\"><input type = \"text\" value = \"" + Math.round(this.EUR*this.EURDKK*1000)/1000 + "\" readonly></input>"
                                +"<p>Coronas Danesas</p></div>");      
            }
        });
    }

     convertirEuroALibra(){
        var endpoint = "live";

        // get the most recent exchange rates via the "live" endpoint:
        $.ajax({
            url: "http://apilayer.net/api/" + endpoint + "?access_key=" + this.access_key,   
            dataType: "json",
            method: "GET",
            success: function(json) {
                this.EURUSD = 1/json.quotes.USDEUR;
                this.EURGBP = this.EURUSD*json.quotes.USDGBP;
                this.EUR = parseFloat($("#euro").val());
                $("#libras").remove();
                $("#resultados").append("<div id = \"libras\"><input type = \"text\" value = \"" + Math.round(this.EUR*this.EURGBP*1000)/1000 + "\" readonly></input>"
                                +"<p>Libras Esterlinas</p></div>");
            }
        });
    }

    convertir(){
        this.convertirEuroADolar();
        this.convertirEuroAYenes();
        this.convertirEuroAFrancosSuizos();
        this.convertirEuroACoronas();
        this.convertirEuroALibra();
    }
}

var inter = new Intercambio();