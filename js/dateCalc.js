

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) { 
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
  var num=endDate-startdate;
   return num;
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
  var cont=0;
  var mes = "October";
  var dia = "17";
  var anio = "2019";
  var dias=["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
  var dt = new Date(mes+' '+dia+', '+anio);
  var text = "Dia de la semana : " + dias[dt.getUTCDay()];
  document.getElementById("soluccion2").innerHTML = text;
  for (var text=startdate; dia<=endDate; dia++){
    switch (dia){
      case "Lunes":
        cont++;
        break;
      case "Martes":
            cont++;
            break;
      case "Miercoles":
                cont++;
                break;
      case "Jueves":
                    cont++;
                    break;
      case "Viernes":
        cont++;
        break;                         
    }
  }
   return cont;
}

/*Codigo para POPUPS<a href="/index.html" target="_blank" onClick="window.open(this.href, this.target, 'width=300,height=400'); return false;">*/

