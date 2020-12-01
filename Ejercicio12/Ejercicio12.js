class CargaArchivos{
    constructor(){
        this.tipoTexto = /text.*/;
        this.tipoJson = /application.json/
    }

    visualizarArchivos(nombre){
        var nBytes = 0;
        var archivos = document.getElementById(nombre).files;
        var nArchivos = archivos.length;
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }

        var nombresTiposTamaños="";
        for (var i = 0; i < nArchivos; i++) {
            nombresTiposTamaños += "<p>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + " Tipo: " + archivos[i].type+"</p>" ;


            var archivo = archivos[i];
            var nombre = document.getElementById("nombreArchivo");
            var tamaño = document.getElementById("tamañoArchivo");
            var tipo = document.getElementById("tipoArchivo");
            var ultima = document.getElementById("ultimaModificacion");
            var contenido = document.getElementById("contenidoArchivo");
            var areaVisualizacion = document.getElementById("areaTexto");
            var errorArchivo = document.getElementById("errorLectura");
            nombre.innerText = "Nombre del archivo: " + archivo.name;
            tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
            tipo.innerText = "Tipo del archivo: " + archivo.type;
            ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;

            if (archivos[i].type.match(this.tipoTexto) || archivos[i].type.match(this.tipoJson)){
                contenido.innerText="Contenido del archivo de texto:";
                var lector = new FileReader();
                lector.onload = function (evento) {
                    areaVisualizacion.innerText = lector.result;
                }      
                lector.readAsText(archivos[i]);
            }else{
                contenido.innerText="";
                areaVisualizacion.innerText = "";
            }      
        }
    }
}

var carga = new CargaArchivos();