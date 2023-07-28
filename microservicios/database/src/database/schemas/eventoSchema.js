const {Schema}=require("mongoose");
const eventoSchema = new Schema(
{
    Fecha_inicio: Date,
    Fecha_fin: Date,
    cliente: {type: String, ref: "Usuario"},
    salon: {type: String, ref: "Salon"},
    reserva: {type: String, ref: "Reserva", default:null},
    review: {type: String, ref: "Review", default:null}
  });
  eventoSchema.statics.list = async function (){
    return await this.find()
      .populate("cliente",["_id","nombre","apellido"])
      .populate("salon", ["_id","nombre"])
      .populate("reserva")
      .populate("review",["comentario","puntaje","fecha"])
  };
  eventoSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
    .populate("cliente",["_id","nombre","apellido"])
    .populate("salon", ["_id","nombre"])
    .populate("review",["comentario","puntaje","fecha"])
  };
  eventoSchema.statics.insert = async function (evento){
    return await this.create(evento);
  };
  eventoSchema.statics.change = async function (id, evento){
    return await this.findByIdAndUpdate(id, evento,{new:true});
  };
  eventoSchema.statics.remover = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  // Función para verificar superposición de fechas
  eventoSchema.statics.verificarFechas = async function (
    salonId,
    fechaInicio,
    fechaFin
  ) {
    return await this.find({
      salon: salonId,
      $or: [
        { Fecha_inicio: { $gte: fechaInicio, $lt: fechaFin } },
        { Fecha_fin: { $gt: fechaInicio, $lte: fechaFin } },
        { $and: [{ Fecha_inicio: { $lte: fechaInicio } }, { Fecha_fin: { $gte: fechaFin } }] }
      ],
    });
  };
  module.exports = eventoSchema;