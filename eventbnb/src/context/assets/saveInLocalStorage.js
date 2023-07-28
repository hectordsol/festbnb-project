export default function saveInLocalStorage(title, data) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(title, JSON.stringify(data));
    return "datos guardados exitosamente";
  } else {
    console.log("LocalStorage no soportado en este navegador");
  }
}

/*
El localStorage es un objeto en JavaScript que permite almacenar datos 
de forma persistente en el navegador web. Proporciona una forma sencilla 
de almacenar información en pares clave-valor.
*/
/*
La función saveInLocalStorage(title, data) se utiliza para almacenar datos 
en el localStorage. Verifica si el objeto Storage está definido en el 
navegador antes de intentar guardar los datos. Si está definido, llama al 
método setItem(title, JSON.stringify(data)) del objeto localStorage para
 guardar los datos en forma de cadena JSON. La clave para los datos es title. 
 Si los datos se guardan correctamente, la función devuelve el mensaje 
 "datos guardados exitosamente". Si el localStorage no está soportado en el
  navegador, se muestra un mensaje de error en la consola.
*/
