class GestorPagina{
    constructor(){
    }

    ocultarParrafos(){
        $("#parrafoocultar1").hide();
        $("#parrafoocultar2").hide();
    }

    modificarParrafo(){
        $("#parrafomodificar1").text("Esto es un parrafo modificado");
    }

    añadirFinal(){
        $("#parrafomodificar2").append("Texto añadido al final");
    }

    añadirInicio(){
        $("#parrafomodificar3").prepend("Texto añadido al inicio");
    }

    añadirDespues(){
        $("#parrafoañadir1").after("<p>Parrafo añadido despues</p>");
    }

    añadirAntes(){
        $("#parrafoañadir2").before("<p>Parrafo añadido antes</p>");
    }

    eliminar(){
        $("#parrafoeliminar").remove();
    }

    recorrerHtml(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    sumarFilas(){
        $("table tr").each(function() {
            var total = 0;
            var hijos = $(this).children(".data");
            for(var i = 0; i < hijos.length; i++){
                total += parseInt($(hijos[i]).text());
            }
            var result = $(this).children(".resultfila");
            if(result.length > 0){
                $(result[0]).text(total);
            }
        });
    }

    sumarColumnas(){
        var filas = $("table tr");
        var numColumnas = $(filas[1]).children(".data").length;
        for(var i = 0; i<numColumnas; i++){
            var total = 0;
            for(var j = 0; j<filas.length; j++){
                var columnas = $(filas[j]).children(".data");
                if(columnas.length>0){
                    total += parseInt($($(filas[j]).children(".data")[i]).text());
                }
            }
            $($("table tr .resultcol")[i]).text(total);
        }
    }
}

var gestor = new GestorPagina();