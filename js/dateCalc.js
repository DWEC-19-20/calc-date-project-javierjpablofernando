

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/



function calcDate(startdate, days) { 

  var fecha= new Date(document.getElementById('fecha').value);
  var dias= document.getElementById('dias').value;
  var result = calcDate1(fecha, dias);
  alert(result);
  var date = new Date(fecha.getFullYear(), fecha.getMonth() - 1, fecha.getDate() + parseInt(dias));
  document.getElementById("soluccion").value = new Date(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
  return new Date(result).toLocaleDateString("es-ES");
}
function calcDate1(startdate, days) {

  var date = new Date(startdate.getFullYear(), startdate.getMonth() - 1, (startdate.getDate() + parseInt(days)));
  alert(new Date(date).toLocaleDateString("es-ES"));
  return new Date(date).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
  /*var num=endDate-startdate;
   return num;*/
   var diferencia= document.getElementById('d');
   var fechaIni = new Date(document.getElementById('inicio').value);
   var fechaFin = new Date(document.getElementById('fin').value);
   var diasDif = fechaFin.getTime()-fechaIni.getTime();
   var contDias = Math.round(diasDif/(1000*60*60*24))+ " dias de diferencia";
   diferencia.value = contDias;
}


/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) { 
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
}
/*Codigo para POPUPS<a href="/index.html" target="_blank" onClick="window.open(this.href, this.target, 'width=300,height=400'); return false;">*/

