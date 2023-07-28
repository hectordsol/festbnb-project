export const newPetition = async (method, url, dataToSend) => {
  try {
    let config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (dataToSend) {
      config = { ...config, body: JSON.stringify(dataToSend) };
    }

    let response = await fetch(url, config);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("in petition: ", error);
  }
};

/*
El localStorage es un objeto en JavaScript que permite almacenar datos 
de forma persistente en el navegador web. Proporciona una forma sencilla 
de almacenar información en pares clave-valor.
*/
/*
La función newPetition(method, url, dataToSend) no está directamente 
relacionada con el localStorage, pero se utiliza para enviar una petición 
HTTP a una URL especificada. La función utiliza fetch para realizar la 
petición y devuelve los datos de respuesta en formato JSON. Los datos de 
respuesta pueden ser almacenados posteriormente en el localStorage utilizando 
la función saveInLocalStorage. Si ocurre algún error durante la petición, 
se muestra un mensaje de error en la consola.
*/
