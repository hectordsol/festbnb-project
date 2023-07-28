export interface Body<T> {
  error: boolean;
  data:  T;
}

export interface IEventHall {
  reviews: any;
  imagenes:           string[];
    _id:                string;
    nombre:             string;
    domicilio:          string;
    localidad:          string;
    ubicacion:          string;
    telefono:           number;
    precio:             number;
    capacidad_max:      number;
    superficie:         number;
    aire_acondicionado: number;
    parrilla:           number;
    pantalla:           number;
    personal_seguridad: number;
    baño:               number;
    baño_accesibilidad: boolean;
    accesibilidad:      boolean;
    estacionamiento:    boolean;
    catering:           boolean;
    mesas_sillas:       boolean;
    luces:              boolean;
    sonido:             boolean;
    fotografia:         boolean;
    decoracion:         boolean;
    pileta:             boolean;
    wifi:               boolean;
    cocina:             boolean;
    escenario:          boolean;
    descripcion:        string;
    borrado:            boolean;
    propietario:        Propietario;
    eventos:            Evento[];
    fechaCreacion:      Date;
    __v:                number;
}

export interface Evento {
  _id:          string;
  Fecha_inicio: Date;
  Fecha_fin:    Date;
  cliente:      Cliente;
  review:       Review | null;
}

export interface Cliente {
  _id:       string;
  nombre:    string;
  apellido?: string;
}

export interface Review {
  _id:        string;
  comentario: string;
  puntaje:    string;
  fecha:      string;
}

export interface Propietario {
  _id:    string;
  nombre: string;
}
