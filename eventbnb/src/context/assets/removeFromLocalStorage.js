export default function removeFromLocalStorage(key) {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(key);
  }
}

/*
 El localStorage es un objeto en JavaScript que permite almacenar datos 
 de forma persistente en el navegador web. Proporciona una forma sencilla 
 de almacenar información en pares clave-valor.
*/
/*
La función removeFromLocalStorage(key) se utiliza para eliminar un elemento 
del localStorage utilizando la clave (key). Primero, verifica si el objeto 
localStorage está definido en el navegador antes de intentar eliminar el 
elemento. Si está definido, llama al método removeItem(key) del objeto 
localStorage para eliminar el elemento correspondiente a la clave proporcionada.
*/
