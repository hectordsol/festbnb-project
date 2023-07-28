import Account from "../../components/account/Account";
import Back from "../../components/back/Back";
// const userTemplate = {
//     _id: "649f8ccc12b6415694a8e746",
//     nombre: "Exe",
//     apellido: "Gerez",
//     email: "usuario5@usuario.com",
//     password: "432154534",
//     telefono: "176565",
//     fechaNacimiento: new Date(),
//     domicilio: "Bosques, jose Ingenieros",
//     localidad: "Bs As",
//     pais: "Arg",
//   };
const AccountPage = () => {
  return (
    <section className="">
      <Back />
      <Account />
    </section>
  );
};

export default AccountPage;
