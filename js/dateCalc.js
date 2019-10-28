

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/



function calcDate(startdate, days) { 
  //var resul=document.getElementById("soluccion");
  var fecha= new Date(document.getElementById('fecha').value);
  var dias= document.getElementById('dias').value;
  //var result = calcDate1(fecha, dias);
 
  
  var date = new Date(fecha.getFullYear(), fecha.getMonth() +1, fecha.getDate() + parseInt(dias));


  var fin=document.getElementById("soluccion").value = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  var sup=new Date(fin.getDate()+"/"+fin.getMonth()+"/"+fin.getFullYear());
  //return new Date(result).toLocaleDateString("es-ES");
  resul.value=sup;
}


/*function calcDate1(startdate, days) {

  var date = new Date(startdate.getFullYear(), startdate.getMonth(), (startdate.getDate() + parseInt(days)+1));
  alertalert(new Date(date).toLocaleDateString("es-ES"));
  document.getElementById("soluccion")=date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
  return new Date(date).toLocaleDateString("es-ES");
}*/

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

function today(startdate, days){
  
 var date = new Date();
 if (document.getElementById("fecha")){
 document.getElementById("fecha").value =  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
 }
 else if (document.getElementById("finicial2")){
 document.getElementById("finicial2").value =  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}
else if(document.getElementById("inicial2")){
  document.getElementById("inicial2").value =  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}
else if(document.getElementById("inicio")){
  document.getElementById("inicio").value =  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}
}
function today2(startdate, days){
  var date= new Date();
if(document.getElementById("ffinal2")){
document.getElementById("ffinal2").value =  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}
else if(document.getElementById("fin")){
  document.getElementById("fin").value =  date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}
}
