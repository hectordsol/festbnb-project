export interface Columns {
    name: string;
    state: string;
    type: string;
}

export interface Services {
    text: string;
    state: string;
    isActive: boolean;
}

export const services: Services[] = [
    {
        text: 'Baños accesibles',
        state: 'baño_accesibilidad',
        isActive: false
    },
    {
        text: 'Accesibilidad',
        state: 'accesibilidad',
        isActive: false
    },
    {
        text: 'Estacionamiento',
        state: 'estacionamiento',
        isActive: false
    },
    {
        text: 'Catering',
        state: 'catering',
        isActive: false
    },
    {
        text: 'Mesas y sillas',
        state: 'mesas_sillas',
        isActive: false
    },
    {
        text: 'Luces',
        state: 'luces',
        isActive: false
    },
    {
        text: 'Sonido',
        state: 'sonido',
        isActive: false
    },
    {
        text: 'Fotografia',
        state: 'fotografia',
        isActive: false
    },
    {
        text: 'Decoracion',
        state: 'decoracion',
        isActive: false
    },
    {
        text: 'Pileta',
        state: 'pileta',
        isActive: false
    },
    {
        text: 'WiFi',
        state: 'wifi',
        isActive: false
    },
    {
        text: 'Cocina',
        state: 'cocina',
        isActive: false
    },
    {
        text: 'Escenario',
        state: 'escenario',
        isActive: false
    }
]

export const columns: Columns[] = [
    {
        name: "Nombre",
        state: "nombre",
        type: "string"
    },
    {
        name: "Estado",
        state: "borrado",
        type: "boolean"
    },
    {
        name: "Fecha",
        state: "fechaCreacion",
        type: "date"
    },
    {
        name: "Baños",
        state: "baño",
        type: "number"
    },
    {
        name: "Seguridad",
        state: "personal_seguridad",
        type: "number"
    },
    {
        name: "Capacidad",
        state: "capacidad_max",
        type: "number"
    }
]

export const convertDate = (date) => {
    const s = new Date(date);
    const days = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dayName = days[s.getUTCDay()];
    const options = { month: '2-digit', year: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(s);
    return `${dayName} ${formattedDate}`
}
