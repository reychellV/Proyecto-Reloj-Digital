function calcularTiempo() {
    
    let tiempo=new Date(); //Tiempo - hora local

    let hora= tiempo.getHours(); //horas
    let minuto= tiempo.getMinutes(); //minuto
    let segundo= tiempo.getSeconds(); //seg

    hora=hora<10 ? "0" +hora:hora; //si la hora es inferior a 10 colocar un cero al lado izquierdo
    minuto=minuto<10 ? "0" +minuto:minuto;
    segundo=segundo<10 ? "0" +segundo:segundo;

    let pantallaReloj=hora + ":" + minuto+ ":" + segundo;
    let relojDigital = document.querySelector(".reloj");
    relojDigital.innerHTML=pantallaReloj;
}
setInterval(calcularTiempo, 1000); //se actualiza cada 1000 milisegundos
