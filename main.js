function primeiraAltitude(){
    navigator.geolocation.getCurrentPosition(function(position){
        document.getElementById("primeiroresultado").innerHTML = position.coords.altitude
    })
}

function segundaAltitude(){
    navigator.geolocation.getCurrentPosition(function(position){
        document.getElementById("segundoresultado").innerHTML = position.coords.altitude
        var primeiraAltitude = document.getElementById("primeiroresultado").innerHTML
        document.getElementById("resultadofinal").innerHTML = position.coords.altitude - primeiraAltitude
    })
}

