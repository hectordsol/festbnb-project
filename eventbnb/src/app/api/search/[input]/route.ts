import axios from "axios";
import { NextResponse } from "next/server";
import { Salon } from "../../filters/route";
const url = process.env.MICROSERVICIOS


export async function GET(request: Request, { params }){
    try {
      let { input } = params
      input = input.toLowerCase()
        const { data } = await axios(`${url}/salones`)
        let salones = data.data
        let filtered : any;
        if (salones) {
          // Filtrar las cards por el término de búsqueda en nombre, domicilio, localidad y ubicación
          filtered = salones.filter(
            (salon: Salon) =>
              salon.nombre.toLowerCase().includes(input) ||
              salon.domicilio.toLowerCase().includes(input) ||
              salon.localidad.toLowerCase().includes(input) ||
              salon.ubicacion.toLowerCase().includes(input)
          );
        }

        return NextResponse.json({ message: filtered });
      } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        NextResponse.json({ error: 'Hubo un error al procesar la solicitud.' });
      }
    
}